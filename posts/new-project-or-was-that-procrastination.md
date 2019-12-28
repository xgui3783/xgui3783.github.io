---
title: "New project. Or was that procrastination?"
date: 2016-05-23
tags:
  - examcopedia
  - html
  - javascript
  - js
  - lessons learnt the hard way
  - mysql
  - node.js
  - openshift
layout: layouts/post.njk
---
Now that the timetable web app was complete. I am working on another project that interests me a great deal. Simply put, it’s an exam pooler. For now, I am calling it examcopedia. For now, I am only working on the UI, and will attach functionality to it in bits and pieces.

Sometimes I wonder, if what I am just trying to avoid the huge mess at Imago.

For the new project, I am calling examcopedia, I needed to allow users uploading images. Implementing fileinput and multer was a bit of trial and error. Lessons learnt are as follow:

1.  multer uses default directory of the system as opposed to the root of the project. This made me quite confused for quite some time about why it kept telling me the directory does not exist, and why it kept quoting `c:\image\` . I wonder if it will work once it is uploaded to the web.

edit: turns out ‘\\image’ and ‘image’ are the reason.

2.  without a request parser, req.body will always return undefined in ajax calls in node js. Took me a good deal of an hour figuring that out.
