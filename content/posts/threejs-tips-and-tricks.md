---
title: "threejs tips and tricks"
date: 2017-04-17
tags:
  - javascript
  - js
  - lesson learnt the hard way
  - lessons learnt the hard way
  - threejs
  - webgl
layout: layouts/post.njk
---
re: `OrbitControl`(same can be said for `TrackballControl`, I would assume), upon initialisation, reset camera rotation to 0,0,0. One will have to redefine the rotation of the camera, or invoke  
`camera.lookAt( target )`  
method.

* * *

Caveat re: the point above, altering camera rotation after the initialisation of `OrbitControl` and `TrackballControl` is a bad idea. Whilst it works on execution, when one interacts with the camera, (via clicking and dragging), the rotation of the camera abruptly teleports to (0,0,0) first. Indeed a very jarring experience.
