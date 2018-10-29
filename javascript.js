// The variables of stage 1
var liveLeft ;
var playing = false;
var score;
var fruits = ['apple_1e8u1T', 'blackberry_6oWOLV', 'banana_6cdZC1', 'cherry_6nVY4b', 'coconut_97k3sb', 'grape_5Xnl8f', 'jackfruit_1rxHXt', 'lemon_03HjVF', 'lime_4GlEZI', 'mango_9N759Q', 'orange_0OHXv3', 'melon_7Jwnka', 'papaya_09ewxR', 'peach_8pOqZW', 'pineapple_3WCJG2', 'rasberry_620MbM', 'strawberry_44KLr1', 'pitaya_3mQ0vM', 'tomato_7dWxtx', 'durian_3zx2N0', 'carrot_2EOIRh', 'broccoli_8laV5x', 'asparagus_0ZuVdD', 'spinach_9af6jV', 'sock_8GYusW', 'bomb_3rdKRe', 'heart_4wc2Ef'];

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

function start() {
    $("#fruit1").show();
    chooseItems(); //Choose random fruits and items
    // Choose the random place the fruit will appeared
    $("#fruit1").css({'left':Math.floor((Math.random() * 520) + 0), 'top':-10});
}

// Start sending fruit
function chooseItems() {
    // Fruit that kid love to eat (+1) 1-17
    $("#fruit1").attr('src', 'image/fruits/'+ fruits[Math.floor((Math.random() * 27) + 0)] +'.png');
    
    
    // Vegetables that kid do not like (-1) --18+23
    
    
    // Pitaya (+10) (Extra rare and fast, appear 5 times in 120 minute) --17
    
    // Sock(-3) (Appear 15 times in 120 minutes) --24
    
    // Bomb(lose right away) (Appear 10 times in 120 minutes) --25
    
    // Hearts(extra lives) (Appear 3 times in 120 minutes) --26
    
    
    
    
    // Style for the class of the image
    $(".items").width("70px");
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