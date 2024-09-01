---
title: "twitter plight"
date: 2016-08-01
tags:
  - hacked
  - twitter
layout: layouts/post.njk
---
Not app development related this week. My twitter account has been behaving strangely lately. It suddenly started to follow a lot of strangers whom I don’t recognise. A lot of accounts in Arabic and Japanese. Going to see if I can single out the point of vulnerability:

– password compromise : not unlikely, given so many different hacks happened in the last decade or so. But this does not seem to be the case. I changed password, and enabled two factor authentication, but the problem remains.  
– tweetdeck : I recently started using tweet deck to manage multiple accounts. This does not seem to be the problem either. I revoked tweetdeck access to my account, but the problem is persisting.  
– twitter for windows : biggest suspicion yet. Reason? Date of granting access : 1982 jan 1. Really? Revoked access to see if this solves the problem of annoying following.  
– twebble : another suspicious actor. twebble is the companion app for pebble used to access tweets on pebble. It could be that twitter API could be used maliciously.  
– twitter for mac : I do not use a mac, why do I have twitter for mac? Though this is likely the result of using tweet deck. Revoked access to see if this solves the problem.  
– twitter uses unencrypted communication, so on public wifi, follow requests were added by third party. (cookie snuffed?)  
– twitter for android  
– Twitter mobile app
