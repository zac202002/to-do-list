// generate the check list. 

var submitResult = document.getElementById('submitButton');
//if addEventListner cant find the docs , it will have wrong answer !//
submitResult.addEventListener('click', function () {
    const inputBox = document.getElementById('inputBox');
    if (inputBox.value !== "") {
        const ValueofBox = document.getElementById('inputBox').value;
        let ResultArea = document.getElementById('checklist-head');
        const content = "<div class='result container'><input type='checkbox' id='c1' name='cc' />" + "<label class='col-md-11 col-11 text-left' for='c1'>" + ValueofBox + "</label><span class='checkmark'><span>";
        ResultArea.insertAdjacentHTML('afterbegin', content);
        
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
        //console.log(e.target.parentNode);
        //console.log("Task finished!")
        //console.log(e.target.parentNode.childNodes)
        var checkMark = e.target.parentNode;
        checkMark.remove();
    } else {

        //console.log('not the right area!')
        //console.log( e.target.className);
        //console.log(CancelEvent);

    }

})




