---
title: "How I solved "InternalOAuthError: Failed to obtain request token" for PassportJS Google Authentication"
date: 2016-07-11
tags:
  - examcopedia
  - js
  - node.js
  - PassportJS
  - third party authentication
  - third party signin
layout: layouts/post.njk
---
I wanted to implement third party signin option for my webapp.

Since my app runs on NodeJS, PassportJS was the obvious choice. I have already made local signin work, and I thought configuring third party signin options should not be too hard. But I was stumped for two hours, trying to figure out how to solve `InternalOAuthError: Failed to obtain request token`.

Even if I followed [PassportJS Doc](http://passportjs.org/docs/google) or [guide from Scotch.io](https://scotch.io/tutorials/easy-node-authentication-google), I kept on getting the error. I had initially thought it was `express-session` not configured correctly. But [Google’s official API console help](https://support.google.com/googleapi/answer/6158857?hl=en-GB) stated: OAuth 2.0 client IDs.

Using OAuth2.0 worked instantly.
