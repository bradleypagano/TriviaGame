$(document).ready(function () {
    const correctAnswers = ["Lewis Hamilton", "Ayrton Senna", "Alain Prost", "Sebastian Vettel", "Jenson Button", 
    "Fernando Alonso", "Michael Shumacher", "Pirelli", "Spa", "Brazil"]   
    //let timer= 60;
    //let gameTime = setInterval(countDown(),1000);
    //function countDown(){
        //timer--;
        //$("#gameTimer").text(gameTime);
        //if(timer === 0){
            //$("#emptyDiv").empty();
            //$("#emptyDiv").append("<h1>YOU WIN!!!!</h1>");
            //clearInterval(gameTime);
        //};
    //};

    $("button").on("click", function () {
        $("#emptyDiv").empty();
        //$("#emptyDiv").append("<h5>"+"Seconds Remaining: "+ timer + "</h5>").attr("id", "gameTimer");
        //countDown();
        $("#enptyDiv").append("<h2>Who won the F1 Driver Title in 2008?</h2>")
        $("#emptyDiv").append("<form>").attr("id","formOne");
        $("#formOne").append("<div>").addClass("form-check form-check-inline").attr("id", "choiceOne");
        $("#choiceOne").append("<input>").addClass("form-check-input").attr("type", "radio").attr("name","inlineRadioOptions").attr("id","inlineRadio1").attr("value", "option1");
        $("#choiceOne").append("<label>Lewis Hamilton</label>").addClass("form-check-label").attr("for","inlineRadio1");
        $("#formOne").append("<div>").addClass("form-check form-check-inline").attr("id", "choiceOne");
        $("#choiceOne").append("<input>").addClass("form-check-input").attr("type", "radio").attr("name","inlineRadioOptions").attr("id","inlineRadio2").attr("value", "option1");
        $("#choiceOne").append("<label>Michael Shumacher</label>").addClass("form-check-label").attr("for","inlineRadio2");
        $("#formOne").append("<div>").addClass("form-check form-check-inline").attr("id", "choiceOne");
        $("#choiceOne").append("<input>").addClass("form-check-input").attr("type", "radio").attr("name","inlineRadioOptions").attr("id","inlineRadio3").attr("value", "option1");
        $("#choiceOne").append("<label>Dario Francini</label>").addClass("form-check-label").attr("for","inlineRadio3");
        $("#formOne").append("<div>").addClass("form-check form-check-inline").attr("id", "choiceOne");
        $("#choiceOne").append("<input>").addClass("form-check-input").attr("type", "radio").attr("name","inlineRadioOptions").attr("id","inlineRadio4").attr("value", "option1");
        $("#choiceOne").append("<label>Jenson Button</label>").addClass("form-check-label").attr("for","inlineRadio4");
    });



});