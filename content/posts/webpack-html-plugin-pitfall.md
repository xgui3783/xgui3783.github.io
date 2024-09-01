---
title: "Webpack HTML plugin pitfall"
date: 2018-07-23
tags:
  - webpack
  - javascript
layout: layouts/post.njk
---
Singular, a quick one.

If one mix javascript in html pages loaded by HTML plugin, such as:

    <!doctype html>
    <html>
      <head>
        <script>
          const message = 'hello world'
          console.log(`${message}`)
        </script>
      </head>
      <body>
      </body>
    </html>
    

webpack html plugin will throw an error reads something like:

`Template execution failed: ReferenceError: message is not defined`

No template literals in webpack html plugin.
