---
title: "Super useful utility `/bin/time`"
date: 2025-04-17
tags:
- linux
- debug
layout: layouts/post.njk
---

I recently came across [anthony](https://www.youtube.com/@anthonywritescode)'s [video](https://www.youtube.com/watch?v=xEfDMjogJnw) on debugging a OOM process. 

It should be noted that in ubuntu, it is `/bin/time`, and [not](https://askubuntu.com/a/1459770) the default `time` binary.

This gives me a super easy way to demonstrate memory usage of a process (one off script or webserver) with:

```sh
/bin/time -v uvicorn app:app
```
vs

```sh
export FLAG=SET
/bin/time -v uvicorn app:app
```
