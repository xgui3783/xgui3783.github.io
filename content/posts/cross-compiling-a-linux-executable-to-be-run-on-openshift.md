---
title: "cross compiling a linux executable to be run on OpenShift"
date: 2017-01-30
tags:
  - centos
  - lesson learnt the hard way
  - lessons learnt the hard way
  - linux
  - openshift
  - pyinstaller
  - python
  - virtualbox
layout: layouts/post.njk
---
I was asked to do something about the inefficient process of marking MCQ exam papers. This is my adventure trying to get it to work.

I have written previously about a project where, multiple choice exam papers were marked by an Android app, and the result was sent to the server, where reports can be printed, and marks are tallied. I chose Android to do the bulk of heavy lifting, because I have gotten openCV to work on Android before, and there was not a lot of time to explore other options. However, after a term, the inefficiency of using an Android device is becoming apparent.

1.  Android devices are scarce.
2.  the app is slow and cumbersome (as it needs to process each frame of the camera)
3.  the state of the test paper in real life scenarios not only reduce the resolution, but also distorts the geometry
4.  lighting heavily affects the marking process

So I was asked if I could do something via the scanned PDFs. Scanned PDFs can alleviate all of the above problems.

* * *

**Writing the program**  
Writing a program to run on my PC was almost too easy. I explored the possibility of detecting rectangles using `canny` followed by `approxdp`. They do not seem to work like I would like them to. Contamination from student writings will drastically affect the ability for the program to detect rectangles. At the end, I went with fixed positions given the size of the test paper. Less reliable if the scan was slanted, but, trade-offs.

* * *

**Making the program run on openshift**  
Now this is not so easy. I thought, I could just use PyInstaller, freeze the python into a single file,

    chmod +x executable && ./executable
    

Turns out, in order to compile a linux executable, I need to compile in an linux environment. Annoying, but no biggie, I thought. So I downloaded an Ubuntu ISO (which came with python), fired up _VirtualBox_, installed _openCV_, installed _pyinstaller_, made the executable, made sure everything works fine (input, output, etc).

I noticed that upon packing into a Linux executable, the performance took quite a significant hit. But no matter, I uploaded the executable (ELF), to the server, changed the permission, and fired it up, to which, I was greeted with the error:

    GLibC 2.14 is needed.
    

Of course. It was too easy. I checked my system’s glibc version via

    ldd –version
    

turns out to be 2.23. SSH into openshift, its glibc version was 2.12.

At this stage, I have several options:

1.  attempt to recompile the ELF with glibc 2.12.
2.  attempt to update glibc version of openshift/find other hosts that provide glibc version 2.14+

I briefly entertained with the idea, that if I [updated python from 2.6 to 2.7 on openshift](https://blog.openshift.com/enabling-python-27-on-a-paas-with-the-openshift-diy-app-type/), it might also update the glibc version. Boy was I wrong.

So I kept the possibility of finding another host at the back of my mind, whilst trying to recompile ELF with glibc 2.12 (or below).

* * *

There are quite a few people who ran into similar problems as me. But [solutions](http://stackoverflow.com/questions/847179/multiple-glibc-libraries-on-a-single-host) all seem rather non trivial. Possibly the most straight forward method is to find a legacy distribution of linux, which still sports glibc2.12, and compile the ELF there.

I first tried the latest Fedora. glibc2.23, but supposedly with official support of RH. Didn’t work.

Then, I found _CentOS6.x_ glibc2.12. Bingo, I thought. But pyinstaller would not work. pyinstaller apparently only works with python2.7+. But [nuitka](http://nuitka.net/) may work.

So I installed the prereq’s, installed opencv. Hoping for the best.

* * *

Somehow, `import cv2` could not find module named cv2. According to [this post](http://techieroop.com/install-opencv-in-centos/), I need to copy cv2.so to the working folder of python. But cv2.so does not exist. After much digging, I found [this post](http://answers.opencv.org/question/10651/cv2so-missing-after-opencv-installed/). Case sensitive, flag is accepted. Now it’s building. Hopefully, this time, it works.

* * *

The `BUILD_opencv_python` flag worked (for opencv2.4.13). Now, nuitka it to an ELF. It sure is taking its sweet time.

* * *

nuitka failed to compile, but pyinstaller2.1 worked like a charm… what’s more, the ELF is smaller in size. WIN!
