// The variables of stage 1
var liveLeft ;
var timeRemaining;
var playing = false;
var score;
var actionTime;
var fruits = ['apple_1e8u1T', 'pitaya_3mQ0vM', 'banana_6cdZC1', 'cherry_6nVY4b', 'coconut_97k3sb', 'grape_5Xnl8f', 'jackfruit_1rxHXt', 'lemon_03HjVF', 'lime_4GlEZI', 'mango_9N759Q', 'orange_0OHXv3', 'melon_7Jwnka', 'papaya_09ewxR', 'peach_8pOqZW', 'pineapple_3WCJG2', 'rasberry_620MbM', 'strawberry_44KLr1', 'tomato_7dWxtx', 'durian_3zx2N0', 'carrot_2EOIRh', 'broccoli_8laV5x', 'asparagus_0ZuVdD', 'spinach_9af6jV', 'sock_8GYusW', 'bomb_3rdKRe', 'blackberry_6oWOLV', 'heart_4wc2Ef'];

// The second stage of this project
var stop = true;

var fruitN1;
var height1;
var pos1;
var step1;
var action1;

var timeout2;
var fruitN2;
var height2;
var pos2;
var step2;
var action2;

var timeout3;
var fruitN3;
var height3;
var pos3;
var step3;
var action3;

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
            
            stop = false;
            
            // Create random fruit
            start1();
            
            // Make the first time out for the left side
            timeout2 = setTimeout(function(){
                start2();
            }, 3000);
            
             // Make the first time out for the left side
            timeout3 = setTimeout(function(){
                start3();
            }, 5000);
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

// Start the game items drop from the top
function start1() {
    
    $("#fruit1").show();
    movingImages("#fruit1");
    
    //Move fruit down one step every 10ms
    action1 = setInterval(function(){
        height1 += step1;
        $("#fruit1").css('top', height1);
        //Is the fruit too low?
        if (height1 > 400) {
            //Yes
            // Reduce score and live when you miss neceessary item
            if (fruitN1<17 || fruitN1>24) {
                if (stop == false) {
                    score -= 1;   
                }
                $("#scorevalue").html(score);
                // Is the plyer still have lives left
                if (liveLeft > 1) {
                    movingImages("#fruit1");
                    // Reduce the live left
                    liveLeft -= 1;
                    addHearts();// Redraw the heart bar
                }
                else { // Game over
                    gameOver();
                }   
            } else { // If not, continue playing
                movingImages("#fruit1");
            }
        }
    }, 10);
}

// Start the game items drop from the left
function start2() {
    
    $("#fruit2").show();
    movingImages("#fruit2");
    
    //Move fruit down one step every 10ms
    action2 = setInterval(function(){
        height2 += step2;
        $("#fruit2").css('top', height2);
        //Is the fruit too low?
        if (height2 > 400) {
            //Yes
            // Reduce score and live when you miss neceessary item
            if (fruitN2<17 || fruitN2>24) {
                if (stop == false) {
                    score -= 1;   
                }
                $("#scorevalue").html(score);
                // Is the plyer still have lives left
                if (liveLeft > 1) {
                    movingImages("#fruit2");
                    // Reduce the live left
                    liveLeft -= 1;
                    addHearts();// Redraw the heart bar
                }
                else { // Game over
                    gameOver();
                }   
            } else { // If not, continue playing
                movingImages("#fruit2");
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
    stopImages("#fruit1");
}

// Running images
function movingImages(id) {
    if (id == "#fruit1") {
        fruitN1 = Math.floor((Math.random() * 27) + 0);
        chooseItems(id, fruitN1); //Choose random fruits and items
                
        // Choose the random place the fruit will appear
        height1 = -200; // The starting height
        pos1 = Math.floor((Math.random() * 520) + 0); // The starting position
        $(id).css({'left':pos1, 'top':height1});
    
        // generate random step
        step1 = Math.floor((Math.random() * 5) + 1);
    }
    else if (id == "#fruit2") {
        fruitN2 = Math.floor((Math.random() * 27) + 0);
        chooseItems(id, fruitN2); //Choose random fruits and items
                
        // Choose the random place the fruit will appear
        height2 = -200; // The starting height
        pos2 = Math.floor((Math.random() * 520) + 0); // The starting position
        $(id).css({'left':pos2, 'top':height2});
    
        // generate random step
        step2 = Math.floor((Math.random() * 5) + 1);
    }
}

// Stop the game image running;
function stopImages(id) {
    if (id == "#fruit1") {
        clearInterval(action1);
    }
    else if (id == "#fruit2") {
        clearInterval(action2);
    }
    $(id).hide();
}

// Start sending fruit
function chooseItems(id, no) {
    $(id).attr('src', 'image/fruits/'+ fruits[no] +'.png');

    // Style for the class of the image
    $(".items").width("70px");
}

// Fruits after sliced
function explodeFruits(id) {
    if (id == "#fruit1") {
        clearInterval(action1);
        // Sliced fruits
        $(id).hide("explode", 200);
    
        // Get new fruits
        setTimeout(start1, 500);
    }
    else if (id == "#fruit2") {
        clearInterval(action2);
        $(id).hide("explode", 200);

        setTimeout(start2, 500);
    }
}


// Slice the fruit
    // Explode fruit
    // Play sound exploded fruit
    // Increase the point
$("#fruit1").mouseover(function(){
    
    // Fruit that kid love to eat (+1) 0-16
    if (fruitN1 >=0 && fruitN1 <= 16) {
        // Inxrease score.
        score += 1;
        $("#scorevalue").html(score);
        $("#audio")[0].play();    
    } 
    // Vegetables that kid do not like (-1) --17+22
    else if (fruitN1 >=17 && fruitN1 <= 22) {
        // Decrease score.
        score -= 1;
        $("#scorevalue").html(score);
        $("#audio1")[0].play();    
    } 
    // Sock(-3) (Appear 15 times in 120 minutes) --23
    else if (fruitN1 == 23) {
        // Decrease score.
        score -= 3;
        $("#scorevalue").html(score);
        $("#audio1")[0].play();    
    } 
    // Bomb(lose right away) (Appear 10 times in 120 minutes) --24
    else if (fruitN1 == 24) {
        // Decrease score.
        score -= 10;
        $("#scorevalue").html(score);
        $("#audio2")[0].play(); 
        
        stop = true;
        liveLeft = 0;
        gameOver()
    } 
    // Blackberry (+10) (Extra rare and fast, appear 5 times in 120 minute) --25
    else if (fruitN1 == 25) {
        // Increase score.
        score += 10;
        $("#scorevalue").html(score);
        $("#audio3")[0].play(); 
    } 
    // Hearts(extra lives) (Appear 3 times in 120 minutes) --26
    else if (fruitN1 == 26) {
        // Decrease score.
        if (liveLeft < 6) {
            liveLeft += 1;
            addHearts();
        }
        $("#audio4")[0].play(); 
    }
    
    // Start the next items
    explodeFruits("#fruit1");
});


$("#fruit2").mouseover(function(){
    
    // Fruit that kid love to eat (+1) 0-16
    if (fruitN2 >=0 && fruitN2 <= 16) {
        // Inxrease score.
        score += 1;
        $("#scorevalue").html(score);
        $("#audio")[0].play();    
    } 
    // Vegetables that kid do not like (-1) --17+22
    else if (fruitN2 >=17 && fruitN2 <= 22) {
        // Decrease score.
        score -= 1;
        $("#scorevalue").html(score);
        $("#audio1")[0].play();    
    } 
    // Sock(-3) (Appear 15 times in 120 minutes) --23
    else if (fruitN2 == 23) {
        // Decrease score.
        score -= 3;
        $("#scorevalue").html(score);
        $("#audio1")[0].play();    
    } 
    // Bomb(lose right away) (Appear 10 times in 120 minutes) --24
    else if (fruitN2 == 24) {
        // Decrease score.
        score -= 10;
        $("#scorevalue").html(score);
        $("#audio2")[0].play(); 
        
        stop = true;
        liveLeft = 0;
        gameOver()
    } 
    // Blackberry (+10) (Extra rare and fast, appear 5 times in 120 minute) --25
    else if (fruitN2 == 25) {
        // Increase score.
        score += 10;
        $("#scorevalue").html(score);
        $("#audio3")[0].play(); 
    } 
    // Hearts(extra lives) (Appear 3 times in 120 minutes) --26
    else if (fruitN2 == 26) {
        // Decrease score.
        if (liveLeft < 6) {
            liveLeft += 1;
            addHearts();
        }
        $("#audio4")[0].play(); 
    }
    
    // Start the next items
    explodeFruits("#fruit2");
});