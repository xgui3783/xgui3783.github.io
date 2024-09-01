---
title: "Attempt to improve OpenCV performance on Android"
date: 2017-01-09
tags:
  - Android
  - android programming
  - java
  - lesson learnt the hard way
  - lessons learnt the hard way
  - opencv
layout: layouts/post.njk
---
OpenCV is an open sourced computer vision software developed for a number of popular OS such as windows, mac, linux, android and iOS. My main interest in OpenCV is application in mobile platforms such as android and iOS, where it can be used in AR applications.

However, one of the most severe limitations is that mobile CPU is woefully slow comparing to desktop PCs. As a result, doing computer vision is incredibly taxing on mobile platforms.

Framerate

Operation

Oppo F1s

Native camera

24+

Load OpenCV only (No writing or processing)

17-18

Load OpenCV + writing Mat object(s) (no processing)

17-18

Load OpenCV + writing Mat object(s) + processing

~8

To improve the performance of OpenCV on mobile devices, I thought I would run processing on a non-UI thread. Turns out, according to (this thread)\[http://stackoverflow.com/questions/31828704/android-opencv-app-crashes-on-ui-change\] on stackoverflow, the onCameraFrame already runs on a non-UI thread.

* * *

Also important, if Mat object is large, do **not** attempt to `mat.dump()`. it will cause the app to crash, and the cryptic stacktrace is no help in diagnosing the problem.

* * *

More OpenCV quirks.

    Features2d.drawKeypoints(Mat input, MatofKeyPoints keypoints, Mat output)
    

Mat input has to be _8UC3_ or _8UC1_. If it was 8UC4, it will throw a cryptic exception.

* * *

More OpenCV quirks:

    DescriptorMatcher mMatcher = new DescriptorMatcher.create(_method_);
    mMatcher.match(Mat descriptor1,Mat descriptor2,MatOfDMatches matches);
    

crashes if descriptor2.cols()==0 (presumably, it also crashes if `descriptor1.cols == 0`).  
To prevent the crash, do:

    DescriptorMatcher mMatcher = new DescriptorMatcher.create(_method_);
    if(descriptor2.cols()==0){
      return;
    }
    mMatcher.match(Mat descriptor1,Mat descriptor2,MatOfDMatches matches);
    

* * *

Android Studio quirks:  
When you replace a .png file in res/drawable folder, gradle will fail to sync, with the following message:

    Error:Execution failed for task ':app:processDebugResources'.
    > com.android.ide.common.process.ProcessException: org.gradle.process.internal.ExecException: Process 'command 'C:\Users\proto\AppData\Local\Android\sdk\build-tools\23.0.2\aapt.exe'' finished with non-zero exit value 1
