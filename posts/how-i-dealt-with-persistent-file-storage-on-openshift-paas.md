---
title: "How I dealt with persistent file storage on OpenShift PaaS"
date: 2016-06-13
tags:
  - node.js
  - openshift
layout: layouts/post.njk
---
**Problem:** every time I push my local repository to OpenShift, files inside `public/img/` gets overwritten/deleted. This is a problem, as the webapp allows users to upload images, which would not be uploaded on my local repository.

**Cause:** apparently, this is the result of OpenShift clearing out the repo folder and rebuilding everything from scratch.

**Futile attempts to rectify:** I have attempted to use `.gitignore` as well as `.git/info/exclude`, neither helped.

**Eventual (temporary) solution:** I have decided to use `OPENSHIFT_DATA_DIR` as a persistent storage. It only works if the application is non-scaling (my current application is non-scaling. Though I can foresee this being an issue in the future). I have rectified the codes as follows:

    fs.writeFile('public/img/'+FILENAME);
    

to

    app = require('express');
    app.set('presistentDir',process.env.OPENSHIFT_DATA_DIR||'public/img/');
    fs.writeFile(app.get('presistentDir')+FILENAME);
    

P.S. I had always thought app.get() is an asyc process and was sure it wouldn’t work. But I guess I was wrong.
