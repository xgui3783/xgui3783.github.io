---
title: "finally sorted out the weird EACCES issue re: npm, npm link and node gyp"
date: 2018-05-24
tags:
  - node.js
  - nodejs
  - npm
  - nvm
layout: layouts/post.njk
---
For the longest time, I was plagued by the issue of constantly have EACCES issue with regard to EACCES issue.

To set the scene, I do not have `nvm` installed. So `npm link` actually required `sudo` access. Crazy. I know. (Guess who's setting up `nvm` next time?). `package.json` has dependency on packages set up by `npm link`.

to reproduce the issue:

firstly, `rm -rf node_modules`  
now, `npm i` results in error, as the packages set up by `npm link` cannot be found, and the process is reversed.  
`sudo npm link PACKAGE` successfully Links the package and creates `node_modules` folder, but since the `node_modules` folder was created with super user, `node-gyp` would not be able to be installed properly.

solution: `(sudo) rm -rf node_modules`, `mkdir node_modules`, `sudo npm link PACKAGE`, `npm i`
