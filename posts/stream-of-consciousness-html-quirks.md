---
title: "Stream of consciousness - HTML quirks"
date: 2017-02-13
tags:
  - html
  - javascript
  - js
layout: layouts/post.njk
---
I believe I had known this quirk for a while, but `iframe` cannot have its source point to a webpage not in the same domain as the host. Security feature. So that malicious codes cannot load an invisible iframe somewhere and run codes/capture info.

* * *

there is a difference between

    $('#iframeID').attr('src',newURL)
    

and

    document.getEelementById('iframeID').contentDocument.location.replace(newURL)
    

The former code example push the change to history, the latter does not. Important to note if one with to control the behaviour of back button.
