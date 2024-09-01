---
title: "glMatrix bug - mat4.getRotation when matrix has scaling component"
date: 2020-02-01
tags:
  - javascript
  - glmatrix
  - quaternion
layout: layouts/post.njk
---

I have been working on a project that extensively make uses of [glMatrix](http://glmatrix.net/), a javascript library which implements a number of extremely handy methods for manipulating vectors, quaternions and affine matrices. 

To set the scene:
- root scene consists of two objects, which relative to the world coordinates
  - object A has a single transform, which consists of translation component
  - object B has a single transform, which consists of translation, rotation and isotropic scaling
- default camera has no rotation component

My desired outcome is to apply a rotation to the camera to view object B in its native orientation.

As I have transformation matrix of object B, I thought I could use the [mat4.getRotation](http://glmatrix.net/docs/module-mat4.html#.getRotation) method. Apply it to the camera and we should be done.

To my dismay, this method result in a view of B that is _slightly_ non aligned. 

I played around with a few other ideas, for example:

- perhaps the 3D framework I was using is rotation the scene, rather than the camera? 
- how about getting the inverse of the matrix, and try again?
- the fact that `glMatrix` uses column major convention, does that affect anything?
- `getRotation` method returns a non-normalized quaternion. (this turns out to be related to the issue I am having)

I banged my head for a good half a day, and looked up `glmatrix getrotation does not work` on google, and lo and behold, first search result [mat4.getRotation is not working when the matrix was scaled with specific vectors](https://github.com/toji/gl-matrix/issues/245). 

So all I had to do is to scale the transform matrix before calling `getRotation`, and it worked like a charm.