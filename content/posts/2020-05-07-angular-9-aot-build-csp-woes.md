---
title: "Angular 9 - webpack AOT build - CSP woes"
date: 2020-05-07
tags:
  - javascript
  - angular
  - csp
layout: layouts/post.njk
---
We are actively developing an [angular.io](http://angular.io/) application, which, for historical reason, does not use `angular-cli`. Instead, builds were done via `webpack` and [@ngtools/webpack](https://www.npmjs.com/package/@ngtools/webpack).

We also enabled CSP on production server to disallow unsafe eval.

However, AOT build violates unsafe eval, by invoking [createNamedArrayType](https://github.com/angular/angular/blob/c25503b/packages/core/src/util/named_array_type.ts#L26-L41) method. What is more infuriating is the comment in the file clearly states

```
/**
 * THIS FILE CONTAINS CODE WHICH SHOULD BE TREE SHAKEN AND NEVER CALLED FROM PRODUCTION CODE!!!
 */
```

I would have thought AOT build (by setting `mode`: `production` in webpack configuration) would automatically set the flags to allow the methods to be tree shaken, but clearly I was wrong. 

After much digging, the interim solution seems to be using webpack define plugin to set `ngDevMode` to `false`, and include [terser-webpack-plugin](https://webpack.js.org/plugins/terser-webpack-plugin/) in webpack configuration `optimization.minimizer`