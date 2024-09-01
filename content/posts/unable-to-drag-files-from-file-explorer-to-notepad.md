---
title: "Unable to drag files from File Explorer to Notepad++"
date: 2016-12-26
tags:
  - lesson learnt the hard way
  - notepad++
layout: layouts/post.njk
---
So I recently updated Notepad++ to the latest version. I was asked to launch the program at the conclusion of the update, and I hit yes.

However, I was not able to drag and drop files onto notepad++. Searching online for a possible cause of this phenomenon led me to [this post](http://superuser.com/questions/507096/cant-drag-files-from-explorer-into-notepad-running-as-administrator-on-window) on super user.

I noticed notepad++ was opened as an administrator, as the title bar contains (Administrator). Closing and reopening notepad++, ensuring notepad++ was not run as an admin solve the problem. I am able to drag and drop the files onto Notepad++ again.
