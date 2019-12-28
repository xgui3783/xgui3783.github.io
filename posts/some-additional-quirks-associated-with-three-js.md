---
title: "Some additional quirks associated with three.js"
date: 2017-03-21
tags:
  - html
  - js
  - lesson learnt the hard way
  - lessons learnt the hard way
  - threejs
  - webgl
layout: layouts/post.njk
---
Last week, I talked a bit about my initial adventure into three.js. This week, I will continue to share some quirks that I found interesting regarding three.js

* * *

When both dat.gui.min.js and TrackballControl are implemented, altering the dat.gui panel causes the perspective of TrackballControl to change. After all, clicking and dragging in dat.gui panel constitute as a click + drag event. Surely, [there is a way to circumvent this](https://github.com/mrdoob/three.js/issues/828). The short answer (by meetar @ github):

> For the record, @mrdoob is referring to passing the render context (renderer.domElement) to the controls call, like so:
> 
>     controls = new THREE.TrackballControls( camera, renderer.domElement );
>     
> 
> This tells the controls to only work when the mouse is over the renderer’s domElement (the canvas). This change fixed the problems I was having with dat.GUI while using TrackballControls.

My reaction and response, borrowing from amboworld @ github from the same thread:

> thanks @meetar

* * *

Another issue I have had was the `.getWorldDirection()` method. Long story short, I eventually realised that THREE treats positive x axis direction as the direction to return when the method `.getWorldDirection()` is called. Instead of redoing the vertices and faces, I used a simple subtracting to figure out the desired direction.

* * *

This is a short one. In order to determine whether the face of a custom geometry is “inside” or “outside”, check the order of the vertices. If the vertices are push in in an anti-clockwise fashion, it is an outside face. If clockwise, then in face. Whether a face is on the outside or inside will affect how is the polygon painted. Of course, you can paint on both sides, and alleviate this problem all together.
