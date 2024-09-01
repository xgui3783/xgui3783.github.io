---
title: "Protractor Strangies"
date: 2020-03-02
tags:
  - javascript
  - e2e
  - protractor
  - selenium
layout: layouts/post.njk
---
In a previous post, I mentioned that I have decided to work with protractor, selenium, and webdriver (though webdriver/protractor API are abstracted via OOP).

When porting our e2e tests, we noticed the need to move the cursor to a specific position on the viewport, and observe the UI change. It just so happens that selenium v1 and v2 had [very different API of moving mouse](https://stackoverflow.com/a/53108677/6059235).