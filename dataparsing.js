var fetch = require('node-fetch');

function dataExtract () {

fetch('http://gank.io/api/data/%E7%A6%8F%E5%88%A9/0/1',{method:'get'})

.then(function(res) {
    // 直接轉成JSON格式 ; 
    var x = res.json();
    console.log(res.status);
    console.log(res.statusText);
    console.log(res.type);
    console.log(res.url);
    console.log(typeof(x));
    //將返回的response 物件直接變成Json 檔案。 ; 
    return x;
}).then(function(result){
    //var realData= JSON.parse(result);//
    var newString= JSON.stringify(result);
    var newObject = JSON.parse(newString);
    console.log(result);
    console.log(typeof(newString));//-> 把result Json 字串轉變成純字串。
    console.log(typeof(newObject));//-> 把被轉換成文字轉的結果再轉變成物件。
}).catch(function(err) {
    console.log(err);
    console.log('this is fucking wrong');
})}

dataExtract();

