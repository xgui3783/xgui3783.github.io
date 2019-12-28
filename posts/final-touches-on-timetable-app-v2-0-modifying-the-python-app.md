---
title: "Final touches on timetable app v2.0, modifying the Python app"
date: 2016-05-09
tags:
  - css
  - html
  - javascript
  - jqm
  - jquery
  - jquery mobile
  - js
  - lessons learnt the hard way
  - node.js
  - python
layout: layouts/post.njk
---
Did some final touch on the timetable app v2.0. I am more or less happy with its current state.

Potential for future update: responsive + add student login. Likely not going to do those in quite some time.

[Timetable App v2.0](http://timetable-gened.rhcloud.com/) – current state took approx 14 days from scratch.

spent a day to fix the responsive part of the app. I had not appreciated the processor power of a laptop vs a mobile phone. turns out, when there are a lot of blocks to render and attach listeners to, the app slowed to a crawl. My solution was to copy and paste the js file, and cut down the parts not applicable to the mobile platform (mousemove, mousedown etc). Hopefully, the mobile app can run a bit more smoothly now.

Plagued by [jqm’s ghost clicking](http://philosopherdeveloper.com/posts/ghost-clicks-in-jquery-mobile.html), supposedly because of the 300ms delay on touch devices. Going to try to see if [fast button](https://github.com/alexblack/google-fastbutton) can work its magic.

* * *

A client recently asked me to revisit the python app, for some degree of formatting changes. This should not take too long, but since I have upgraded the laptop, I needed to reinstall python and report lab. Here is a nice piece of advice which I have heard from the internet.Restart CMD prompt after setting the environmental variables

Otherwise, the changes will not be recognised.
