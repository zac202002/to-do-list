const mongoose = require('mongoose'); 
const Schema = mongoose.Schema;//這邊是在使用mongoose的Schema函數。

var dbSchema = new Schema ({
    _id:mongoose.Schema.Types.ObjectId,//這個會按照DB資料進來的時間建立id
    title:String,
    description:String
});

var x = 123


var dbdata= mongoose.model('dbdata',dbSchema);

//mongoose.model是用來建立此資料格式在DB裡面。

module.exports = {dbdata,x}

//this will equal to the model that shows in the docs.
