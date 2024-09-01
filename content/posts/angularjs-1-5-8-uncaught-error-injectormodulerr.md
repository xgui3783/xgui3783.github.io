---
title: "AngularJS 1.5.8 Uncaught Error: [$injector:modulerr] + Mongoose quirks"
date: 2016-08-29
tags:
  - angular js
  - angularjs
  - html
  - javascript
  - mongo
  - mongodb
  - mongoose
  - node.js
  - nodejs
layout: layouts/post.njk
---
Long story short.

Doing some AngularJS. Keep on getting this error. First thought ngRoute needs to be included. Then ngResource.

Turns out, just need to include angular component outside the

    $(document).ready(function(){})
    

Also, turns out one cannot bind jquery actions such as

    $('#modal').modal('show')
    

I have found a get around on SO, but implementation is too complicated and I would assume the debugging process also. So I hacked it a bit. I bound ng-mouseenter with angular and left the click event to js.

Using mongoose to store data this time around. Saving entries … can be counter intuitive.

For example,

    var lessonSchema = mongoose.Schema({ 
      shortCode : String, 
      arrQuestions : Array, 
      progress : Number, 
      length : Number, 
      creator : String, 
      users : Array, 
      created : Date, 
      status : String, 
    }) 
    
    lessonSchema.methods.addAnswerToAnswerSheet = function(INDEX,answerJSON){ 
      this.users[INDEX].answerSheet.push(answerJSON) 
    } 
    

And one of the entry looks like the following:

    { 
     "_id" : ObjectId("57bda23bd796f12824d8b710"), 
     "status" : STATUS, 
     "created" : ISODate("2016-08-24T13:33:47.831Z"), 
     "creator" : CREATOR, 
     "length" : 10, 
     "shortCode" : "xk4Wp", 
     "users" : [ { 
       "strId" : ID, 
       "name" : NAME, 
       "answerSheet" : [] 
     } ], 
     "arrQuestions" : [ { 
       "mark" : "", 
       "space" : "", 
       "answer" : ANSWER, 
       "question" : QUESTION, 
       "hashed_id" : HASHED_ID, 
       "subject" : SUBJECT, 
       "note" : "" }, 
       ... 
     ], 
     "__v" : 2, 
     "progress" : 1 
    }
    

and calling the methods does not seem to work as intended…. i.e.:

     var query = {...} 
     var index = INDEX 
     var json = JSON 
     var submitAnswer = Lesson.findOne(query,function(e,lesson){ 
       if(e){ 
         console.log(e) 
       }else{ 
         lesson.addAnswerToAnswerSheet(index,json)
         lesson.save(function(e1){ 
           if(e1){ 
             console.log(e1) 
           } 
         }) 
       } 
     })
    

does not save the document.

I believe the error was that you cannot individually interact with a sub document, unless you define its schema. So to solve the problem, I defined each user as a different schema.

     var userSchema = mongoose.Schema({ 
       name : String, 
       strId : String, 
       answerSheet : String /* stringified JSON objects */ 
     }) 
     
     var lessonSchema = mongoose.Schema({ 
       shortCode : String, 
       arrQuestions : Array, 
       progress : Number, 
       length : Number, 
       creator : String, 
       users : [userSchema], 
       created : Date, 
       status : String 
     })
    

Seems to work just fine…

UPDATE : (21/10/2016) mongoose not saving is a result of the model not recognising that the model had been changed. To force a save:

     doc.markModified('field') doc.save(function(e){ })
