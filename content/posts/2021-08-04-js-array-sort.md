---
title: "Array.prototype.sort reversed for Chrome vs FF"
date: 2021-08-04
tags:
  - js
layout: layouts/post.njk
---

Erm, so this certainly has been a long time.

Anyway, I was working with `Array.prototype.sort` function, and produced the following code:

```js
array.sort((a, b) => (a.order || 2) - (b.order || 1))
```

My intention is to sort the array if a.order is defined. Otherwise, use the original order. 

This produced reversed order for chrome vs FF. 

Reading [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort), and specifically:

> compareFunction(a, b) must always return the same value when given a specific pair of elements a and b as its two arguments. If inconsistent results are returned, then the sort order is undefined.

Guess browsers have freedom on how they operate on the array, and no necessarily (exclusively) from the 0th element.

Turns out, if the return value is 0, the original order is preserved. i.e.:

```js
array.sort((a, b) => (a.order || 0) - (b.order || 0))
```

would work the way I intended it to.