---
title: "How to fix parent div ignoring child div height"
date: 2017-01-02
tags:
  - css
  - html
  - lesson learnt the hard way
  - lessons learnt the hard way
layout: layouts/post.njk
---
A new year!

But of course, this post is written well ahead as a backlog for the weeks that I will be away (First to Melbourne, in order to attend a friend’s wedding, then go Sichuan, China, to see real pandas.) At the time of writing, I am not even sure who is the 45th President of the United S of A. So who knows. By the time this post is scheduled to be published, the world could be a smouldering ruin.

Disregarding current affairs, we are here to talk about HTML and CSS. I was updating my personal website. Modifying the PHP code to my liking, when I found this bug:

Notice how despite child divs have a well defined height, the parent div does not register. As a result, in our example, it takes 2px (min-height) as its height.

A little bit of digging led me to [this post](http://stackoverflow.com/questions/12540436/height-of-parent-div-is-zero-even-if-it-has-child-with-finite-heights). I adopted not the accepted answer, but the second highest voted answer. This let me to this fiddle:

Victory!
