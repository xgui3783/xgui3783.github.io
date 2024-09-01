---
title: "OpenCV mask mat needs to be of 8UC1 or 8SC1"
date: 2016-10-03
tags:
  - android programming
  - lessons learnt the hard way
  - opencv
layout: layouts/post.njk
---
Logic:

    cameraframe -> mRGB mat (8UC4)  
     function(mRGB) returns mResult  
     show mResult if mResult != 0, otherwise, show mRGB.
    

In practice, this means I will need to create a mask mat, and mask mat needs to be `8UC1` or `8SC1`.

Simply performing

    mResult.convertTo(mMask, CvType.CV_8UC1)
    

does not work, as mMask will have a channel count of 4. One needs to:

    mResult.convertTo(mMask, CvType.CV_8UC4) //or clone, or w/e
    Imgproc.cvtColor(mMask,mMask,Imgproc.COLOR_RGBA2GRAY)
    

and mMask will have a channel count of 1 and it can be used as a mat mask.
