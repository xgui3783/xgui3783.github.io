---
title: "First steps in threejs"
date: 2017-03-06
tags:
  - canvas
  - html5
  - javascript
  - js
  - threejs
  - webgl
layout: layouts/post.njk
---
So I had my first stride into three.js recently. I had wanted to try a graphic library of javascript for sometime, and I had in my mind to try either d3.js or three.js. It was not until I listened to [Scott Hanselman’s discussion with Ada Rose Edwards with regard to WebVR](http://hanselminutes.com/565/discovering-webvr-with-ada-rose-edwards) where I took that interest seriously.

* * *

[three.js](https://threejs.org/) is a javascript library that uses WebGL to display 3D graphics. If one has done any work in the field of 3D modelling, picking up three.js should be only a gentle incline. There are familiar concepts such as geometry (cube, cylinder, sphere, etc), material (basic, lambert, phong, etc), texture (to be applied to materials) and a mesh (combining a geometry and a material)

Over the next few weeks, I will write about the quirks I have learnt from three.js. But here is what I have learnt and made in two weeks [link](www.pandamakes.com.au/examples/tangerine/index.html).

There is no tutorial, because it takes time to write + code the logic for tutorial. WASD to move around, `W|A|S|D + L` for dodge roll. `J + J` etc … for attack.

Currently, `W|A|S|D + J` freezes the game, for reasons I might explore in the future.
