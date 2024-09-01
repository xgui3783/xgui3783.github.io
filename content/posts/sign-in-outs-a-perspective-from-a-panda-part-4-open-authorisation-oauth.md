---
title: "sign in &amp; outs – a perspective from a panda (part 4: open authorisation- OAuth)"
date: 2016-12-12
tags:
  - Security
  - third party authentication
  - third party signin
layout: layouts/post.njk
---
I have developed webapps for quite sometime now, and I have worked on three major projects that require the user to authenticate in one way or another.

**ITT: I will talk about the approaches I use to handle local signups and why I prefer clients use third party login instead.**

**NITT: I won’t talk about language specific ways how the approaches can be achieved. Every mature language/platform should contain a way these approaches can be realised.**

* * *

### Approach Four: use open authorisation (OAuth)

**TL,DR: probably the best we could hope for.**

You probably have seen these already. When you want to sign up for a new service, you could either register a new account by supplying your full name, e-mail address, password (no shorter than 8 characters, with AT LEAST one letter, one number, one special character and one llamma), OR, you could sign in via Google, Facebook, Twitter … You thought to yourself, well, it saves me time, and I no longer have to go to my registered e-mail address, click on the stupid link, and I no longer have to remember an additional password. And if you were thinking of recycling password, shame on you.

What you probably do not know, is that developers love this option, too. Developers do not need to worry about your passwords getting hacked, and they do not need to worry about hashing and salting anything. The developers will still need to keep track of the user data, but the information that are kept in their databases are no longer sensitive. The attacker, should they obtain access to the database, will see something akin to the following:

name

email

authentication method

panda

panda@gmail.com

google

squirrel

squirrel@gmail.com

twitter

koala

koala@gmail.com

facebook

The attacker can likely see the email address (which, in most cases, doubles as login username). However, these companies should hopefully have beefy securities, stopping unauthorised access to the users’ google/facebook/twitter account.

Are there risks to this method of authorisation? Yes. I will elaborate the risks (to the users) in a separate blog post
