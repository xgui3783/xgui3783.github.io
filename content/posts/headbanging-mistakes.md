---
title: "Headbanging mistake(s)"
date: 2016-10-24
tags:
  - android programming
  - html
  - java
  - javascript
  - jquery
  - lessons learnt the hard way
  - mysql
  - node.js
  - opencv
  - openshift
layout: layouts/post.njk
---
Recently (well, as recently as 3rd Oct… there is a bit of back log associated with the journal entries), I have been working on a multi platform app which integrates an Android app (which captures an image, and does some data extraction), and sent to the server (which takes the data, and compile it into a report).

Today, (3rd Oct), as I was putting everything together, I encountered head banging bugs plaguing the system. And all of them, turns out, are my own fault.

Let’s count them, shall we?

1.  forgot the append a flattened `ArrayList` as one of the `formPart`
2.  forgot to change the URL of http call from localhost to live

Huh, I guess there are only two mistakes. Well, I ain’t happy about it. >=(
