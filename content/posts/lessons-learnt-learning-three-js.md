---
title: "Lessons learnt learning three.js"
date: 2017-03-14
tags:
  - animation
  - html5
  - javascript
  - js
  - threejs
  - webgl
layout: layouts/post.njk
---
Background: I have been wanting to dabble in something new for sometime. I was pondering between _three.js_, _d3.js_ or machine learning (python). I decided to give _three.js_ a shot.

three.js is an abstraction layer on top of WebGL. It provides methods that are easy to understand and implement to those familiar with javascript. Here is a list of things about three.js that I learnt.

* * *

**the core file, three.js, does not include all of the functionalities**. Indeed, some of the (essential) characteristics can be implemented at will by including their respective js file(s). For example, one neat extension to include is the _TrackballControl.js_. This grants mouse control to the user, so that one can look around the scene with familiar gestures such as drag and drop and wheel up and down. Two other modules that I use: `SubdivisionModifier`,_stat.min.js_ and _dat.gui.min.js_ (the last one is not strictly THREE only)

* * *

Somewhat relatedly, the application of `SubdivisionModifier` confused me when I was first using it. It modifies the original geometry, rather than returning a copy of modified geometry. i.e., instead of:

    var threeGeometry = new THREE.BoxGeometry(1,1,1)
    threeGeometry.mergeVertices()
    var modifier = new THREE.SubdivisionModifier(1)
    var newThreeGeometry = modifier.modify(threeGeometry)
    

you simply do:

    var threeGeometry = new THREE.BoxGeometry(1,1,1)
    threeGeometry.mergeVertices()
    var modifier = new THREE.SubdivisionModifier(1)
    modifier.modify(threeGeometry)
