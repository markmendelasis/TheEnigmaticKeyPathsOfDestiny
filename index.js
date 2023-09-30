var play = $(".button-89");

play.click(function () {
    $("#startButton").css("display", "none")
    $("#beginning").css("display", "block");
});


$(".buttonOption").click(function () {
  var classOfButton = $(this).attr("id");
  console.log(classOfButton);


  switch(classOfButton){

    // Amelia decides to enter the mansion.

    case "firstOption0":
        $("#beginning").css("display", "none");
        $("#firstOption").css("display", "block");
       
    break;

    // Amelia decides to search for more information.

    case "secondOption0":
        $("#beginning").css("display", "none");
        $("#secondOption").css("display", "block");

    break;

    // Amelia decides to leave the town and forget about the key.

    case "thirdOption0":
        $("#beginning").css("display", "none");
        $("#thirdOption").css("display", "block");

    break;



    case "firstChoice":
        $("#firstOption").css("display", "none");
        $("#firstOption1").css("display", "block");

    break;

    case "secondChoice":
        $("#firstOption").css("display", "none");
        $("#secondOption1").css("display", "block");

    break;

    case "firstChoice2":
        $("#secondOption").css("display", "none");
        $("#firstOption2").css("display", "block");

    break;

    case "secondChoice2":
        $("#secondOption").css("display", "none");
        $("#secondOption2").css("display", "block");

    break;






    case "firstChoice3":
        $("#thirdOption").css("display", "none");
        $("#firstOption3").css("display", "block");

    break;
    
    case "secondChoice3":
        $("#thirdOption").css("display", "none");
        $("#secondOption3").css("display", "block");

    break;







    default:
    }








});

