---
title: "Optimise OpenCV for mobile"
date: 2016-09-12
tags:
  - Android
  - android programming
  - java
  - opencv
layout: layouts/post.njk
---
Playing with OpenCV for a bit more again. I start to appreciate the amount of calculation one needs to do on matrices.

One trick, make the mat obj as small as possible. For example, when matchtemplate, the template image(thus mat obj) should be kept as small as possible.

Even with minmaxloc, a 301×1 Mat obj takes too long.

[itseez announced Accelerated OpenCV.](http://opencv.org/itseez-announces-release-of-accelerated-cv-library.html) I couldn’t find any info on it other than the press release. So I can only imagine it is proprietary.
