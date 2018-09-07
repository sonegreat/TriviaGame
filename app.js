
var time=15;
var interval = setInterval(function(){
    document.getElementById("time").innerHTML=time;
    time--;
    if (time ===0){
        clearInterval(interval);
        document.getElementById("time").innerHTML="times up";
        submitAnswer();
    }

},
1000
);



var submitAnswer = function() {
   var questions = [document.getElementById("q1"),
                    document.getElementById("q2"),
                    document.getElementById("q3")]
    //var radios = document.getElementsByName("choice");
    //var questions = ["q1", "q2", "q3"]
    var val= ""
    var checked = false;
    var userAnswer;
    var correct=0;
    var incorrect=0;
    var msg = document.getElementById("result").innerHTML;
    

    

    console.log(questions);

    for(var h=0; h < questions.length; h++){
console.log(questions[h].innerHTML);
        var radios = document.getElementsByName([h]+"_choice");
        
        console.log(radios[h].value);
    
    
    for( var i=0; i < radios.length; i++ ) {
       if(radios[i].checked) {
        checked = true;
         userAnswer = radios[i].value;
       }
    }

        //if(questions[h].checked){
          //  checked = true;
            //userAnswer = questions[h].value;
        //}
    
    
    // if user click submit button without selecting any option, alert box should be say "please select choice answer".
    if(!checked) {
      // alert("please select choice answer");
      
      // Get DOM item by id "msg-container". Change its innerHTML property.
      document.getElementById("result").innerHTML = "please select choice answer";
    }
    // Correct answer
    else if(userAnswer === [h]+"_answer") {
       // alert("Answer is correct!");
      document.getElementById("result").innerHTML = "Answer is correct!";
      
      correct++;

    console.log(this)
    }
    // incorrect answer
    else {
       // alert("Answer is wrong!");
      document.getElementById("result").innerHTML = "Answer is wrong!";
      incorrect++;
    }
    // display the hidden msg.
    //document.getElementById("result").style.display = "inline";
    
    // after 4 seconds, hide the message
    setTimeout(function() {
        document.getElementById("result").style.display = "none";
    }, 4000 );

    
    $("#c-span").text(correct);
    $("#i-span").text(incorrect);
      
}
    
}

