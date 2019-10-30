$(document).ready(function () {
    $(".questionForm").hide();
    let timer= 50;
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
        $(".questionForm").show();
        
    });



});