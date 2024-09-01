---
title: "OpenCV camera plight. Camera Calibration Matrix"
date: 2016-09-26
tags:
  - android programming
  - java
  - opencv
layout: layouts/post.njk
---
Secret project molens. Now that I am able to do pattern matching, uploading via http post request, having the server configured to translate the molecule to 3D coord, I need a way to project the 3D particles in to the reality.

To do that, I will need to use Calib3D.solvePnP(MatofPoint3F objPoints, Matofpoint2F imgPoints, Mat cameraMatrix, MatofDouble distortionCoef, Mat rVec, Mat tVec)

objPoints and imgPoints are easy enough. They represent the coordinates of the points in the 3D plane and 2D plane respectively. distortionCoef can be useful, but I am just going to let it be null and default to zero. The problem is cameraMatrix. The doc sugguests taking a series of checkerboard images to allow the camera to calibrate. I did not like the idea for two reasons. 1) I cannot reasonably expect an average user to be bothered with camera calibration. 2) CPU intensive. 3) Where in the world are they going to print the pattern?

I think I will find an average cameraMatrix, and use it that way. To find out more about the camera calibration matrix, I stumbled across this video:

![Capture](/web/20190303113215im_/https://pandamakes.com.au/content/images/2018/01/Capture.PNG)

[youtube link](https://youtu.be/4-thTdR7Blg)

* * *

More shenanigans. The method:

    solvePnP(MatOfPoint3f objectPoints, MatOfPoint2f imagePoints, Mat cameraMatrix, MatOfDouble distCoeffs, Mat rvec, Mat tvec)
    

even though the [doc](http://docs.opencv.org/2.4/modules/calib3d/doc/camera_calibration_and_3d_reconstruction.html#solvepnp) said:

> **distCoeffs** – Input vector of distortion coefficients (k\_1, k\_2, p\_1, p\_2\[, k\_3\[, k\_4, k\_5, k\_6\]\]) of 4, 5, or 8 elements. If the vector is NULL/empty, the zero distortion coefficients are assumed.

passing `null` to the function result in program crashing, with no explanation.
