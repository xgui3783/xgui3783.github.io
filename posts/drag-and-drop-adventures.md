---
title: "drag and drop adventures"
date: 2019-02-20
tags:

layout: layouts/post.njk
---
[HTML5 drag and drop API](https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API) They are useful in creating an intuitive UI. But there are some pitfalls

*   `event.dataTransfer` can only be set `ondragstart`, and cannot be read until `ondrop` ([SO post](https://stackoverflow.com/questions/11927309/html5-dnd-datatransfer-setdata-or-getdata-not-working-in-every-browser-except-fi)). This is a security minded feature, as drag n drop is a feature that can potentially be cross browser/cross application (think drop file interface on browsers). Allowing `ondragenter` etc handlers sniff transferData is a bad idea.
*   in order for `ondrop` event to be called, `ondragenter` and `ondragover` must both be cancelled (by `ev.preventDefault()` or `return false`) ([MDN](https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations#droptargets)). Most dom elements are not droppable. This ensures that on drop event only fires when the developer explicitly enables it.
