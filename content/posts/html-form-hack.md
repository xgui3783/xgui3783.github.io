---
title: "HTML form hack"
date: 2016-09-05
tags:
  - html
  - javascript
  - jquery
layout: layouts/post.njk
---
Should have known this for a long time now. If either

     <button type = submit>button</button>
    

or

     <input type = submit value = "input"></input>
    

exist inside a form tag, enter key will automatically send the form.

Incidentally, you can capture the form before it is sent using jquery:

    $('#myForm').submit(function(e){ 
      /* do things here */ 
      //e.preventDefault() //or 
      //return false 
      //to prevent form submitting all together. 
    })
