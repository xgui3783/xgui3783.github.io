---
title: "using `null` as a key for Map in JS"
date: 2018-08-06
tags:

layout: layouts/post.njk
---
Totally works... for e.g.

    const map = new Map()
    map.set(1,2)
    map.set(null,'apple')
    map.get(null) 
    /* prints apple */
