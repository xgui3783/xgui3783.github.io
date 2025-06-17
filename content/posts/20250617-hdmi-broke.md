---
title: "Oh no... my HDMI port"
date: 2025-06-17
tags:
- hdmi
- debug
layout: layouts/post.njk
---

I went on a work trip recently. This involved a 3 hour trip on the train. I did manage to get some work done, and probably did not need to turn on "eco" mode, as I still had well over 50% of juice by the time I got off the train. 

But trouble started when I needed to give a presentation, and the HDMI cable at the conference center refuse to acknowledge it tugs snugly in the HDMI port of my laptop. Undeterred, I succeeded in screencasting via the USB-C port. 

I figured it was the faulty cable (which was strange, since it worked with earlier speakers), or that there were some protocols differences. 

The plot thickens, as when I returned to work the next day, my work HDMI cable also seem to fail to get a signal from my laptop's HDMI port. 

"shit" I thought to myself, immediately jumps to the worst case scenario: "was there an over voltage in the HDMI cable at the conference center, which fried the HDMI chip?"

With a heavy heart, I googled "[my laptop model and make] HDMI no longer works", top answer seems to suggest I uninstall and reinstall the video driver, which I thought was overkill. Then, I saw it...

Second highest voted answer: are you sure you turned on the dGPU? Since HDMI port is wired via dGPU, not iGPU. Like a meteor in a dark night, this comment illuminated to me: I never turned off the "eco" mode.

D'OH~
