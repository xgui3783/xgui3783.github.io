---
title: "New project. Short and sweet"
date: 2016-02-15
tags:
  - automation
  - backwards compatibility
  - jpg to pdf
  - lessons learnt the hard way
  - python
layout: layouts/post.njk
---
I was asked to do an shortie over the weekend. The client wanted a way to pull four random images (one from each of the four folders) into a collage.

Initially I wanted to use JS and HTML, since I am already familiar with the language. But as there are no easy way to find the number of files without resorting to server side language, and the aim was to make the process as painless as possible, I decided to look into python.

After a brief search, it seems I could use ReportLab to generate a PDF and pull images at the same time. There are some languages I might need to learn, but ultimately it was not too difficult. That was when, I hit my first road block.

Picking up python 3.x was a bad idea.

> Attempting to install reportlab to python3.x was not successful. I was confronted with a missing vcvarsall.bat error. After much digging, it seems this is likely the result of Visual C/C++ compiler incompatibility. One of the suggested fix was to use MinGW, an open sourced C/C++ compiler. I did, and it did not turn out better. I was thrown an error for “unknown compiler version error”. Frustrated I was, I decided to forgo reportlab and try to just use python image library and get the job done. PIL installer alerted to me that it could not find python 2.x, and refuse to be installed. This raised the possibility of the lack of backwards compatibility of python 2.x and python 3.x.

So I uninstalled python 3.x and installed python 2.7. And lo and behold, not only did PIL install without a glitch, reportlab did, too.

There was a small hiccup when I was trying to convert .py to .exe. Clearly, clients do not have python installed, nor do they have environmental variable PATH set as `C:/PythonXY`. Py2exe did not work for me. But then again, I could have accidentally attempted to launch the .exe in `/build/`. PyInstaller worked, and the single file made it much easier.
