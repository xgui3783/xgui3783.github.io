---
title: "How I solved PassportJS not fetching facebook email address(es)"
date: 2016-07-18
tags:
  - examcopedia
  - node.js
  - openshift
  - PassportJS
layout: layouts/post.njk
---
Using the [official doc](http://passportjs.org/docs/facebook) or the [guide from scotch.io](https://scotch.io/tutorials/easy-node-authentication-facebook), I could not fetch the e-mail address from facebook login. From [this response on SO](http://stackoverflow.com/a/32370813/6059235), I made the following changes:

    /* does not work */
    passport.use('facebookAuth',new facebookStrategy({
    	'clientID' : CLIENT-ID,
    	'clientSecret' : CLIENT-SECRET,
    	'callbackURL' : '/auth/facebook/callback'
    	function(accessToken, refreshToken, profile, done){
    		thirdpartylogin('facebook',profile,null,function(user){
    			return done(null,user);
    		})
    	}
    ))
    
    /* works */
    passport.use('facebookAuth',new facebookStrategy({
    	'clientID' : CLIENT-ID,
    	'clientSecret' : CLIENT-SECRET,
    	'callbackURL' : '/auth/facebook/callback',
    	'profileFields' : ['id', 'emails', 'name']},
    	function(accessToken, refreshToken, profile, done){
    		thirdpartylogin('facebook',profile,null,function(user){
    			return done(null,user);
    		})
    	}
    ))
    

Lo and behold, problem solved. Thanks SO!
