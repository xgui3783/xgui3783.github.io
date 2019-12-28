---
title: "Stream of consciousness - Android/Java version"
date: 2017-02-20
tags:
  - Android
  - java
  - lesson learnt the hard way
  - lessons learnt the hard way
  - programming
layout: layouts/post.njk
---
AsyncTask: update UI Thread:  
`doInBackground()` does not interact with UI thread, even if you invoke  
`runOnUIThread()`  
runnable. It will just throw an error.

To update UI, do runOnUIThread in `onPostExecute` or `onProgressUpdate`

* * *

In order to access files outside the sandbox (e.g. on internal/external storage), you need to explicitly state it in `AndroidManifest.xml`. Otherwise, an error (EACCESS) will be thrown.

* * *

This one is a bit cryptic: when you redraw UI elements, if element A overlaps with element B even just slightly, the one that’s drawn latest will be shown, and the one that’s drawn first will be completely invisible. Just avoid overlapping UI elements I guess.
