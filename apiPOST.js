const express = require('express');
const app = express();
const apiRouter = express.Router(); 
const tasks = require('./tasks.js');
const bodyParser = require('body-parser');
const databaseConfig = require('./model/model.js');

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
    return; } else if (req.body.status) {
      //res.status(404).send('The task is existed !');
      res.send('data has been delete');
      //console.log('data has been delete!');
      //console.log(req.body.status);
      deleteData();
    } else saveData();
  
    // func for data saving.   
    function saveData(){

      const task = {
        //'id':databaseConfig.key,
        'title' : req.body.title,
        'description':'#'+(tasks.length+1)+' '+'Task Create!'+','+ req.body.title
      };
      console.log('task has successfully been added!');
      
      //save to firebase data base. 
      databaseConfig.database.ref('/').push(task); // can't use the ref need to use the keyRef.
      tasks.push(task);
      res.status(200).json(task);
    };

    function deleteData() {
    var filter = databaseConfig.database.ref('/').orderByChild('title').equalTo(req.body.title);
    //var key = filter.once('value',function(snapshot){  snapshot.val()});
    databaseConfig.keyRef.once('value').then(
        function(snapshot){
          var data = snapshot.val();
          var keys = Object.keys(data);
          console.log('------------');
          console.log(keys)
          databaseConfig.database.ref('/'+keys).remove()});
          //why the ref can be use at here ? 
    }
  })

module.exports= apiRouter;