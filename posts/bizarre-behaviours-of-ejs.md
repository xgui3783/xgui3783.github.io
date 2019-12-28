---
title: "Bizarre behaviours of EJS + JS + git"
date: 2016-07-25
tags:
  - ejs
  - embeddedjs
  - examcopedia
  - git
  - lesson learnt the hard way
  - node.js
  - nodejs
layout: layouts/post.njk
---
Playing with EJS recently. One of the most bizarre behaviours I noticed is with the switch case statements:

    <% switch(foo){case 'bar': %>
    <% break; %>
    <% } %>
    <%# works %>
    
    <% switch(foo){ %>
    <% case 'bar': %>
    <% break; %>
    <% } %>
    <%# does not work %>
    

Bizarre behaviour of JS (at least in node):  
`str.indexOf('foo')`  
does not take regex, yet  
`str.search('foo')`  
does take regex…

Bizarre (but not so bizarre) behaviours of git:  
`git push` does not seem to work on unsecured networks.  
But when you think about it, it makes total sense.

update: looks like the above statement is not entirely right. I was able to perform `git push` on a public network just now. perhaps it’s the network settings?
