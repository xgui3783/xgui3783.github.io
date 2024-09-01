---
title: "Imago, hit a wall?"
date: 2016-04-11
tags:
  - android programming
  - Imago
  - java
  - lessons learnt the hard way
  - opencv
layout: layouts/post.njk
---
So I am able to load the jna interface for android. Turns out, I had to put the libjnidispatch.so in app/src/main/jniLibs/(platform)/

But a new problem arises.

    java.lang.UnsatisfiedLinkError: Unable to load library '/lib/Linux/x86/libimago_c.so': Native library (lib/Linux/x86/libimago_c.so) not found
    

the `libimago_c.so` exist in the .jar file, but android is unable to unpack in situ. Let’s see if I can re-route the resource path? And put the .so file in there?

I was under the impression that any .so library files should be stored in jniLibs/(arch)/ folder, and it will be packaged by gradle. In fact, I tested the matter of fact out, and Native.library loaded other .so files without a hitch.

Something wrong with with the `libimago_c.so` then?

I have three things left to try:

a) see if the android studio can read `libimago_c.so` at all.  
b) use cpp/h version, as per outlined in the examples  
c) use osra.

One final thought this week. So JNA = native.loadlibrary requiring interface declaration, whilst jni = system.loadlibrary, requiring jni wrapper header file (somehow).  
either way, the library is architecture specific. Ugh, headache.

Now, I need to compile imago source file according to armeabi-v7a architecture.

Minor minor victory: finally sorted out the error

    ****make.exe No rule to make target ‘directory/foo.cpp’, needed by ‘directory1/foo.o’. Stop.
    

Turns out, I needed to go into the jni folder, before ndk-build.
