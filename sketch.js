///P5 + P5.MIN + P5.PLAY + P5.SOUND LIBRARY USED

function setup(){
    createCanvas(1800, 500);
    rectMode(CENTER);
    textAlign(CENTER);
    imageMode(CENTER); //will center everything
}

function draw (){
    keyPressed(); //so you can move with keyboard
    keyTyped(); //so you can jump with keyboard
    gravity(); //so you can jump 

    //what function to run = what level
    if(level == 0){ //when the game is not started yet
        splash();
    }

    if(level == 1){ //game starts
        game();
    }

    if(level == 2){ //when game is completed
        winScreen();
    }

    if(level == 3){ //when you lose game because the zombies hit you or you don't have time left
        loseScreen();
    }

    if(level == 4){ //when you lose game because you don't have enough fuel 
        loseScreen2();
    }

    if(mouseIsPressed == true){ //if you click, you start the game
        level = 1;
    }

    if(level == 1){ //timer starts when the game starts
        if (frameCount % 60 == 0 && timer > 0) {
            timer --;
        }
    }
} 

//start screen (level == 0)
function splash(){
    //sky blue
    background('#063859');

    //grass
    noStroke();
    fill('#42611B');
    rect(width/2, 450, width, 100);

    //window frame
    noFill();
    stroke(0);
    strokeWeight(15);
    rect(width/2, height/2, width, height);

    //title
    textFont(font);
    fill(255);
    stroke(0);
    strokeWeight(7);
    textSize(100);
    text('Airfield Walkers', width/2, 150);
    textFont(fontSmall);
    textSize(30);
    text('By Evi Vermeêren, 1IMDA', width/2, 225);

    //instructions
    textSize(20);
    text('How to play:', width/2, 250);
    text('Use arrow keys to move right and left & press space bar to jump', width/2, 270);
    text('Watch out for the zombies and the enemy planes!!', width/2, 290);
    text('Collect enough fuel and get to the plane before the time runs out!', width/2, 310);
    text('Click the screen to start & HAVE FUN!', width/2, 350);
}

//game == level 1
function game(){
    //appearance of game
    image(bgi, width/2, height/2, width, height);

    //window frame
    noFill();
    stroke(0);
    strokeWeight(15);
    rect(width/2, height/2, width, height);

    //scoreboard left
    textFont(fontSmall);
    fill(255);
    stroke(0);
    strokeWeight(2);
    textSize(20);
    text('Fuel:', 70, 50);
    enoughFuel(eX, eY);
    strokeWeight(1);

    if (score<3){ //display of the score/amount of fuel + comment
        textAlign(CORNER);
        textFont(fontSmall);
        fill(255);
        textSize(20);
        text('Get fuel so you can get away with your plane!', 45, 90);
    } else if (score < 6){
        textAlign(CORNER);
        textFont(fontSmall);
        fill(255);
        textSize(20);
        text('Not there yet, get more fuel!', 45, 90);
    } else if (score <9){
        textAlign(CORNER);
        textFont(fontSmall);
        fill(255);
        textSize(20);
        text('A little bit more fuel!', 45, 90);
    } else if (score >=9){
        textAlign(CORNER);
        textFont(fontSmall);
        fill(255);
        textSize(20);
        text('You have enough fuel, get to the plane!', 45, 90);
    }
 
    if(score>=3){ //on the left is your gass tank, it fills up when you get more fuel
        fill('red');
        rect(eX +2, eY + 26, 17, 13);
    }
    if(score>=6){
        fill('red');
        rect(eX +2, eY + 13, 17, 13);
    }
    if(score>=9){
        fill('red');
        rect(eX +2, eY + 0, 17, 13);
    }

    //amount of lives (left)
    textAlign(CENTER);
    textFont(fontSmall);
    fill(255);
    stroke(0);
    strokeWeight(2);
    textSize(20);
    text('Health:', 180, 50);
    noFill();
    rect(225, 35, 100, 20);

    if(lives>=5){ //on the left is your gass tank, it fills up when you get more fuel
        fill('red');
        rect(225, 35, 100, 20)
    } else if(lives==4){
        fill('red');
        rect(225, 35, 80, 20)
    } else if(lives==3){
        fill('red');
        rect(225, 35, 60, 20)
    } else if(lives==2){
        fill('red');
        rect(225, 35, 40, 20)
    }else if(lives==1){
        fill('red');
        rect(225, 35, 20, 20)
    }

    //timer (right)
    textFont(fontSmall);
    fill(255);
    stroke(0);
    strokeWeight(2);
    textSize(20);
    text('Time left:', 1620, 50);
    text(timer, 1720, 50); //display timer

    //draw airplane that you need to win (right)
    strokeWeight(2);
    airplane(pX, pY);
    if(pX > 1650){
        pX-=2;
    }

    //draw platforms with class
    for(let i = 0; i < platformen.length; i++){
        platformen[i].display();
        platformen[i].move();
        if(p1X >= platformen[i].x-platformen[i].w/2 && p1X <= platformen[i].x+platformen[i].w/2 && p1Y + pHeight >= platformen[i].y && p1Y + pHeight <= platformen[i].y + platformen[i].h && jump == false){
            p1Y = p1Y; //don't fall
            velocity = 0; //no speed, no falling
            jumpCounter = 0; //so you can jump again
        }
    }

    //draw player with function
    character(p1X, p1Y, 255);

    //draw fuel with class
    for(let i = 0; i <fuel.length; i++){
        fuel[i].display();
        fuel[i].move();
        if(p1X >= fuel[i].x-fuel[i].w/2 && p1X <= fuel[i].x+fuel[i].w/2 && p1Y + pHeight >= fuel[i].y-fuel[i].h/2 && p1Y <= fuel[i].y + fuel[i].h/2){
            //character hits fuel
            score = score + 1; //get fuel
            fuel[i].x = -1000; //move fuel off screen
            fuelSound.play();
        }
    }

    //draw enemy planes with class
    for(let i = 0; i <enemyplane.length; i++){
        enemyplane[i].display();
        enemyplane[i].move();
        if(p1X >= enemyplane[i].x-enemyplane[i].w/2 && p1X <= enemyplane[i].x+enemyplane[i].w/2 && p1Y + pHeight >= enemyplane[i].y-enemyplane[i].h/2 && p1Y <= enemyplane[i].y + enemyplane[i].h/2){
            //character hits plane
            lifeSound.play(); //sound plays
            lives = lives - 1; //lose life
            enemyplane[i].x = -1000; //move plane off screen
        }
    }

    //draw zombies with class
    for(let i = 0; i<zombiees.length; i++){
        strokeWeight(1);
        zombiees[i].display();
        zombiees[i].move();
        if(p1X >= zombiees[i].x-zombiees[i].w/2 && p1X <= zombiees[i].x+zombiees[i].w/2 && p1Y + pHeight >= zombiees[i].y-zombiees[i].h/2 && p1Y <= zombiees[i].y + zombiees[i].h/2){
            //character hits zombie
            lifeSound.play(); //sound plays
            lives = lives - 1; //lose life
            zombiees[i].x = -1000; //zombie goes away
        }
    }

    //draw lives with class
    for(let i = 0; i < live.length; i++){
        live[i].display();
        live[i].move();
        if(p1X >= live[i].x-live[i].w/2 && p1X <= live[i].x+live[i].w/2 && p1Y + pHeight >= live[i].y-live[i].h/2 && p1Y <= live[i].y + live[i].h/2){
            //character hits lives
            lives = lives + 1; //get lives
            live[i].x = -1000; //move lives off screen
        }
    }


    //win or lose screen
    if(score>=9 && p1X >= pX){ //you need 9 fuels to fill your tank
        winSound.play(); //win sound plays when you win
        level = 2; //trigger win screen
    }

    if(score<9 && p1X >= pX){ //not enough fuel
        loseSound.play(); //lose sound plays when you lose
        level = 4; //trigger lose screen
    }

    if(lives<=0){ //no more lives
        loseSound.play(); //lose sound plays when you lose
        level = 3; //trigger lose screen
    }
    
    if(timer<=0){ //no more time
        loseSound.play(); //lose sound plays when you lose
        level = 3; //trigger lose screen
    }
}

//gravity (aka how to jump)
function gravity(){
    if(p1Y >= minHeight && jump == false){
        //stop falling because we are on the ground
        p1Y = p1Y; //don't fall
        jumpCounter = 0; //reset jump counter when landing
    } else {
        p1Y = p1Y + (direction*velocity); //the code that makes gravity work
    } //he will fall when he is in the air, above the ground

    if(jump == true){
        if(p1Y <= maxHeight || jumpCounter >= jumpPower){
            if(p1Y >= minHeight){
                p1Y = minHeight; //so it doesn't fall trough the floor if you keep pressing a
            } else{
                velocity = fallingSpeed;
            } //fall at maximum
        } else {
            velocity = -jumpPower; //negative is up
            jumpCounter = jumpCounter + 1; //add to jumpCounter
        }
        } else{
        velocity = fallingSpeed;
    }
}

//movement with keyboard (move left/right & jump)
function keyPressed(){
    if(keyDown('LEFT_ARROW')){
        p1X = p1X - 5; //move left
    } 

    if(keyDown('RIGHT_ARROW')){
        p1X = p1X + 5; //move right
    } 
}

function keyTyped(){
    if(keyDown('SPACE')){ //jump when space bar is pressed
        jump = true;
    } else {
        jump = false; //don't jump if you don't press
    }
}

//preload = all fonts, sounds, images...
function preload(){
    font = loadFont('fonts/RoadRage-Regular.ttf');
    fontSmall = loadFont('fonts/SpecialElite-Regular.ttf');
    fuelSound = loadSound('sounds/fuel.mp3');
    lifeSound = loadSound('sounds/loselife.mp3');
    winSound = loadSound('sounds/winsound.mp3');
    loseSound = loadSound('sounds/losesound.mp3');
    bgi = loadImage('pictures/background.jpg');
    winbgi = loadImage('pictures/winbgi.jpg');
    losebgi = loadImage('pictures/losebgi.jpg');
}