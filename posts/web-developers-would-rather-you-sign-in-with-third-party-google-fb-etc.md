---
title: "sign in &amp; outs - a perspective from a panda (part 1: plain text)"
date: 2016-11-21
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

### Approach One: Store plain text username/password in database

**TL,DR: do _not_ do this!**

The most straight forward approach to username/password problem might be:

1.  retrieve the username/password combination from signup page
2.  store the username and password as two strings in a database
3.  when the user signs in, find the record in the database that matches the username input with username in the database
4.  compare the value of the password input and the password stored in the database

There are several reasons why this is a very very bad idea. For one, should the database access become compromised, the intruder will see the following table, aptly named user (probably):

username

password

hint

panda

bamboo

favourite food

squirrel

michaeljackson

thrill

koala

michaeljackson

is\\’t my kid

The intruder now has access to the users registered with your site. More importantly, since most users recycle their password, you have just put all of their accounts (google, facebook etc) in peril.

Incidentally, if your system admin can tell you exactly what your forgotten password is, chances are, your password is being stored as a plain text password. Either approach your system admin to see it changed or change it to something harmless.
