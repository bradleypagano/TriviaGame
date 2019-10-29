$(document).ready(function () {
    let timer= 120;
    const correctAnswers = ["Lewis Hamilton", "Ayrton Senna", "Alain Prost", "Sebastian Vettel", "Jenson Button", "Fernando Alonso", "Michael Shumacher"
                            ]
    function endScreen(){
        $("#emptyDiv").empty();
        $("#emptyDiv").append("<h1>You Win!!!</h1>");
    };
   
    $("button").on("click", function () {
        $("#emptyDiv").empty();
        $("#emptyDiv").append("<h5>"+"Time Remaining: "+ timer + "</h5>").attr("id", "timeLeft");
        setInterval(() => {
            timer--;
            $("h5").text("Time Remaining: " + timer);
            if(timer === 0){
                clearInterval();
                endScreen();
            };
        },1000);
        $("emptyDiv").append()
    });



});