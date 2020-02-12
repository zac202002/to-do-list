const express = require('express');
const middleWareRouter = express.Router(); 


var ms = function(req, res , next){

    console.log ('middleWareAPP has been fired!');
    next();
};
module.exports = ms;

