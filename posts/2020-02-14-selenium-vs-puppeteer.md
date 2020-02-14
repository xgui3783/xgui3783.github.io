---
title: "Selenium vs Puppeteer"
date: 2020-02-14
tags:
  - javascript
  - testing
  - e2e
layout: layouts/post.njk
---
Lately, I have been working on e2e test of an angular application. 

Natively, angular CLI appears to use protractor, selenium and jasmine. However, I am been more familiar with mocha, chai and puppeteer. Thus began the debugging cycle.

## Issue 1: Lacking visual feedback

After much research, I came to the conclusion that whilst it [certainly appears](https://stackoverflow.com/a/52765728/6059235) that you can write puppeteer tests, in non-headless mode, the chrome window simply does not navigate to the page(s) you instruct it to. My guess is that protractor internally uses selenium. By specifying the binary executable path, protractor opens a Chrome window. But `puppeteer.launch` will launch a separate chrome instance. Puppeteer API interacts with the latter and webdriver API interacts with the former. Whilst your tests will still pass/fail as you would expect, debugging them becomes a much more difficult task. 

So I could:

- Use protractor and learn selenium web driver API
- Use protractor and use puppeteer in effective headless mode
- Use mocha, chai and puppeteer

After much back and forth, I have decided to use jasmine and selenium. Hopefully, in the future, it should be easier to distribute e2e tests via selenium grid. It should also allow tests to be written in other languages. 

I have abstracted away the selenium webdriver API, so in principle, implementing puppeteer should be relatively simple. 

## Issue 2: Debugging HTTP requests

In e2e tests, one of the test conditions is given the navigation to a URL, the application should make a HTTP GET request. For puppeteer, there is [page.setRequestInterception(value)](https://github.com/puppeteer/puppeteer/blob/master/docs/api.md#pagesetrequestinterceptionvalue) . For selenium ... nothing?

At the end, I had to resort to proxy'ing `XMLHttpRequest.prototype.open`. Even then, it was not straight forward. `webdriver.get` instantiate a new window for me, and thus overwrites any previous proxying of `XMLHttpRequest.prototype.open`. So I had to hack it by synchronously patching the method, after `webdriver.get` call was made. 