---
title: "Android Studio quriks: C is not a valid resource + image resources failing to be recognised by Gradle"
date: 2017-01-23
tags:
  - android programming
  - android studio
  - gradle
  - java
  - lesson learnt the hard way
  - lessons learnt the hard way
layout: layouts/post.njk
---
So I was playing with Android Studio a bit more, and two weird quirks:

* * *

1.  I wanted to create an xml file as a layout file. What I should have done was navigate **project structure (alt+1)** to **app > res >**, right click on the **layout** folder, and the context sensitive menu will allow me to create a xml layout file.

Instead, I navigated **file > new > value resource file**, thinking that since it is also an xml file, all I have to do is move it to the right directory. Oh, how wrong was I. At least one of the problem I encountered was

    (Error:Error: 'C' is not a valid file-based resource name character: File-based resource names must contain only lowercase a-z, 0-9, or underscore).
    

I thought the problem originated from the xml codes. After much pouring over the codes, I found [this post](http://stackoverflow.com/questions/32543884/error-s-is-not-a-valid). Turns out, even though resource xml files allow capital letters in its filenames, layout xml files do not.

* * *

2.  On replacing image resource files **app>res>drawable>image.png**, to replace the image resource, I tried to delete the original resource file, and then, copying a new resource file of the same name to the specific folder. This turns out, is not such a brilliant idea. Gradle failed to compile my project. Restarting Android Studio did not help either.

At that point, I imported the new graphic under a different name. And it seems, direct replacement (directly copy the file with the same name. When prompted if you would like to replace the old resource file, affirm). does not cause the same error.

* * *

Weird.
