---
title: "Disabling (some) zonejs in Angular app"
date: 2021-10-26
tags:
  - angular
  - zonejs
layout: layouts/post.njk
---

Profiling is so fun.

I noticed that a component is running significantly slower in angular than in vanilla JS. I had some spare time, and did some profiling.

The component did have a lot of interactivity (via `Element.addEventListener` and `requestAnimationFrame`). I noticed that there were a lot of calls to `globalZone`, and alot of unnecessary `delegate` calls. (each raf call. )

Normally reactivity is nice. It simplifies product development cycle and boosts productivity. In this case, however, it is unnecessarily punishing performance. 

Intially, I wondered if I could call the component with a special set of globals, something like

```js

// before zone.js patch the hell out of native raf

window['originalRAF'] = window['requestAnimationFrame']

// ...

import 'zone.js'

//...

class MyHero implements OnInit{
  ngOnInit(){
    const proxyCreateMyComponent = createMyComponent.bind({
      ...window,
      requestAnimationFrame: window['originalRAF']
    })
    proxyCreateMyComponent('#comp-id')
  }
}
```

I did some digging, and some source code divining, and it seems, for the time being, the solution is actually much simpler:


```js

// disables patches to raf altogether

window['__Zone_disable_requestAnimationFrame'] = true

// ...

import 'zone.js'
```

Hopefully... the angular team doesn't change this, eh?