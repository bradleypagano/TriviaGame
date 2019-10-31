$(document).ready(function () {
    $(".questionForm").hide();
    $("#submitButtonDiv").hide();
    $(".answers").hide();
    let timer= 30;
    let gameTime;
    function asnwerCheck(){
        let correct = 0;
        let incorrect = 0;
        const answers = $(':radio[name=driver]:checked');
        for(i = 0; i < answers.length; i++){
            if (answers[i].value == "right"){
                correct++;
            } else{
                incorrect++;
            };
        };
        $("#correct").text("Right: " + correct);
        $("#incorrect").text("Wrong: " + incorrect);
    };
    function countDown(){
        timer--;
        $("#emptyDiv").html("<h5>"+"Seconds Remaining: "+ timer + "</h5>");
        if(timer === 0){
            $("#emptyDiv").empty();
            $(".questionForm").empty();
            $("#submitButtonDiv").empty();
            asnwerCheck();
            $(".answers").show();
            clearInterval(gameTime);
        };
    };

    $(".initiate").on("click", function () {
        $("#emptyDiv").empty();
        $("#emptyDiv").append("<h5>"+"Seconds Remaining: "+ timer + "</h5>");
        gameTime = setInterval(countDown,1000);
        $(".questionForm").show();
        $("#submitButtonDiv").show();
        
    });
    $(".done").on("click", function () {
        $("#emptyDiv").empty();
        $(".questionForm").empty();
        $("#submitButtonDiv").empty();
        asnwerCheck();
        $(".answers").show();
        clearInterval(gameTime);
    });



});