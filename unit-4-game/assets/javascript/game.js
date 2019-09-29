
var randomResult;
var lost = 0;
var win = 0;
var previous = 0;

// setters
// getters



var resetAndStartGame = function () {

    $(".crystals").empty();

    var images =
        [
            'https://d2f0ora2gkri0g.cloudfront.net/b4/31/b4310115-5a45-46a3-8b46-52785bd0a777.png',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNv3Yb_VvVUo16xDL1_MHTGNFsCLBONlhZontvIkPr_5dDM8MN2w',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0xYtyBN9RrE9k4cjZglnJAWjYUoDvS5IaXYpca4lZu6tjq1vtMw',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTymSzHOvcaOSf98FkjLKs5cIQ6Y4_j1AN6NMvnnBKm930Qohaquw'
        ];

    randomResult = Math.floor(Math.random() * 101) + 19;

    $("#result").html('Random Result: ' + randomResult);
    for (var i = 0; i < 4; i++) {

        var random = Math.floor(Math.random() * 11) + 1;


        console.log(random);



        var crystal = $("<div>");


        crystal.attr({
            "class": 'crystal',
            "data-random": random
        });
        crystal.css({
            "background-image":"url('" + images[i] + "')",
            "background-size": "cover"
        })

        $(".crystals").append(crystal);

    }
    
}
resetAndStartGame();

var reset = function () {


}

$(document).on("click", ".crystal", function () {

    var num = parseInt($(this).attr('data-random'));

    previous += num;

    $("#previous").html("Score: " + previous);


    console.log(previous);

    if (previous > randomResult) {
        console.log("you lost");
        lost--;

        $("#lost").html("Losses: " + lost);

        previous = 0;

        $("#previous").html("Score: " + previous);

        resetAndStartGame();
    }
    else if (previous === randomResult) {
        console.log("winner winner chicken dinner");
        win++;
        $("#win").html("Wins: " + win);

        previous = 0;

        $("#previous").html("Score: " + previous);

        resetAndStartGame();
    }




});
