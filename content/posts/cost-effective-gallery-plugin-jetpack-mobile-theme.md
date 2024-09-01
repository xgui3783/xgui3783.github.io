---
title: "Cost effective gallery plugin, Jetpack mobile theme"
date: 2016-11-07
tags:
  - jetpack
  - lessons learnt the hard way
  - php
  - wordpress
layout: layouts/post.njk
---
I was looking for a gallery plugin that would showcase my photography, as well as the webapp pages. I was hoping screenshots can be neatly presented to showcase the capabilities of each of the webapps I have developed over the last year.

I first found Robo Gallery. Robo Gallery is stunning, both in terms of the customisability as well as cleanliness of the plugin. But the free version comes with a 3 gallery limit. That was when I realised that most gallery plugins impose a limit on how many galleries you can create before nudging you in the direction of the paid plans. I was relatively happy with robo galleries, but I was not too keen on forking out 99USD to purchase the extended version. After the failed attempt (or rather, just the lack of enthusiasm) at unlocking the gallery limit at 3, I looked into the Gallery + Slideshow functionality offered by Jetpack.

Jetpack is an in house extension of wordpress developed by Automattic (the creator and maintainer of WordPress, if I am not mistaken). It extends a lot of the existing features of WordPress, by implementing additional features such as site analytics, tiled gallery, lightbox slide shows and so on. Whilst the out of the box slide show did not offer as much customisations, it satisfied my needs. More importantly, it was available at the low low cost of 0AUD.

* * *

Now, remember the whole host of extensible functions offered by jetpack? Well, unbeknown to me, one of them was the mobile theme. Jetpack will automatically try to optimise your webpage on a mobile device. This takes place before the responsive themes. I guess this could be a god send for sites that do not use themes that are responsive, it led a panic attack on my part. I had done some PHP hack to remove certain design elements that I was not too fond of. I had thought that it is because the PHP codes were altered, the mobile theme was messed up intentionally by the developers of the theme. After an hour of frantic search and test, the culprit was found. Jetpack. Thou giveth, and thou taketh away.
