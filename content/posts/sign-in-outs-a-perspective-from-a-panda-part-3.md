---
title: "sign in &amp; outs - a perspective from a panda (part 3: salt + hash)"
date: 2016-12-05
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

### Approach Three: Using a salt and hashing algorithm to store the password

**TL,DR: probably the best we could hope for.**

In the past two weeks, we have seen how storing usernames and passwords as plain-text is a very bad idea. Storing usernames and hashed passwords is a better approach, but still lacks in security. We will talk about salt + hash, which is yet more secure than just hashing the password

Salt and hash is a method that specifically tries to counter two shortcomings of just hashing the password. Namely, social engineering and rainbow tables. The workflow of salt and hash is the following:

1.  on signup, generate a **unique** string of characters for each new user. This random string of characters are known as a **salt**
2.  calculate the hash of a string of characters, containing the password, followed by salt. e.g. if the password is michaeljackson and salt is ao2encm191, then the hash of michaeljacksonao2encm191 will be calculated. This hashed string is known as the **salted hashed password**.
3.  save the username, salted hashed password and salt into the database
4.  on signin, find user with the typed username
5.  calculate the hash of a string of characters, containing typed password followed by database stored salt
6.  compare the calculated salted hashed password with the stored salted hashed password. If the characters are the same, the authentication succeeds. Otherwise, the authentication fails.

Now, should an attacker gain access to your database, this is what they will see:

username

password

salt

hint

panda

7f2f1569adc6df56c79c43526184732a

wa091k3

favourite food

squirrel

9e99d88df248f42c145924189de77fdd

91kacx

thrill

koala

c655062d796cfc8c0771ce2299d88b10

kk1nmo7

is\\’t my kid

Squirrel and koala, whilst using the same passwords, have different salted hashed passwords. This can potentially make social engineering answers a lot harder. Additionally, rainbow tables will likely not work, as the tables will need to be millions if not billions if not trillion times larger. The best part is, the salt can be stored in the database in plain text.

The same caveat applies to the hashing method. Always use the latest hashing algorithms. It matters not if you are using salted hashed passwords, if your system can be compromised by brute force in 5 minutes or less. Modern (2016) computers can calculate MD5 extremely quickly. Use SHA2 (2016) or whichever hashing algorithm that is the standard.
