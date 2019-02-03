$(document).ready(function() {
    $("#him").hide();
    $("#two").hide();
    $("#three").hide();
    $("#one").click(function() {
        $(this).fadeOut(2000);
        $("#two").delay(2000).fadeIn(2000);
    });

    $("#two").click(function() {
        $(this).fadeOut(2000);
        $("#three").delay(2000).fadeIn(2000);
    });


    $("#three").click(function() {
        $(this).fadeOut(2000);
        $("#one").delay(2000).fadeIn(2000);
    });



    var i = 0;
    // while(i < 256)

    $(".box").fadeOut(2000);

});

$("body").keydown(function(e) {
    if(e.keyCode === 32) { 
        $("#him").show();
        console.log("im still here");
    }
    console.log(e.which);
});