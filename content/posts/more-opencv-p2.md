---
title: "More OpenCV p2"
date: 2016-03-28
tags:
  - android programming
  - java
  - lessons learnt the hard way
  - opencv
layout: layouts/post.njk
---
More struggling with OpenCV this week. I will have to remember. Computer start counting at 0, not 1.

Bizarre behaviours of hierarchy in findContours. even though `hierarchy.size()` show 32×1, for eg, but it is really 1×32. In fact, when you access hierarchy matrix elements, you gain access to an array of doubles, even though they are suppose to be pointers to elements in the contour identifying as next sibling, previous sibling, parent or child.

After much struggle, it seems I had to use `Imgproc.RETR_TREE` rather than `Imgproc.RETR_COMPP`. Wasted a good two days. Well, at least now I can reliably detect the desired edges.

So I quickly move to the next phase, installing the optical recognition library necessary. Filled in the necessary info, only to realise that I downloaded v1.0. Does not appear to have v2.0 in java, only in c. Oh, jokes on me.

OpenCV 3.0: `perspectiveTransoform()` is in `Core`, and yet `wrapPerspective()` and `getPerspectiveTransform()` is in `Imgproc`? How does this even make sense?  
Ok, ok, it’s not image processing. Woe is me, I guess.

Now, why… Where are there two different MatofPoints datatypes in OpenCV? There is MatofPoints, used for drawing contours, and then, there’s the MatofPoints2f (more if you go 3f, etc) if you want to approximate fit a polygon. Conversion is clumsy. One have to use `MatofPoints.convertTo(outputMatofPoints2f, CvType.CV_32FC2)` and vice versa (swapping 32FC2 to 32S) for conversion. Somewhat headachy. But at least this part is done.
