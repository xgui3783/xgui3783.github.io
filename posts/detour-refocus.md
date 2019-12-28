---
title: "Detour, refocus"
date: 2016-04-18
tags:
  - css
  - html
  - javascript
  - mysql
  - node.js
  - openshift
  - php
  - ruby
  - wordpress
layout: layouts/post.njk
---
Hitting a wall in Imago is really not fun, so I fancy the opportunity to revisit some of my older projects.

One in particular. I reworked a client’s website, made it more colour suitable, added a dynamic background. Just have to work the login magic in when I get a chance. Though truth be told, I would really fancy redoing the timetable app.

And this made me keenly aware of the necessity to backup before I do anything. When I was trying to migrate the site from my PC’s localhost to the live site, I was (supposed to) change the wordpress address url and site url to the corresponding one’s. Due to a typographical error, I typed the wrong info, and was not able to return to the setting page (since the setting page in wordpress is accessed via a webpage. There is a work around, namely

     define(‘WP_HOME’,’http://YOURURL.HERE/’);  
     define(‘WP_SITEURL’,’http://YOURURL.HERE’);  
    

It’s not ideal, though.

Trying to learn node.js. Going to use OpenShift as a playground. Upon trying to install the client tools using the instruction on [their site](https://developers.openshift.com/getting-started/windows.html#client-tools), I encountered the error:  
`rhc setup gives error ‘no such file dl/import’`  
Turns out, just like python, using an earlier version worked like a charm. Re downloaded/installed ruby 2.0 rather than 2.2 solved the problem.
