---
title: "MongoDB occupying excessive space (on openshift or otherwise)"
date: 2017-01-16
tags:
  - lesson learnt the hard way
  - lessons learnt the hard way
  - mongodb
  - openshift
layout: layouts/post.njk
---
I was doing some daily maintenance on one of the client’s web service. the site was incredibly slow. Everything else is as fast as money vanishing in my bank account, what could be the cause? I decided to investigate. I thought I would first investigate the amount of space left on the app (which is deployed on Openshift).

![mongomaintainence1](/web/20190303113321im_/https://pandamakes.com.au/content/images/2018/01/mongomaintainence1.PNG)

Goodness gracious. After 65 mb. The culprit must be elsewhere. So I delved into world wide web, hoping to find an answer. And an answer I found.

According to the author of [this blog post](http://www.overtakenbyevents.com/openshift-mongodb-out-of-diskspace/), mongodb allocates some space for journaling, in the event that write to DB fails. Doing what he did, I found:

![mongomaintainence2](/web/20190303113321im_/https://pandamakes.com.au/content/images/2018/01/mongomaintainence2.PNG)

Bingo. If I can help it, I would like to keep the journaling of mongodb. Meanwhile, I will monitor the usage weekly. If the space runs out too quickly, I will do what is necessary.
