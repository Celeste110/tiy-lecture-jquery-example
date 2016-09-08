$(function () {

    $("#addThingButton").click(function () {
        addThing();
    });

    $("form").submit(function(){
        addThing();
        return false;
    });

    $("li a").on("onclick", function(){
        alert("sfdafdsafsdafsda");
    });

});

function showCountDown(countDown){
    $("#counter").text(countDown);
}

function addThing(){
    var thing = $("#thing").val().trim();

    //$("#counter").text("3").delay(1000).text("2");
    var countDown = 3;
    showCountDown(countDown);
    var timer = setInterval(function(){
        countDown--;
        showCountDown(countDown);

        if(countDown == 0){
            actuallyDoTheAddThingBit(thing);
            clearInterval(timer);
        }
    }, 1000);

}

function actuallyDoTheAddThingBit(thing){
    if(thing) {
        var a = $("<a href='javascript://'>X</a>");
        a.click(function(){
            $(this).parent().fadeOut(2000, function(){
                $(this).remove();
            });
            //$(this).parent().remove();
        });

        var li = $("<li>" + thing + " </li>");

        li.append(a);

        $("ul").append(li);

        $("#thing").val("");
        $("#thing").focus();

        $("#counter").text("");
    }
}