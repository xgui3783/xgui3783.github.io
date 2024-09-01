---
title: "Adventuring into Android studio, Java and OpenCV (with an unexpected detour)"
date: 2016-03-07
tags:
  - android programming
  - css
  - html
  - java
  - javascript
  - jquery
  - lessons learnt the hard way
  - mysql
  - opencv
  - php
layout: layouts/post.njk
---
Following on from the previous week’s progress, this week, we are trying to make progress towards OpenCV to be used on an android platform. I have encountered problem of course.

Firstly, there was the issue of Android Studio not recognising hardware.camera, and threw me a number of errors. Turns out, I needed to update the target SDK across different build.gradle files.

More significantly, I was thrown the error that the app could not have access to the camera.

![notworkingss](/web/20190303112856im_/https://pandamakes.com.au/content/images/2018/01/notworkingss.png)

Digging for an answer online, they seem to suggest that I needed to declare the permission to use camera in android manifest (which I did), and check if other apps are using the camera (they are not, since the native camera app works fine). And very coincidentally, when the emulator told me that I had not enough (virtual) space, and when I am trying to uninstall some early iterations of the app, did I notice that I had to manually give the app permission to use the camera.

![workaround](/web/20190303112856im_/https://pandamakes.com.au/content/images/2018/01/workaround.png)

And suddenly, it works!

![workingss](/web/20190303112856im_/https://pandamakes.com.au/content/images/2018/01/workingss.png)

Next step, messing with the Mat variables so that it can recognise border symbol.

Next next step, free transform the image and integrate osra + openbabel and output mol file

final step, 3d rendering of the mol file in opengl.

* * *

And suddenly, an interruption. I was asked to modify a resource management that I created long ago with html/css/js/jquery/php/mysql. It was clear what the client wanted. I have a good idea of how I would proceed. But this meant I will need to put the android opencv project to a halt. That being said, it is a good time to give the webapp a facelift. Although it did what it supposedly did, it has a face only its mother (me) would love.
