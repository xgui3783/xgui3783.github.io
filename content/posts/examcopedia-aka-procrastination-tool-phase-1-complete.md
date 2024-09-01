---
title: "examcopedia (aka procrastination tool) phase 1 complete"
date: 2016-05-30
tags:
  - css
  - examcopedia
  - jquery
  - js
  - node.js
  - openshift
layout: layouts/post.njk
---
Today, 24th May 2016, marks an important day. I have completed the first phase of examcopedia. I agree, I am pretty bad at naming things. I have finished the submission and viewing interface. All that’s to do is just fleshing things out, and the painful, painful process of entering thousands of questions.

Rather annoyingly, Openshift seems to impose [some sort of limitations on fs module in node.js](http://stackoverflow.com/questions/19982839/nodejs-fs-module-does-not-work-in-openshift). I understand fs.exists() is deprecated, but fs.access() yielded me with a similar error. I will attempt fs.stat(), but I am not optimistic.

Major progress so far. I fs.stat() works. Also, in the mean time, I was able to get the mobile upload to work, too. I was able to get HTML5 `<input type = "file" accept = "image/*;capture=camera">` in order to allow users to upload their photos from capturing from the camera or their local device.

I was also able to make some major breakthroughs. Namely, I found that for node.js v1.4.5, in order to find the list of clients in a specific room, you use `io.sockets.adapter.rooms[roomname]`. Returns undefined if no-one is in the room.
