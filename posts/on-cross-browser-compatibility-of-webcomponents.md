---
title: "on cross browser (chrome vs FF) compatibility of webcomponents"
date: 2018-05-16
tags:

layout: layouts/post.njk
---
I ran into an interesting problem yesterday. Support for webcomponents.

AFAIK, chrome natively support webcomponents. FF however, require a polyfill. It did not take long for me to realise that the polyfill breaks chrome's native support for webcomponents (probably overwrites the `customElements(...arg)` function and `customElementRegistry` property of `window`.

Then I remembered learning about testing for browser capability using codes such as

    if('customElements' in window){
      /* natively support webcomponents */
    }else{
      /* polyfill */
    }
    

Worked like a charm.
