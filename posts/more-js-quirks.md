---
title: "more js quirks"
date: 2018-09-28
tags:

layout: layouts/post.njk
---
following on from [last js quirks post](www.pandamakes.com.au/js-quirks/)

    isNaN([1,2,3])
    //prints true
    

good. and array is not a number

    isNaN([])
    //prints false
    

err... so an empty array IS a number?

    isNaN(true)
    isNaN(false)
    //both prints false
    

a boolean is a number? (I guess this one can be considered 1 or 0 respectively...)

conclusion, `isNaN` is weird...
