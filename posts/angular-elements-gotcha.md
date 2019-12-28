---
title: "Angular Elements Gotcha"
date: 2018-07-10
tags:
  - angular
  - angularelements
  - webcomponents
  - frontend
layout: layouts/post.njk
---
binding _inputs_ to angular elements gave me a surprise.

for example, the below component:

    /* import statements */
    
    @Component({
        selector : 'my-component',
        template : '{{ inputString }}'
        styles : []
    })
    
    export class MyComponent{
      @Input() inputString : string = `default value`
    }
    

in an angular application, you'd have:

    <my-component [inputString]="'hello world'">
    </my-component>
    

in the exported element would however, look like:

    <my-component input-string = "hello world">
    </my-component>
    

as documented [here](https://angular.io/guide/elements#mapping)
