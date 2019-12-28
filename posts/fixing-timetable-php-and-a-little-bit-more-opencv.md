---
title: "Fixing timetable.php and (a little bit) more openCV"
date: 2016-03-14
tags:
  - android programming
  - css
  - html
  - java
  - jquery
  - js
  - lessons learnt the hard way
  - mysql
  - opencv
  - php
layout: layouts/post.njk
---
I was going to fix the web app i made awhile ago, implementing a few more features.

I wanted to better the login security of the site. Of course, I do not have access to SSL encryption or two factor authentication, but the least I could do is salting and hashing the password. This way. I also added a security token whenever users login, so that they cannot just modify the cookie and gain admin rights. I fully understand this will only protect against internal attacks, and useless against man-in-the-middle attack, but, it might be the best I can do for now. I got it done early, only to be greeted by a bug, that overwrite the last timetable. long story short, I was trolled by `if (a = b) {do something}` amatuer mistake.

I had some time, so I also made a tutorial layer. When get a chance, I really should improve on the design aspect. The tutorial layer looks decent, but the handwriting was crap.

Regardless, the app is behind me now. Refocusing on opencv project. First order of business: figuring out what to do with the mat object in opencv.

So it seems `Core.line` has been deprecated. Imgproc.line is to be used. Which certainly means it helps to read which documentation I should be reading.

Also, in opencv, it seems Houghlines gives lines in terms of rho and theta, whereas HoughlinesP gives results in terms of x1,y1, x2, y2. The latter is what I need.

It seems processing every frame is too cpu intensive. To lessen the load, I added a line which would only process cpu when it has been two seconds since the last process.
