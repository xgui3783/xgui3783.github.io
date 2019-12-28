---
title: "Rendering a very, very large nested tree in Angular"
date: 2018-10-02
tags:

layout: layouts/post.njk
---
And cherry on top, needs filtering by text functionality, support single/double click + hierarchy guiding lines.

Lessons learnt:  
1/ **do not use a nested structure.** Whilst it initially makes sense, and everything are structured sematically, rendering and changing the parent will case a cascade of changes, and render it extremely non performant. **Solution**: use a flattened list instead. Any changes to the local node stays local.

2/ **intersection observer behaves strangely**. I wanted to achieve an infinite scroll effect where only the first 50 or so rows are rendered. As the user scroll to the bottom half, the next 50 are rendered dynamically. My first attempt was to use a `slice` pipe and dynamically alter the begin and end. But this causes the entire list to rerender, and the result? on render, the viewport is teleported with the added content, to the very bottom. **Solution**: cluster the flattened list into batch of 50, and use `*ngIf` to hide/show them

3/ **do not remove elements from the top**. So I thought I'd be clever. User scrolled past the first 50 elements, let's destroy them, so they do not need to be rendered, should speed up the rendering process. True, but also screws up the scroll location. I think browser remembers the scroll pos on a px level. **Solution**: do not remove elements from the top. Unless you are dynamically setting the scroll pos.
