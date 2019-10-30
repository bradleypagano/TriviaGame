$(document).ready(function () {
    let correct = 0;
    let incorrect = 0;   
    let timer= 3;
    let gameTime;
    function countDown(){
        timer--;
        $("#emptyDiv").html("<h5>"+"Seconds Remaining: "+ timer + "</h5>");
        if(timer === 0){
            $("#emptyDiv").empty();
            $("#emptyDiv").html("<h1>YOU WIN!!!!</h1>");
            clearInterval(gameTime);
            console.log("hey there");
        };
    };

    $("button").on("click", function () {
        $("#emptyDiv").empty();
        $("#emptyDiv").append("<h5>"+"Seconds Remaining: "+ timer + "</h5>");
        gameTime = setInterval(countDown,1000);
        
    });



});