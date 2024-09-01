---
title: "Bizarre behaviour of JS + JS quirkiness."
date: 2016-05-02
tags:
  - css
  - html
  - javascript
  - jquery
  - js
  - lessons learnt the hard way
  - node.js
  - openshift
layout: layouts/post.njk
---
    foo(x); //returns 9
    foo{y); //returns 11
    
    foo(x)>foo(y); //returns true;
    
    function foo(a){  
     /* do something here */  
     return b;  
     }
    
    

Mind = Blown.

Here is a fiddle

I would gather to imagine it’s because JS treats foo(x) and foo(y) as text rather than numbers, so to solve it, wrap it like Number(foo(x)) and Number(foo(y))

more JS quirks. This time my own fault. jquery selectors selects all elements that matches the description. for example:

    $('div#foo div:nth-child(2)')
    

will select **ALL** div elements that are second in its family tree, as long as it is a descendent of #foo. I knew this, but in the heat of the moment, it’s easy to forget.

Finally made a mark. v2.0 of the timetable app is complete. It still lacks some of the features I would like, for example, letting students/parents login and see the subscribed sessions, and responsive timetables. But they will come in the future. Oh, this time, some quirky git features. It seems [git on windows cannot parse filenames that are too long](http://stackoverflow.com/questions/22575662/filename-too-long-in-git-for-windows). And I have experienced this first hand. I will try using a git client to circumvent the problem.
