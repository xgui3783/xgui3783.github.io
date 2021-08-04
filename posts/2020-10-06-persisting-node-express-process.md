---
title: "Persisting (nodejs) express process"
date: 2020-10-06
tags:
  - nodejs
  - express
  - memorycache
  - lru
layout: layouts/post.njk
---

I was running a test just today, and 

I should be no stranger to builds breaking all of a sudden. 

```bash
ERROR in node_modules/@types/node/ts3.4/globals.global.d.ts:1:13 - error TS2403: Subsequent variable declarations must have the same type.  Variable 'global' must be of type 'Global', but here has type 'Global & typeof globalThis'.

1 declare var global: NodeJS.Global & typeof globalThis;
              ~~~~~~

  node_modules/zone.js/dist/zone.js.d.ts:600:13
    600 declare var global: NodeJS.Global;
                    ~~~~~~
    'global' was also declared here.
```

It seems the bug was introduced by

<https://github.com/DefinitelyTyped/DefinitelyTyped/pull/43308>

<https://github.com/DefinitelyTyped/DefinitelyTyped/pull/44700/commits>

<https://github.com/DefinitelyTyped/DefinitelyTyped/pull/41491>

My (temporary) solution was to pin `@types/node` version to `12.12.39`
