---
title: "Android Studio/Java JSON from string exception"
date: 2016-09-19
tags:
  - android programming
  - GAZing
  - java
  - lessons learnt the hard way
  - opencv
layout: layouts/post.njk
---
While working on the secret project, molens, I made a webapp that receive a PNG image, translates to a 2D mol file using _imago_, and then using _openbabel_ to translate it to a 3D mol file.

The file will then be sent back either as a stringified JSON object or a file. I figured that if I return the mol file as a file, I will need to setup an inputstream and write it to a file, I might as well return the mol file as a stringified JSON.

This is where I noticed I encountered the error on runtime:

    org.json.JSONException: End of input at character 0 of
    

I initially thought it was because of the double quotes, i.e.

    {"file1","just some text here \nA new line!\n END\n"}
    

But it turns out, it was the back slashes. So in order to avoid the problem, I needed to escape the single backslashes.

    stringifiedJSON.replace("\\","\\\\")
    

* * *

Also, it seems the IDE escapes special chars in a very special way. e.g.:

    String s = "ello, \\n i am ruth";
    String[] ss = s.split("\\n");
    Log.i("log",ss[0]) //prints out : ello, \n i am ruth
    

Whereas

    String s = "ello, \\n i am ruth";
    String[] ss = s.split("\\\\n");
    Log.i("log",ss[0]) //prints out : ello,
    

I guess Android Studio escape it once so that its syntax is valid. It then escapes it again in regex. So the first exam is really splitting the string using `\n` the new line character.
