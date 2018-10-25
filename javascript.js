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
            playing = true;
            score = 0;
            $("#scorevalue").html(score);
            
            // show the "Lives box"
//            $("#lives").show();
            $("#lives").css('visibility', 'visible');
            liveLeft = 3;
            addHearts();
        }
    });
});

function addHearts() {
    for(i=0; i<liveLeft ; i++) {
        $("#lives").append(" X ");
    }
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