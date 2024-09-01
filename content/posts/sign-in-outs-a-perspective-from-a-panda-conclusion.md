---
title: "sign in &amp; outs – a perspective from a panda (conclusion)"
date: 2016-12-19
tags:
  - Security
  - third party authentication
  - third party signin
layout: layouts/post.njk
---
TL,DR

Go with [OAuth](http://www.pandamakes.com.au/webdesign/sign-in-outs-a-perspective-from-a-panda-part-4-open-authorisation-oauth/) if you can.

Alternatively, go with [salted and hashed passwords](http://www.pandamakes.com.au/webdesign/sign-in-outs-a-perspective-from-a-panda-part-3/).

Use an adequate hashing algorithm (at the time of writing, SHA2).

Two factor authentication/mobile authentication is also becoming increasing popular. Webservices that allow signin via qr code (such as [wechat](https://web.wechat.com/) and [line](https://line.me/en/)) and login apps such as [clef](https://getclef.com/) is slowly making passwords a thing of the past.

* * *

[scotch.io](https://scotch.io/) recently published [an article](https://scotch.io/bar-talk/how-companies-should-secure-your-passwords) relevant to the topic of backend password storage. Yes, it is a sponsored content by Auth0. The article is nonetheless a very informative article.
