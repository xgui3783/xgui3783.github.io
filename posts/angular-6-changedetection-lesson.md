---
title: "Angular 6 changeDetection lesson"
date: 2018-06-09
tags:

layout: layouts/post.njk
---
I learnt an important lesson today.

    @Component({
      template : 
    `
    <div *ngFor = "let string of array">
      {{ string }}
    </div>
    `
    })
    
    export class MyApp{
      
      get array(){
        return ['hello','world']
      }
    }
    

does **not** work like the way I thought it did.
