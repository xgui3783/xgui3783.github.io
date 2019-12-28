---
title: "JS lessons"
date: 2017-04-10
tags:
  - javascript
  - js
  - lesson learnt the hard way
  - lessons learnt the hard way
  - multi-thread
  - non-blocking
  - web worker
  - webworker
layout: layouts/post.njk
---
lesson 1:

    let code = 'console.log("hello world")'
    eval(eval('code')) // console logs hello world
    

works as expected

* * *

lesson 2:  
babeljs is a es6 -> es5 interpreter… for browser compatibility  
neat feature to usher developers to use es6, to write code, that has good compatibility when the browser adoption rate could be better- - - - - -

lesson 3:  
JS runs on a single thread: not exactly true. Just very recently, I learnt about `webworker`It runs on a separate thread, (non-ui). the disadvantages: webworker has no access to dom, parent, getelementbyid etc. the advantages: it’s non-blocking, and thus useful for cpu intensive processes.
