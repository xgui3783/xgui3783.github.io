---
title: "More on OpenCV + trends in web development"
date: 2016-03-21
tags:
  - android programming
  - lessons learnt the hard way
  - opencv
layout: layouts/post.njk
---
I have uncovered a few more new discoveries in the passing week.

Firstly, loading the app into my Android phone drastically improved the performance of the app. I suspect this had something to do with the amount of virtual RAM that I have allotted to the Virtual Machine.

Secondly, I found out the reason for the weird colouration of the rgba output of the preview frame. The problem had something to do with how the frame is encoded and decoded. In short, the problem is non-existent on actual android devices, and only becomes a problem in virtual machines.

Thirdly, one thing that annoyed me a great deal was how OpenCV seems to fetch a 600×480 rectangle. More annoyingly, the onCameraFrame method has to return a Mat object with the same dimension as the one initialised at onCameraViewStarted(int width, int height). Any other dimension, the camera preview will display black, not even a cropped image. Another quirk I found was that the Imgproc.Canny operation automatically converts a Mat object to a greyscale Mat object, even if it was initialised as `CvType.CV_8UC4`.

What else, so much changes between versions. I believe I have already talked about `Core.line` vs `Imgproc.line`. There is also now `CV_RGB2GRAY` vs `Imgproc.COLOR_RGB2GRAY`. I guess I have learnt to search for the right version.

More things learnt along the way: when compiling a List , such as Imgproc.findContours, the return results gets appended to the old one. So unless one does a `List.clear();`, the list will grow larger and well… with devastating consequences. (For one, if one wishes to search through all of the geometric shapes that fits the bill, and at frame 1 finds it at, say pt1, pt2, p3, but at frame 2, the camera had moved, so the frame finds it at pt4, pt5, pt6, the array will remember both elements. If you are to colour the shapes, you get a trail of geometric shapes, essentially).

Looking around me now, there seems to be a lot of buzzwords appearing in web development. RESTful seems to be thrown around a lot, seemingly out of nowhere. And then, there was _AngularJS_, _NodeJS_, _React_ etc. It is quite scary. Am I ever going to catch up?

Having just looked at SASS + Compass… I have to say, it’s really really REALLY exciting to learn.
