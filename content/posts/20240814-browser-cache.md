---
title: "Browser cache is... weird"
date: 2024-08-14
tags:
- http
- browser
- cache
layout: layouts/post.njk
---

Recently, I wanted to introduce [ETag](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/ETag) as an identifer if new version of a web service is deployed properly. I could use a custom header, but I thought I would be a good boy and use a standard header. 

But of course, in my infinite wisdom, I did not include a [cache-control](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control) header, and since the resource is fetched with `WebWorker`, hard refresh (`Shift + F5`) did not work, `Disable Cache` in developer tool did not work. What worked was right clicking the specific request in developer panel, and manually click "clear browser cache".

Chromium seems to use `(current_time - last_modified) / 10` [ref](https://chromium.googlesource.com/chromium/src/+/refs/tags/127.0.6533.101/net/http/http_response_headers.cc#1250)

I will now always add `cache-control` header. =/
