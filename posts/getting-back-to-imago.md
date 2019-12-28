---
title: "Getting back to Imago + some other fleeting thoughts"
date: 2016-05-16
tags:
  - android programming
  - Imago
  - java
  - opencv
layout: layouts/post.njk
---
After a brief but useful refocusing of 3 weeks, I have dived again, head first, into Imago and making it work. Just a recap on it’s status:

`libimago_c.so` provided by Epam does not work out of the box. It is compiled on Linux x86/x64, whereas android uses an ARM architecture. I needed to recompile it using ndk. Before the brief detour, I was having trouble recompiling the source files, because … well, the ndk could not find string.h. Turns out, there is a library of [helper runtimes](http://developer.android.com/ndk/guides/cpp-support.html), that incorporates standard libraries. The one I needed was:

    //Application.mk
    APP_STL := gnustl_static
    APP_CPPFLAGS += -fexceptions
    

There was a “wha??” moment a little bit later on, relating to opencv. While compiling, one of the module required `opencv2/opencv_module.hpp`. I ended up finding it in the android sdk of opencv. Let’s hope it works just fine.

`dirent.h` -> the one that came with imago required `windows.h`. I am not compiling for a windows machine, and turns out, if I just removed dirent.h from the compiling folder, android ndk can find the suitable dirent.h. How fitting.

Now, I remember I had to deal with problems associated with `windows.h` before. I think perhaps it was only strictly needed on a windows compiler? So I guess I can safely take the file out? The issues we are dealing with here is Imago1.0 `lock_win.cpp`.

Just my luck. I thought I had hit a wall yesterday, with the superatom\_expansion.cpp requiring indigo, and indigo requiring _SYSV IPC_, I had tweaked the said cpp file, so that it will always return the input without doing anything, thereby bypassing the requirement of indigo. This allowed me to compile imago2.0 with no issue so far. except for mips64, where there was a `variable tracking size limit exceeded` error. Also, `log_ext.cpp $lu expected long unsigned int, but instead had unsigned int as input`. Just warnings though. So far, nothing had failed to compile.

Had some problems with java.awt. Android does not support awt natively. But lucky for me, the part of Imago that uses awt reads buffered image, which I did not need. I only needed png reader.

* * *

As I was waiting for boost-for-android to be setup, link-hopping led me down a strange rabbit hole. Python webapp (newly created on openshift and cloned via git) > what is wsgi (webserver gateway interface) > google app engine uses wsgi. Oh, I wonder if google provide similar services to AWS > google translate api (wow proprietary softwares are really expensive) > I wonder if there are any opensource solutions out there? >[this thread on SO](http://stackoverflow.com/questions/15108313/in-need-of-an-open-source-text-language-translation-api) > what is phonegap > excitement

The ability to translate HTML/CSS/JS into x platform apps is a nerd’s dream come true. Ever since Node.js + jqm, I have wondered if such a thing was possible.
