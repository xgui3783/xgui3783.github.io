---
title: "more foray web-dev: Angular 6 &amp; Webpack"
date: 2018-05-25
tags:

layout: layouts/post.njk
---
Recently, I have been motivated to upgrade the currently application I am writing from Angular 5 to Angular 6. Since there was going to be a rewrite of the application any way, I thought this is a good opportunity to upgrade.

First error:
------------

in `tsconfig.json`, only include `'.ts'` as `resolve.extension`. as a result, `rxjs` kept on throwing error during bundling

    ERROR in ./node_modules/rxjs/_esm5/index.js
    Module not found: Error: Can't resolve './internal/util/pipe' in '/PATH-TO-PROJECT/node_modules/rxjs/_esm5'
    

Second error:
-------------

I changed the `target` from `es5` to `es2015` in lieu for supporting [angular elements](https://angular.io/guide/elements#browser-support-for-custom-elements). But the bundler throws error on failing to find module `@angular/core`. changing `target` back to `es5` circumvents the problem. Turns out, with the increased support for dynamic import, one will need to specify `moduleResolution` as `node` in `tsconfig.json` to explicitly tell the typescript compiler that imports are node modules.
