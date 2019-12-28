---
title: "More OpenCV p3"
date: 2016-04-04
tags:
  - android programming
  - Imago
  - lessons learnt the hard way
  - opencv
layout: layouts/post.njk
---
Getting error when I attempt to get transformation matrix.

    Core.perspectiveTransofrm(Matofpoint input, Matofpoint output, Mat transformationMatrix).
    

Looks like I needed to declare `transformationMatrix` as `3,3,CvType.CV_32F`.

Foolishly, I had used `<imageView ... />` instead of `<ImageView ... />` the result was lots of errors. But it’s fixed now.

OpenCV is in all kinds of disarray, as least the java version. Perhaps it’s just me, but in order to do a perspective transform, there appears to be two different solutions, either `Core.perspectiveTransform(src,dst,output)` and the other be `ouput = Imgproc.getPerspectiveTransform(src,dst)`. Why are there two different functions? Since they are both in the documentations, perhaps they do different things. Well, not really. the one that works is `output = Imgproc.getPerspectiveTransform(src,dst)`.

Also, this discrepancy highlights another inconsistency in OpenCV. Take a look at Canny tranformation or find contour:

Canny transformation: `Imgproc.Canny(src,ouput,threshold1,threshold2)`  
Find contour: `Imgproc.findContours(src, output, hierarchy, mode, method)`

and compare that with getPerspectiveTransform:

getPerspectiveTransform: `output = Imgproc.getPerspectiveTransform(src,dst)`

Spot the difference?

I am starting to see the reasons why an incoherent ecosystem of hardwares is such a headache for software developers. When I am trying to import the IMAGO library, it distinguishes if the OS architecture is 32 or 64bit. But getting that information programmatically can be extremely tricky. One trick was to use os.arch, with a 64bit OS, it should output aarch64. But not always. Well that was strange. I suppose that is what programmers have to contend with when they are dealing with low level codes.

I have just e-mailed the guy from epam. I do not know if he will get back to me.
