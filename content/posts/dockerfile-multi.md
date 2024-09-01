---
title: "Dockerfile: multistage build does not persist ENV"
date: 2019-02-27
tags:

layout: layouts/post.njk
---
Learnt it the hard way, but somewhat makes sense. Everytime `FROM` keyword is used, the `ENV` declared before will no longer be accessible. Simple reproduction:

    FROM node:8 as builder
    ENV test=helloworld
    RUN echo $test
    # prints helloworld
    
    FROM node:8-alphine
    RUN echo $test
    # prints nothing
    

[also detailed here](https://github.com/moby/moby/issues/37345#issuecomment-400245466)
