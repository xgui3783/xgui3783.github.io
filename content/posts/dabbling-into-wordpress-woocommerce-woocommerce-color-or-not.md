---
title: "dabbling into wordpress woocommerce + woocommerce color (or not)"
date: 2016-08-22
tags:
  - css
  - lessons learnt the hard way
  - template
  - woocommerce
  - wordpress
layout: layouts/post.njk
---
Recently, I have been asked to renovate an old project.

I made the previous website with _Joomla_, using _virtuemart_ as the e-commerce solution. Turns out, the implementation is much easier with _woocommerce_ on _wordpress_. Whilst sacrificing some customisability, it looks great out of the box. CSS is generated from SCSS, so it’s minified, and admittedly, difficult to search through.

Gimmick: _woocommerce_ discontinued native support for colour and styling (at least as of ver 2.6.4). Plugins such as _woocommerce color_ allows for very limited colour customisation, but overwrites CSS. Lesson learnt the hard way indeed.
