---
title: "Some other quirks, not related to three.js"
date: 2017-03-28
tags:
  - bug
  - caret
  - html
  - js
  - logitech
  - mx
  - notepad++
  - sublime
layout: layouts/post.njk
---
For the previous two weeks, I have talked about the quirks I encountered while meddling with three.js. I have also encountered some issues that are not three.js specific. I would like to go through them this week.

* * *

I got a Logitech MX Anywhere 2 recently. In the not so distant past, I had to work with my old mouse on glassy surfaces on a few occasions, often with hacks such as using a few sheets of A4 paper as a mouse pad, producing mixed results.Having a mouse that works on most glassy surface can be helpful. However, Logitech MX series does not seem to want to play ball with Notepad++. Horizontal scroll started off being really slow (approx 3 characters at a time). After numerous attempt at “fixing” the horizontal scroll issue, horizontal scroll stopped working altogether.

After some digging, the problem seems to be [documented](https://github.com/notepad-plus-plus/notepad-plus-plus/issues/2096). (After all, not many people use Notepad ++ and Logitech mice together, I’d wager).

I never could get the problem resolved. So I changed my text-editor to Caret.

This reminds me. I should really try sublime.

I was looking for a way to effortlessly style and present some JSON data. I did not want to import JQuery + Bootstrap, since they add to the weigh and execution time. I did not want to write and debug a bunch of JS codes just to implement a modal window. The solution I settle with came from [this stackoverflow post](http://stackoverflow.com/questions/27705640/display-json-in-a-readable-format-in-a-new-tab/27705690#27705690).

        var myjson = JSON.stringify(json, null, 2);
        console.log(myjson);
        var x = window.open();
        x.document.open();
        x.document.write('<pre>' + myjson + '</pre>');
        x.document.close();
    

Works like a charm.
