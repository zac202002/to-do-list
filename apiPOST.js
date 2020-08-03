//setting of the env 
if(process.env.NODE_ENV!=='Production'){

  require('dotenv').config

}
const express = require('express');
const app = express();
const apiRouter = express.Router(); 
const tasks = require('./tasks.js');
//const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const databaseConfig = require('./model/model.js');
const member = require('./member.js')
const passport = require('passport')
const initializedPassport = require('./passport-config');
const session = require('session')
const flash = require('flash')


app.use(express.json()); // we will sent data to JSON string (Jsonfile)
app.use(express.urlencoded({ extended:false}))// without this , we cannot get the data from the form 
app.use(flash()) //use this to render the flash message by flash module
app.use(session({
  secret:process.env.SESSION_SECRET,
  resave : false,
  saveInitialized:false
})) //use this to run the session module. 
app.use(passport.initialize())//initialize the passport.
app.use(passport.session())//initialize the passort session 

//authentication for the User. 
initializedPassport(
  passport, 
  (email) =>{member.find(member => member.Email === email)  } //這個東西就是getUserByEmail
)

app.post('/', function(req,res,next){
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


//login method routing 
apiRouter.post('/login', passport.authenticate(local,{
  //authenticate 一旦成功，會直接把pass 進來的資料變成req.user供給給後面的做使用。
  successRedirect:'/', // 如果成功會去的方向。
  failureRedirect:'/login', //如果失敗會被倒轉的地方。
  failureFlash:'true' // if this was true , flash 會提供一個message object. 

}))

apiRouter.post('/member', async function (req, res){
  console.log(req.body);
  try{
      
      const hashedPassword = await bcrypt.hash(req.body.Password,10)
      const resData = {
        id:Date.now().toString(),
        email:req.body.Email,
        password:hashedPassword
        }
      member.push( resData );
      console.log(member);
      res.status(200).send(member)
      //res.redirect('./login')
  }
  catch(err){
    res.send('something wrong !');
    console.log(err)
  }
})

module.exports= apiRouter;