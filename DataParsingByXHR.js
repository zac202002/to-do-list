var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
// node.js 需要使用這個模組。
var xhr = new XMLHttpRequest();
xhr.open('GET' , 'http://gank.io/api/data/%E7%A6%8F%E5%88%A9/0/1',true);
//xhr.open 是 XMLHttpRequest 這個物件所提供的方法，你可以用這個方法來做操作。
xhr.onreadystatechange = function (){
//xhr.onereadystatechange 其實就一個event handler , 這邊不要想太多，把塔簡單理解成事件處理的方法從這裡開始定義。
    if(xhr.readyState===4){
    //xhr.readyState其實就是指現在server的處理狀況。0表示還沒有開始，1表示讀取中，2表示已經讀取，3表示資訊交換中，4表示一切完成。
        if(xhr.status===200){
    //xhr.status 這邊在談的是server response的狀況，200表示回應OK，這邊我們做double check
        console.log(xhr.status)
        console.log(xhr.responseText);
        var DataStringify = JSON.stringify(xhr.responseText);
        var Data = JSON.parse(JSON.stringify(xhr.responseText));
        //JSON.parse or JSON.stringfy 只能用在今天他是JSON格式的時候。
        var DataReverse = JSON.parse(DataStringify);
        console.log(typeof xhr.responseText);
        console.log (typeof JSON.parse(Data));
        console.log (typeof DataStringify);
        console.log(typeof DataReverse);

        } else {
        console.log('There was a problem with the request.');
        };
    }
   
}
xhr.send();
//xhr.send 表示把我們的HttpsRequest給送出。
