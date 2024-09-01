---
title: "weird development issues"
date: 2017-05-15
tags:
  - javascript
  - lesson learnt the hard way
  - lessons learnt the hard way
  - typescript
layout: layouts/post.njk
---
this post was supposed to be published last week week monday. There happens to be a mix-up unfortunately.

I may or may not have mentioned this, the environment of my work PC is all kinds of screwed up. Chrome 64 bit never seem to support webgl completely (even though on other windows machine, it runs fine). At least I have Firefox that runs everything smoothly.

This one is definitely a new one: attempting to run a dev-server `npm run dev-server` on [neuroglancer](https://github.com/google/neuroglancer). The initial compilation error was:

    *.ts: files cannot be an empty array
    

Strangely, many mentioned that it is a feature introduced in TS 2.10, whereas neuroglancer required TS 2.14 and up. Likely my dev machine. So I uninstalled node (which on uninstall says 4.x, but in cmd, `node --version` prints 6.x) and reinstall (node v 6.10.x LTS) fixes the issue.

However, a new issue arises. I get three new compilation errors:

    @types/lodash: ts2304 cannot find name 'object',
    ts2428 all declaration of weakmap must have identical type parameters,
    ts2304 cannot find name 'object'
    

On three separate files. Again, searching online yielded not a lot of useful information. Likely a dev machine config issue.
