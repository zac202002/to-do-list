const express = require('express');
const apiRouter = express.Router(); 
const tasks = require('./tasks.js');




apiRouter.get('/api/', function (req, res) {
    res.send('this is the second page');
    console.log('middleWareAPI has been fired!')
  });

// res.send reply the answer with tasks [陣列]
apiRouter.get('/api/tasks/', function (req, res) {
    res.send(tasks);
    console.log(tasks);
  });
//params.{variable} can print the variable in the url. //
//Javascript array way to slove issue. https://eyesofkids.gitbooks.io/javascript-start-from-es6/content/part3/array.html // 

apiRouter.get('/api/tasks/:id', function (req, res, next) {
    const task =tasks.find(function(c){return c.id === parseInt(req.params.id)});
    if(!task) {
      res.status(404).send('The task not find')
    }else {
      res.send(task);
      next();
      console.log('middleWareAPI has been fired!');
    }
},function(req,res){
  console.log('we have to the second one !');  
});

//params.{variable} can print the variable in the url. //
apiRouter.get('/api/tasks/:id/:year/:month', function (req, res) {
    res.send(req.params.id.year)
  });

// this is the login page method routing. 

apiRouter.get('/login',function(req, res){

    res.render('login.ejs');
    res.status(200);
})

apiRouter.get('/register',function(req, res){

  res.render('register.ejs');
  res.status(200);
})

module.exports= apiRouter;