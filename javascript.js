// The variables of stage 1
var liveLeft ;
var timeRemaining;
var playing = false;
var score;
var step;
var action;
var actionTime;
var fruits = ['apple_1e8u1T', 'pitaya_3mQ0vM', 'banana_6cdZC1', 'cherry_6nVY4b', 'coconut_97k3sb', 'grape_5Xnl8f', 'jackfruit_1rxHXt', 'lemon_03HjVF', 'lime_4GlEZI', 'mango_9N759Q', 'orange_0OHXv3', 'melon_7Jwnka', 'papaya_09ewxR', 'peach_8pOqZW', 'pineapple_3WCJG2', 'rasberry_620MbM', 'strawberry_44KLr1', 'tomato_7dWxtx', 'durian_3zx2N0', 'carrot_2EOIRh', 'broccoli_8laV5x', 'asparagus_0ZuVdD', 'spinach_9af6jV', 'sock_8GYusW', 'bomb_3rdKRe', 'blackberry_6oWOLV', 'heart_4wc2Ef'];

var fruitN1;

// Starting function
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
            
            $("#over").hide();
            
            // show the "Lives box"
//            $("#lives").show();
            $("#lives").css('visibility', 'visible');
            liveLeft = 3;
            addHearts();
            
            // Add the time inside the game
            timeRemaining = 120;
            $("#time").show();
            $("#timeLeft").html(timeRemaining);
            startCounting();
            
            // Create random fruit
            start();
        }
    });
});

// Start the counting clock for the game
function startCounting(){
    actionTime = setInterval(function(){
        timeRemaining -= 1;
        $("#timeLeft").html(timeRemaining);
        if (timeRemaining <= 0) {
            gameOver();
        }
    }, 1000);
}

// Stop the counting clock when the game is end 
function stopCounting() {
    clearInterval(actionTime);
}

// Give the heart image on the health bar
function addHearts() {
    $("#lives").empty();
    for(i=0; i<liveLeft ; i++) {
        $("#lives").append('<img src="image/heart.gif" class="life">');
    }
}

// Start the game items drop
function start() {
    $("#fruit1").show();
    chooseItems(); //Choose random fruits and items
    // Choose the random place the fruit will appeare
   
    var height = -90;
    var pos = Math.floor((Math.random() * 520) + 0);
    $("#fruit1").css({'left':pos, 'top':height});
    
    // generate random step
    step = Math.floor((Math.random() * 3) + 1);
    
    //Move fruit down one step every 10ms
    action = setInterval(function(){
        height += step;
//        $("#fruit1").css('top', $("#fruit1").position().top+step);
        $("#fruit1").css('top', height);
        //Is the fruit too low?
        if (height > 400) {
            //Yes
            // Reduce score when you miss neceessary item
            score -= 1;
            $("#scorevalue").html(score);
            // Is the plyer still have lives left
            if (liveLeft > 1) {
                chooseItems(); //Choose random fruits and items
                // Choose the random place the fruit will appear
   
                height = -190; // The starting height
                pos = Math.floor((Math.random() * 520) + 0); // The starting position
                $("#fruit1").css({'left':pos, 'top':height});
    
                // generate random step
                step = Math.floor((Math.random() * 5) + 1);
                
                // Reduce the live left
                liveLeft -= 1;
                addHearts();// Redraw the heart bar
            }
            else { // Game over
                gameOver();
            }
        }
    }, 10);
}

// When the game is over
function gameOver() {
    $("#over").show();
    $(".result").html(score);
    $("#lives").css('visibility', 'hidden');
    $("#time").hide();
    stopCounting();
    stopImages();
}

// Stop the game image running;
function stopImages() {
    clearInterval(action);
    $("#fruit1").hide();
}

// Start sending fruit
function chooseItems() {
    // Fruit that kid love to eat (+1) 1-17
    fruitN1 = Math.floor((Math.random() * 27) + 0);
    $("#fruit1").attr('src', 'image/fruits/'+ fruits[fruitN1] +'.png');
    
    
    // Vegetables that kid do not like (-1) --18+23
    
    
    // Blackberry (+10) (Extra rare and fast, appear 5 times in 120 minute) --17
    
    // Sock(-3) (Appear 15 times in 120 minutes) --24
    
    // Bomb(lose right away) (Appear 10 times in 120 minutes) --25
    
    // Hearts(extra lives) (Appear 3 times in 120 minutes) --26
    
    
    
    
    // Style for the class of the image
    $(".items").width("70px");
}


// Slice the fruit
    // Explode fruit
    // Play sound exploded fruit
    // Increase the point
$("#fruit1").mouseover(function(){
    score += 1;
    $("#scorevalue").html(score);
    
});