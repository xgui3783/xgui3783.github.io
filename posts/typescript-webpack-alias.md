---
title: "Typescript + Webpack + Alias"
date: 2018-07-25
tags:

layout: layouts/post.njk
---
Ran into a small problem today regarding the using of `alias` in a typescript webpack project.

The project structure looks like so:

    - root
      - src
        - main.ts
      - third_party
        - another_module
          - main.js
      - tsconfig.json
      - webpack.config.js
    

in `main.js`, instead of:

    import '../third_party/another_module/main.js'
    

I would very much prefer:

    import 'third_party/another_module/main.js'
    

Initially, I thought it was the [typescript module resolution](https://www.typescriptlang.org/docs/handbook/module-resolution.html) I needed to fiddle around with. Turns out, it was [webpack resolve.alias](https://webpack.js.org/configuration/resolve/).

`path.resolve` was also needed. i.e.:

    /* didn't work */
    module.exports = {
      resolve : {
        alias : {
          "third_party" : "third_party"
        }
      }
    }
    
    /* worked */
    const path = require('path')
    module.exports = {
      resolve : {
        alias : {
          "third_party" : path.resolve(__dirname, 'third_party')
        }
      }
    }
