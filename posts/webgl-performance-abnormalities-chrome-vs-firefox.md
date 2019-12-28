---
title: "WEBGL performance abnormalities (chrome vs firefox)"
date: 2017-04-03
tags:
  - chrome
  - chrome browser
  - firefox
  - firefox browser
  - lesson learnt the hard way
  - lessons learnt the hard way
  - webgl
  - webgl extensions
  - WEBGL_draw_buffers
layout: layouts/post.njk
---
Preface: I have had the chance to play around with a very specific webgl library (the name of which I may be able to reveal in the future. This is not for any NDA reasons – the library is opensource on github). I feel obliged to present my findings here, hopefully in a legible fashion.

* * *

Problem 1: the app runs particularly slowly on a chrome browser on my laptop.

I won’t bore you with the troubleshooting, the verdict is that the browser installed is a 32bit browser. As a result, I is programmed to use only 4 GB (out of the possible 16GB) of RAM, which slowed the process down significantly.

* * *

Problem 2: I attempted to reinstall chrome (57.0.2987.110 64bit). This time, chrome identifies my GPU (AMD Radeon R7 M370) as a [blacklisted GPU](https://www.khronos.org/webgl/wiki/BlacklistsAndWhitelists). As a result, chrome refuses to hardware accelerate webgl.

Solution: I could override the misidentification by going to `chrome://flags` and enable `Override software rendering list`. But a simple reinstallation cleared the problem altogether.

* * *

Problem 3: The updated chrome (57.0.2987.110 64bit) no longer supports `webgl.getExtension(‘WEBGL_draw_buffers’)`

![chrome_getExtension_webgl_draw_buffers](/web/20190303111435im_/https://pandamakes.com.au/content/images/2018/01/chrome_getExtension_webgl_draw_buffers.PNG)

Above is the `console.log` of the method `webgl.getExtension(‘WEBGL_draw_buffers’)`. Notice how the chrome developer console outputted null.

Solution: Use firefox I guess. In addition to 57.0.2987.110 64bit, I have also tried their canary build 59.0.3054.0 64bit, which does not support the extension either.

Addendum: according to [the extension conformance](https://www.khronos.org/registry/webgl/sdk/tests/conformance/extensions/webgl-draw-buffers.html), not supporting `WEBGL_draw_buffers` is legal.

![notSupportingDrawBuffer_legal](/web/20190303111435im_/https://pandamakes.com.au/content/images/2018/01/notSupportingDrawBuffer_legal.PNG)
