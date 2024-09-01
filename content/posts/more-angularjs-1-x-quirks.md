---
title: "More AngularJS 1.x quirks + precision arithmetic"
date: 2016-10-10
tags:
  - angular js
  - javascript
  - lessons learnt the hard way
layout: layouts/post.njk
---
So I was redoing some work on the Angular webapp I was working on. I had `ngSanitize` component, and was using `ng-bind-html` to dynamically bind some stylised HTML contents. However, it seems `style` tags do not work as intended. i.e.

    <div ng-app="app"> 
      <div ng-controller="controller">
        <div ng-bind-html="processRawData(rawData)">
        </div> 
      </div>
    </div> 
    
    <script> var app = angular.module('app',['ngSanitize']) 
    app.controller('controller',function($scope){ 
      $scope.rawData = 'raw Data' 
      $scope.processRawData = function(i){ 
        return '<span style = "width:97%">'+i+'</span>' 
      } 
    }) 
    </script>
    

does not work.

* * *

First time Javascript floating point arithmetic precision came and bit me in the ass. Long story short,

    var sum = a + b + c
    sum - b - a == 0 //false
