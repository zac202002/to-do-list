const express = require('express');
const app = express();
const apiRouter = express.Router(); 
const tasks = require('./tasks.js');
const bodyParser = require('body-parser');
const database = require('./model/model.js');

app.use(express.json()); // we will sent data to JSON string (Jsonfile)

apiRouter.post('/', function(req,res,next){

  console.log('post request fired !')
  next();
});

apiRouter.post('/api/tasks', function(req,res){
    // The task here is the closure that will not get the task in the former middleware function.//
    //Input value validation, using return to stop the function callback [function(req, res)] . //
    // if there the is return in the function , the function will stop at there . //
    // if there is the return function in the if( ), the function will also stop at there//
    if(!req.body.title){
      res.status(404).send('The "title" is required !');
      console.log('false-request!');
      console.log(req.body);
    return; } else if (req.body.id < tasks.length  ) {
      res.status(404).send('The task is existed !');
      return;
    } else saveData();
  
    //The rest of the code won't be execute if the validation is failed.//
    
    function saveData(){
      const task = {
        'id':tasks.length+1,
        'title' : req.body.title,
        'description':'#'+(tasks.length+1)+' '+'Task Create!'+','+ req.body.title
      };
      console.log('task has successfully been added!');
      
      //save to firebase data base. 
      
      database.ref.push(task);
      console.log(req.body);
      console.log(task);
      tasks.push(task);
      res.status(200).json(task);
    };
  })

module.exports= apiRouter;