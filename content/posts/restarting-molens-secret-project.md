---
title: "restarting molens, secret project"
date: 2016-08-15
tags:
  - android programming
  - java
  - molens
  - opencv
layout: layouts/post.njk
---
ok, enough time has been spent skirting around the problem. Time to tackle it again.

This time, I think I will make the optical structure recognition on a server, and make the app make api calls to the server, allowing the server to respond with .mol info.

I am already aware that the two options I have are [OSRA](https://cactus.nci.nih.gov/osra/), originally hosted on NIH, now has its primary home over at sourceforge, whose maintainer is Igor Filippov, and [Imago](http://lifescience.opensource.epam.com/imago/index.html) from EPAM (formally known as GGA Software), most of the maintainers (and the company itself) seems to be situated in Russia. (What is with Russians and its monopoly on optical structure recognition?)

I was originally going to go with OSRA, given it had a more reputable origin (NIH). But it has way too much dependencies. Given that most PaaS does not allow for sudo access, figuring out how to install all the dependencies is a pain. So I am opting for the webserver to work with Imago first.

Now, to say that I have no experience with Imago is lying. I have had at least a couple of months of hard work trying to get Imago to work on an Android environment. I won’t repeat the pain here. If you are interested, look through the past posts containing Java as tags.

I came across [this post](http://blog.scottfrees.com/getting-your-c-to-the-web-with-node-js). In short, the author argued that there are three methods of incorporating C++ libraries into node.js (yes, I have already given up making a tomcat webapplication, which may be able to implement the java binding that came with the box. After all, why reinvent the wheel?)  
\-automation  
\-rewrite the binding with node-ffi (which I was aware of)  
\-rewrite library in native js code

After not so much deliberation, if epam imago offers command line interactions, perhaps, automation is the way to go?

First hurdle. Whilst the automation works fine on my local host machine, on Openshift, it does not. It returns `EACCES error`. After some digging, it seems it is likely some permission related issue. I am suspecting that child process that writes a file makes the sandbox nervous.
