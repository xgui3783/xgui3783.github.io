---
title: "Bitshift chaos in JS & Python"
date: 2022-07-30
tags:
  - js
  - python
  - bitshift
layout: layouts/post.njk
---

Preface: work's been rather busy lately. Even though I constantly add blog ideas, I have not had the chance to properly materialise them into blogs proper. This post originated late last year. 

I needed to do do some quick hashing of string into hex characters, with the following requirements/limitations:

- input is string with length ~ 50 characters
- output is unique hex (given input), shorter the better (perhaps 6 length?)
- needs to be implemented in browser javascript, without additional libraries (md5/sha libraries are available plenty)
- users do **not** control inputs, and ...
- ...does **not** matter if the hash is reversible, so security is not essential

I considered reimplementing md5, in the application, but the complexity it introduces seems to outweight the benefit. 

So I came across this [SO post](https://stackoverflow.com/a/7616484/6059235), and implemented it, and everything seems fine... Until I needed to implement the same hash function in python. 

Bitwise operator in python is actually exactly the same symbol as that in JS, `<<` and `>>`. Just double checking, I did some quick REPL in JS vs python, and they seem to return the same results. 

```js
1 << 2 // return 4
10 << 10 // returns 10240
```

and in python:

```python
1 << 2 # returns 4
10 << 10 # returns 10240
```

So I naively thought I just had to reimplement the entire function in python. I was wrong. And I had to learn this the hard way. 

In JS, bitwise operation are carried out in int32, but python will use however many additional bits required to represent the number. This means, bitwise operation in JS will overflow (which is fine), bitwise operation in python will not overflow, but simply consume more memory. This also means, if the number gets too large, python and JS bitwise operation will diverse, if one is not careful:


In JS:

```js
1 << 30 // 1073741824
1 << 31 // -2147483648
1 << 32 // 1
```

In python:

```python

1 << 30 # 1073741824
1 << 31 # 2147483648
1 << 32 # 4294967296
```

The way I dealt with the problem is by casting the result to int32 (since numpy is already a dependency):

```python
from numpy import int32
int32(1 << 30) # 1073741824
int32(1 << 31) # -2147483648
int32(1 << 32) # 0
```

PS.

1/ As I write this, I just noticed the edge case of `1 << 32`, and it appears that it has been asked and [answered](https://stackoverflow.com/a/57660143/6059235) before. The hashing code does not use `<< 32`, so perhaps I am ... still safe? Programming is weird.

2/ As I am writing this, I noticed the second [highest voted answer](https://stackoverflow.com/a/52171480/6059235) on the hashing question, make use of `Math.imul`, which is something I did not know existed. The hashing function has been in production for sometime now, and unfortunately cannot be swapped out, but I will keep what I learnt in mind.
