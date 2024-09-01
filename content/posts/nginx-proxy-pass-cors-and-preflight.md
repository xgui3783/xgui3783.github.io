---
title: "nginx, proxy pass, cors and preflight"
date: 2018-10-10
tags:

layout: layouts/post.njk
---
Lately, I wanted to setup an nginx gate way that proxy pass the requests in the following manner:

    http://hostname.com : 301 -> https://hostname.com
    https://hostname.com/{CONTAINER_NAME}/{PORT_NUMBER}/ -> add CORS header, proxy pass to http://{CONTAINER_NAME}:{PORT_NUMBER}/
    

This would be especially useful in a `docker-compose.yml` script, where, in the same `docker network` containers can communicate with each other via docker network dns. TLDR: [github repo](https://github.com/xgui3783/dockerNginxProxyPass)

redirect to https connection
----------------------------

this bit is easy

    server {
      listen 80;
      access_log  /var/log/nginx/port80.access.log;
    
      # for let's encrypt
      location /.well-known/acme-challenge/ {
        root /www/html/letsencrypt;
      }
    
      location / {
        return 301 https://$host$request_uri;
      }
    }
    

But to configure ssl connection it is slightly tricky. Because one does not have the files necessary. I ran the test without the ssl directive. Once acquired, I then added the ssl directive and referenced the files.

proxy pass based on path
------------------------

This took a while, but:

    location ~ ^\/(.*)\/([0-9]*)\/ {
    
      # docker dns resolver
      resolver 127.0.0.11;
    
      set $proxy_pass_full http://$1:$2;
      rewrite ^\/.*\/[0-9]*\/(.*) /$1 break;
    
      add_header Access-Control-Allow-Origin *;
      proxy_pass $proxy_pass_full;
    }
    

Setting the `resolver` directive is essential, as if any part of the `proxy_pass` was replaced with a variable, nginx needs the resolver to be defined.

double cors header(?)
---------------------

one of the forwarded service has already been configured to add the cors header. By adding another `Access-Control-Allow-Origin` header, the browser freaks out and makes the response opaque. So easy, right, disable the CORS capability of the forwarded service. which bring us to ...

preflight (OPTION)
------------------

I never quite understood the preflight (OPTION) request, because I only ever see it rarely. But I now see more clearly the anatomy of a CORS request. A GET CORS request from the browser does not trigger preflight OPTION request, but a POST CORS request (and any other methods, it seems) does. (nb this could be unique to the `fetch` api, lower level `XMLHttpRequest` may be unaffected). preflight OPTION request is forwarded, but without CORS configuration, the preflight request was responded with a 405, and the POST CORS request was never sent.

the solution
------------

the nginx proxy server will respond preflight request:

    if ($request_method = 'OPTIONS'){
            add_header 'Access-Control-Allow-Origin' '*';
            add_header 'Access-Control-Allow-Methods' 'GET, POST, OPTIONS';
            #
            # Custom headers and headers various browsers *should* be OK with but aren't
            #
            add_header 'Access-Control-Allow-Headers' 'DNT,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Range';
            #
            # Tell client that this pre-flight info is valid for 20 days
            #
            add_header 'Access-Control-Max-Age' 1728000;
            add_header 'Content-Type' 'text/plain; charset=utf-8';
            add_header 'Content-Length' 0;
            return 204;
          }
    

courtesy of [this post](https://enable-cors.org/server_nginx.html)
