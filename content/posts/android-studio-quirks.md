---
title: "Android Studio quirks / OpenCV pitfalls"
date: 2016-10-17
tags:
  - android programming
  - java
  - opencv
  - openshift
layout: layouts/post.njk
---
Recently (as recently as this backlogs go, I suppose), I was asked to make an app/webapp that automatically marks multiple choice exams. Because there is a dead line, I figured I will use tools that I am familiar with, and decided to go with:

An android app that runs openCV software, recognising exam paper template, performing warptransform and marks the exam using pixel depth. Then via http protocol, send to …

A webapp, that takes the array of answers and compare them with the actual answers.

Lots of lessons learnt along the way. Here are a few:

1.  classes such as `getSharedPref` should be instantiated _after_ `super.onCreate`. Doing so before crashes the app.
2.  ScrollView can only contain a single view. Therefore, wrap the desired views in a single linearlayout if you want to include, say, multiple imageviews in a scrollview

* * *

Feeling chippy. Now, I can mostly diagnose why OpenCV crashes on me. Most of the time, it’s either the dimension ain’t right, or the depth ain’t right, or the number of channels ain’t right.
