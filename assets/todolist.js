// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAmpYcoRasnQ2PIuhrUsWT5gzS-uvIL-70",
    authDomain: "todolist-72f6d.firebaseapp.com",
    databaseURL: "https://todolist-72f6d.firebaseio.com",
    projectId: "todolist-72f6d",
    storageBucket: "todolist-72f6d.appspot.com",
    messagingSenderId: "806075941076",
    appId: "1:806075941076:web:5432cbd5774c6d3e9bfb41",
    measurementId: "G-C61NM483PG"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  console.log(firebase);
  firebase.analytics();
// generate the check list. 

var submitResult = document.getElementById('submitButton');
var input = document.getElementById('inputBox');
//if addEventListner cant find the docs , it will have wrong answer !//

// input with keyup event.
input.addEventListener('keyup', function(event){

    if (event.keyCode === 13) {

        event.preventDefault();
        submitResult.click();
    }
})

//submit Result logic. 
submitResult.addEventListener('click', function () {
    const inputBox = document.getElementById('inputBox');
    if (inputBox.value !== "") {
        const ValueofBox = document.getElementById('inputBox').value;
        let ResultArea = document.getElementById('checklist-head');
        const content = "<div class='result container'><input type='checkbox' id='c1' name='cc' />" + "<label class='col-md-11 col-11 text-left' for='c1'>" + ValueofBox + "</label><span class='checkmark'><span>";
        ResultArea.insertAdjacentHTML('afterbegin', content);
        //call function for enter key. 
        //saving data by calling the api. 
        data = {title : ValueofBox}
        function postData(){
            var option =  {
                method: 'POST',
                headers:{'content-type': 'application/json'},
                body:JSON.stringify(data)
            }
            // sent data to backend.
            fetch('/api/tasks',option)
            .then(function(res){
                //const result = res.json();
                //var newString= JSON.stringify(result);
                //var newObject = JSON.parse(res);
                //console.log(typeof newString);
                //console.log(typeof newObject);
                console.log(res);
            
            })
        }
        postData();
        console.log("Task Create!");
    } else {
        window.alert('Please input your task ! ')

    }
    inputBox.value = "";
})

var ResultArea = document.getElementById('checklist-head');
//if addEventListner cant find the docs , it will have wrong answer !//

ResultArea.addEventListener('click', function (e) {
    var CancelEvent = document.getElementsByClassName('checkmark')[0].className;
    if (e.target.className == CancelEvent) {
        //console.log(e.currentTarget);
        //console.log(e.target);
        //console.log(e.currentTarget.innerText);
        //console.log(e.target.parentNode);
        //console.log("Task finished!")
        //console.log(e.target.parentNode.childNodes)
        const checkMark = e.target.parentNode;
        const getTaskName = e.target.previousSibling.innerText; 
        checkMark.remove();
        console.log(getTaskName);
        //Remove the data from the firebase data base.
        const data = {title : getTaskName,status:'delete' };
        function deleteData(){
            var item =  {
                method: 'POST',
                headers:{'content-type': 'application/json'},
                body:JSON.stringify(data) 
            };
            fetch('/api/tasks', item)
            .then(function(res){
            //箭頭韓式可以直接使用。
            console.log(res);
            return res.json();
            
            })
        }
        deleteData();
        console.log("Task Delete!");
    } else {

        console.log('failed to remove the content !');   
    }

})
