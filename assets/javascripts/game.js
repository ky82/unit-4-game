    $(document).ready(function(){
    var crystal = {
    blue:
    {
        name: "Blue",
        value: 0
    },
    green:
    {
        name:"Green",
        value:0
    },
    red:
    {
        name:"Red",
        value:0  
    },
    yellow:
    {
        name:"Yellow",
        value:0
    }
    };
    //Scores 
    var currentScore = 0;
    var targetScore = 0;
    // Win and losses
    var winCount = 0;
    var lossCount =0;
    //Helper function for getting random numbers
    var getRandom = function(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    //Starts the Game and also restarts the gane
    var startGame = function(){
    //Reset the current score.
    currentScore = 0;
    //Set a new Target score (between 19 and 120)
    targetScore = getRandom(19, 120);
    //Set different value for each of the crystals (between 1 and 12)
    crystal.blue.value = getRandom(1,12);
    crystal.green.value = getRandom(1,12);
    crystal.red.value = getRandom(1,12);
    crystal.yellow.value = getRandom(1,12);

    $("#yourScore").html(currentScore);
    $("#targetScore").html(targetScore);
    //Testing console
    console.log("-------------------------------");
    console.log("Target Score: " + targetScore);
    console.log("Blue: " + crystal.blue.value);
    console.log("-------------------------------");
    console.log("Blue: " + crystal.green.value);
    console.log("-------------------------------");
    console.log("Blue: " + crystal.red.value);
    console.log("-------------------------------");
    console.log("Blue: " + crystal.yellow.value);
    }
    //Respond to click on the Crystals.
    var addValues = function(crystal) {
    //Change Current Score   
    currentScore = currentScore + crystal.value;
    //Change HTML to reflect changes in current score.
    $("#yourScore").html(currentScore);
    //Call the checkwin Function
    checkwin();
    }
    //check if You Won or Lost and Reset the Game.
    var checkwin = function(){
    if(currentScore > targetScore){
    alert("You lost!");
    console.log("You lost!");
    //Add to loss counter.
    lossCount++;
    //Change loss count Html
    $("#lossCount").html(lossCount);
    //Restart the game  
    startGame();
    }
    else if(currentScore == targetScore){
    alert("Congratulations! You Won");
    console.log("Congratulations! You won");
    //Add to win counter.
    winCount++;
    //Change win count Html
    $("#winCount").html(winCount);
    //Restart the game 
    startGame();
    }
    }
    //Starts the Game
    startGame();
    $("#blue").click(function(){
    addValues(crystal.blue);
    });
    $("#green").click(function(){
    addValues(crystal.green);
    });
    $("#red").click(function(){
    addValues(crystal.red);
    });
    $("#yellow").click(function(){
    addValues(crystal.yellow);
    });
    });