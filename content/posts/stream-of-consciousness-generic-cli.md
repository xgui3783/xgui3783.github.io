---
title: "Stream of consciousness - generic command line quirks"
date: 2017-02-27
tags:
  - cli
  - imagemagick
  - lesson learnt the hard way
  - lessons learnt the hard way
  - pdf
  - programming
layout: layouts/post.njk
---
Using imagemagick,

    convert pdf.pdf -density 400 png.png
    

is different to

    convert -density 400 pdf.pdf png.png
    

the latter works, the former doesn’t

* * *

to count the number of pages in a PDF document, instead of using

    identify -format %n pdf.pdf
    

(uses imagemagick coupled with ghostscript. slow and inefficient), use

    pdfinfo pdf.pdf
    

and catch the `stdout` for the number of pages. pdfinfo is noticably faster, even on a 5 paged pdf document.
