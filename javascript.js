// The variables of stage 1
var liveLeft ;
var playing = false;
var score;

$(function() {
    // Click the "Start" button
    $("#startReset").click(function() {
        // Are we playing?
        // Yes
        if (playing == true) {
            // reload page
            location.reload();
        } else {
            // No
            // change the "Start" button to "Reset" button
            $("#startReset").html("Reset Game");
            playing = true;
            score = 0;
            $("#scorevalue").html(score);
            
            // show the "Lives box"
//            $("#lives").show();
            $("#lives").css('visibility', 'visible');
            liveLeft = 3;
            addHearts();
            
            // Create random fruit
            start();
        }
    });
});

// Give the heart image on the health bar
function addHearts() {
    for(i=0; i<liveLeft ; i++) {
        $("#lives").append('<img src="image/heart.gif" class="life">');
    }
}

// Start sending fruit
function start() {
    // Fruit that kid love to eat (+1)
    $("#screen").append('<img src="image/fruits/apple_1e8u1T.png" class="items">');
    
    // Vegetables that kid do not like (-1)
    $("#screen").append('<img src="image/fruits/asparagus_0ZuVdD.png" class="items">');
    
    // Pitaya (+10) (Extra rare and fast, appear 5 times in 120 minute)
    
    // Sock(-3) (Appear 15 times in 120 minutes)
    
    // Bomb(lose right away) (Appear 10 times in 120 minutes)
    
    // Hearts(extra lives) (Appear  times in 120 minutes)
    
    // Style for the class of the image
    $(".items").width("40px");
}

// Click the "Start" button
    // Are we playing?
        // Yes
            // reload page
        // No
            // show the "Lives box"
            // change the "Start" button to "Reset" button
            // Create random fruit
            // Define a random step
            // Move fruit down one step every sec
                // Is the fruit too low?
                    // No
                        // Then keep going down
                    // Yes
                        // Is there is still lives
                            // No
                                // Show game over
                                // Change "Reset" button to "Start"
                            // Yes
                                // Remove 1 heart
                                // Continue create fruit

// Slice the fruit
    // Explode fruit
    // Play sound exploded fruit
    // Increase the point