---
title: "webpack-closure-compiler throws cryptic error (and solution)"
date: 2018-01-26
tags:

layout: layouts/post.njk
---
[webpack-closure-compiler](https://www.npmjs.com/package/webpack-closure-compiler) was used to convert compiled js from ecma6 to ecma5 by [neuroglancer](https://github.com/google/neuroglancer).

**How I found out**  
`npm run build` works, `npm run build-min` does not. Commenting out the [`ClosureCompiler`](https://github.com/google/neuroglancer/blob/de7ca35dd4d9fa4e6c3166d636ee430af6da0fa0/config/webpack_helpers.js#L294) worked.

**The diagnosis**  
New machine, did not install java runtime. Concurrency (default) only works with java runtime installed.

**The fix**  
[install java run time on ubuntu](https://stackoverflow.com/a/14788468/6059235) by

    sudo apt-get install openjdk-8-jdk
    

`npm run build-min` worked.
