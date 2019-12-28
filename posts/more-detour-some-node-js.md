---
title: "More detour. Some Node.js"
date: 2016-04-25
tags:
  - css
  - html
  - javascript
  - jquery
  - lessons learnt the hard way
  - node.js
layout: layouts/post.njk
---
The timetable app is in shambles.

Let me talk a little about the background of the timetable app. It first started as a visual basic/excel app. Very quickly, it became obvious that the slowness was just not going to cut The lack of portability (master file needed), the lack of customisation (prettiness) and the clunkiness of the excel/VB app just does not cut it. So some time Sep ’15, I pitched to my client of a web based timetable app. I built a prototype, and started working on the actual web app. Turned out, I learnt PHP and MySQL building the webapp, which I am eternally grateful. However, the app is showing its age. the codes are ugly, the site is slow, and full of bugs. It’s time to retire the site and make a new one.

This time, I am planning to use _bootstrap_ for the layout, _node.js_ for real time update on the database and _angular js_ for binding the front end. I believe _Ruby on rails_ would do similar thing as node.js. I was just lazy, and didn’t want to learn ruby unless absolutely necessary.

node.js quirk #1:

    app.get('/', function (req,res){
    	res.sendFile('index.html');
    });
    

returns an error:

    TypeError: res.sendFile is not a function
    

So I was scratching my head, trying to identify the error, until I saw [link](http://stackoverflow.com/questions/28787518/undefined-error-while-trying-to-route-to-client-folder-using-express), which is in contrary to other [SO answers](http://stackoverflow.com/questions/26202150/express-js-error-express-deprecated-res-sendfile-use-res-sendfile-instead) and the [example](http://www.tutorialspoint.com/nodejs/nodejs_express_framework.htm).

More quirk on node.js and socket.io. So I was testing the server client connection using socket.io, following the example [here](http://socket.io/get-started/chat/). But I thought I’d add my own little flavour, namely instead of

    socket.emit('chat message','foo')
    

I would use

    socket.emit('ping','foo')
    

Whilst the `io.on(‘connection’,’foo’)` fired correctly, the `socket.emit(‘ping’,’foo’)` refuse to fire. I double/triple checked the spelling, and there does not seem to be any typos present. And suddenly, a flicker of brilliance, I though to myself, ping is a common connection term, maybe it’s reserved for special functions, like ‘connection’, and lo and behold, changing `ping` to `ping pong` solved my issue.

ONWARDS, COMRADES! I am stoked.

More Node.js quirks. I installed mysql via npm, for record control. But somehow, I was not able to connect according to the [documented method](https://www.npmjs.com/package/mysql). What happened was, I was thrown the error

    Error: getaddrinfo ENOTFOUND
    

Before anyone asks, I have restarted my node.js server, and made sure the xampp mysql server is up, at the right (3306) port. Well, either way, when I came back home, it worked. So who knows what happened. It’s likely that I did not have an internet connection, though all of the dependencies are installed locally, so I couldn’t see if there is anything else I needed.

More quirkiness with jquery this time around.

    //$('#'+i.hashed_id).remove(); //does not work
    $('div').remove('#'+i.hashed_id); //works
    

What’s the deal?
