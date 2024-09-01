---
title: "How I built a python executable and ran it on Openshift (V2)"
date: 2017-02-06
tags:
  - lesson learnt the hard way
  - lessons learnt the hard way
  - linux
  - opencv
  - openshift
  - python
layout: layouts/post.njk
---
Background
----------

The request was build something that can **process PDFs**, **crunch the data**, and **post it** to another webhook.

* * *

Plan
----

**Process PDF:**

*   JQuery (visual overlay + visual feedback) on front end, check format (pdf), ajax post
*   NodeJS backend with multer, temporarily saving the said PDF
*   spawn child process executing `convert pdf.pdf png.png`. Openshift V2 comes with imagemagick preinstalled.

**Crunching Data:**

*   ???

**Posting Data:**

*   request post to required url

* * *

Details Re: PNG processing
--------------------------

I have already written [a post](http://wp.me/p7Zk8t-b5) regarding trying to compile a linux executable. The said post was more of a stream of consciousness and less organised thoughts. I will attempt to summarise what was done correctly in this post.

*   Download [Virtual Box](https://www.virtualbox.org/) and install it on your host OS
*   Download [CentOS ISO **v6.8**](https://wiki.centos.org/Download) Why 6.8? From [rpmfinder](https://rpmfind.net/linux/rpm2html/search.php?query=glibc), I can somewhat conclude that CentOS 6.8 ships (or upgrades) to glibc 2.12. Why is this important? Check out [this post](http://www.pandamakes.com.au/cross-compiling-a-linux-executable-to-be-run-on-openshift/)
*   Follow the instruction on VirtualBox and create a virtual desktop with CentOS 6.8 as OS. NB: dedicate **at least**16GB of hard disk. RAM: as much as possible. I dedicated 2GB on a 16GB machine. It ran fine.
*   Remember to demount the ISO (or change the boot order). Failure to do so will result in CentOS been booted from the ISO over and over again.

Now that the virtual box is setup, all of the work below will be done inside the virtualbox. This section is heavily borrowed from [this post](http://techieroop.com/install-opencv-in-centos/) with import addition from [this thread](http://answers.opencv.org/question/10651/cv2so-missing-after-opencv-installed/).

*   Open Terminal, and

    sudo yum install cmake gcc gcc-c++ python-devel
    

I find only these packages are necessary to install opencv2.4. Of course, if you need other packages, feel free to install them, too.

*   [Download OpenCV2.4.13](http://opencv.org/downloads.html) (latest 2.4 available at the time of writing) and unpack it
*   cd into opencv-2.4.13, then:

    mkdir release
    cd release
    cmake -D CMAKE_BUILD_TYPE=RELEASE -D CMAKE_INSTALL_PREFIX=/usr/local -D BUILD_opencv_python=ON ..
    

take note of the mix of cases and two full stops at the end.

*   Then:

    make
    make install
    

*   To check the installation was successful:

    python
    >>>import cv2
    >>>print cv2.__version__
    

If for any reason, you got

    cv2 is not a valid package name
    

do:

    cp /usr/local/lib/python2.?/site-packages/cv2.so /usr/lib/python2.?/site-packages
    

(change ? accordingly)

* * *

PyInstaller on Python2.6
------------------------

Nuitka failed to freeze my python script into an ELF, so I decided to give PyInstaller another shot. The problem is

    pip install pyinstaller
    

produces an error, presumably because pyinstaller (latest version) is compatible with python 2.7+. I failed to realise that I could upgrade python to 2.7 without touching the glibc, but this turns out to be a blessing in its own way, as I side stepped the problem, by downloading [v2.1](https://pypi.python.org/pypi/PyInstaller/2.1), which support python2.6. Unzip, and

    python setup.py install
    

and pyinstaller freeze at my command.

One more interesting quirk I found:

    pyinstaller script.py -F
    

whilst this packages all the necessary libraries into a need binary, it needs to unpack in tmp folder, before the binary can run. This created the rather unfortunate event, where in the webhooks, I allowed **five** of the childprocess to spawn their individual instances of the binary. This likely flooded the tmp folder usage. Not only was I unable to get any stdout from the said child processes, I was not able to transfer files via sftp, ssh and execute the binary (‘cannot create directory’, was the error message). Restarting the app does not clear the cache, but

    rhc app-tidy -a appname
    

did the trick.

At the end, I compiled the binary without the `-F` flag. In a server environment, being a little unsightly is not the great sin.

* * *

P.S., another quirk with PyInstaller
------------------------------------

This probably does not grant a whole post by itself.

    pyinstaller script.v.1.2.py
    

crashes with a cryptic error about an AssertionError. **Remove all full stops** from the filename, except the one defining the extension fixes the problem.
