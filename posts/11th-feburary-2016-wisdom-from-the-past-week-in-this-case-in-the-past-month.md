---
title: "11th Feburary, 2016, wisdom from the past week (In this case, in the past month)"
date: 2016-02-11
tags:
  - css
  - html
  - javascript
  - joomla
  - jquery
  - js
  - lessons learnt the hard way
  - template
layout: layouts/post.njk
---
I am an aspiring web designer, web developer and photographer. Building up a plethora of tools is not easy. I am hoping to record down the bits and pieces of wisdom I have learnt during my journey. Hopefully, it can help someone out.

*   (I really hoped I did not have to start with this one.) You cannot spell therapist without rapist.
*   In JQuery, one can apply `$()` selector to select multiple levels of children, but `.children()` selector only affects a single level. - Corollary: in order to select an element with a specific set of classes (e.g. `<div class="pickme imtherealone"></div><div class="pickme"></div>`  
    ), remove the spaces (e.g. use `$('.pickme.imtherealone')`
*   bootstrap looks easy and useful - I have since went through bootstrap and put it to some good use. Still need more practice
*   When customising the a module in Joomla in css, always use element.classname or element.id. For example, the ul element is typically used for menu’s. (This should have been in HTML/CSS 101. But still made the mistake.)
*   `box-sizing:border-box` is an amazing way to define div sizes.
*   In JS or JQuery, always quotation marks for properties. For example, use `.css('border-width','24px')` rather than `.css(border-width,24px)`. Again, this should have been HTML/JS 101. - One exception to this rule is if the value is a number, say `variable = 1024`, then one need not quote the number. Otherwise, it will be considered as a string. (More rant on JS treatment of variables later)
*   In order to modify any of the modules, first create an override of the corresponding module (`Extension ->Templates` …

![joomla](/web/20190303113003im_/https://pandamakes.com.au/content/images/2018/01/joomla.jpg)

Click on the template you are using …

![joomla2](/web/20190303113003im_/https://pandamakes.com.au/content/images/2018/01/joomla2.jpg)

Then click “Create Override” and find the module or component or layout you want to override…

![joomla3](/web/20190303113003im_/https://pandamakes.com.au/content/images/2018/01/joomla3.jpg)

*   To find out which component (NOT modules… modules should be self-explanatory) you need to override, go to manage menu

![joomla4](/web/20190303113003im_/https://pandamakes.com.au/content/images/2018/01/joomla4.jpg)

and find the page you want to modify, and check the path underneath it

![joomla5](/web/20190303113003im_/https://pandamakes.com.au/content/images/2018/01/joomla5.jpg)

In this case, in order to customise the page after clicking “blog” button from the main menu, I will need to find the component folder called com\_articles, and create an override for the item Category Blog.

*   Override creates a file that you can play with, and change the behaviour of the final page. To access the file, which you can tinker with, go to Extension -> Template -> select your template (as before), Then, hit Editor -> html -> find the component/module you are interested in tinkering.

![joomla6](/web/20190303113003im_/https://pandamakes.com.au/content/images/2018/01/joomla6.jpg)
