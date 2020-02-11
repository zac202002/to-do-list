const express = require('express');
const app = express()
const axios = require('axios');
const bodyParser = require('body-parser');
const middleWareRouter = require ('./route');
const apiGET = require ('./apiGET');
const apiPOST= require('./apiPOST');


//connecting Mongodb by useing Mongoose Package. . 
require('dotenv').config();
const mongoose = require('mongoose'); 
mongoose.connect(process.env.DATABASE_URL, { useUnifiedTopology: true,useNewUrlParser: true } )
const db = mongoose.connection;
//db.on('error',(error)=>console.error(error));
db.once('open',()=>console.log('connected to Database.'));

//Below is the APP level routing that use the indiviual router . 
app.use(express.json()); 
app.use(middleWareRouter); // middleware 
app.use(apiGET); // apiGet route. 
app.use(apiPOST);// apiPost route. 



//Below is rendering the content by front-end Server. 
app.set('view engine', 'pug');
app.use(express.static('assets')); // put all the static stuff under this shit. 

const fs = require('fs');

app.get('/', function (req, res) {
res.sendfile(__dirname+'/todo.html');})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')})
//This is the server : localhsot:XXXX //sj3