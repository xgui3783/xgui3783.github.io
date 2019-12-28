---
title: "sign in &amp; outs - a perspective from a panda (part 2: hash)"
date: 2016-11-28
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

### Approach Two: Using a hashing algorithm to store the password

**TL,DR: better, but still, do _not_ do this!**

Hashing algorithms is a method of scrambling a string of data. The beauty of hashing algorithms is that, given the same input, using the same hashing algorithm, one will always get the same output. For example:

    md5('coffee is delicious') = acbb7ff2245639a5fb74b7e4896f1c50
    

Google any MD5 algorithms, and try to hash ‘coffee is delicious’ (without the single quotes), you will always get `acbb7ff2245639a5fb74b7e4896f1c50`, regardless time of the day, architecture of the CPU, position of Mercury, etc.

The workflow of a username/password backend involving hashing algorithms will thus look like the following:

1.  retrieve the username/password combination from signup page
2.  hash the password
3.  store the username and hashed password as two strings in a database
4.  when the user signs in, find the record in the database that matches the username input with username in the database
5.  hash the password input, and compare that with hashed password stored in the database.

Should hashed password database be breached, the intruder will see the following table:

username

password

hint

panda

82960335036ff4ddc124b78af7777ee4

favourite food

squirrel

8d38376baca2ecf4196e5e0529f48e48

thrill

koala

8d38376baca2ecf4196e5e0529f48e48

is\\’t my kid

Hopefully, one of the problems associated with hashing is becoming clear to you. Both squirrel and koala had michaeljackson as their passwords. As a result, their hashed passwords are the same. With a little social engineering, the intruder can deduce that their password is michaeljackson

The other problem with hashing password is that whilst in theory, it is extremely difficult to reverse engineer hashed passwords, there are ways to crack hashed passwords:

1.  What is known as ‘rainbow tables’, where popular passwords and their hashed strings have been calculated, and stored in very very very very VERY large spreadsheets. Each of the sheet is known as a rainbow table, which effectively serve as a dictionary, that translates hashed string to plain text passwords.
2.  Depending on the method of hashing, brute force may be a viable method to break the hashed passwords. At the time of writing, MD5 is **not** a secure hashing algorithm. SHA1 is **not** a secure hashing algorithm. SHA2 is the industry standard for now, but as the computing speed doubles roughly every four years, I am confident that SHA2 will become inadequate in the future, too.
