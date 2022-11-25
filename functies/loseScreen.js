//loseScreen (lives < 1) (level == 3)
function loseScreen(){
    image(losebgi, width/2, height/2, width, height);
    textSize(80);
    textFont(font);
    text('!!!OH NO!!!', width/2, 180);
    text('!!!YOU LOST!!!', width/2, 250);
    textSize(40);
    textFont(fontSmall);
    text('Refresh to try again!', width/2, 350); 

}

//loseScreen2 (fuel < 9) (level == 4)
function loseScreen2(){
    image(losebgi, width/2, height/2, width, height);
    textSize(80);
    textFont(font);
    text('!!!OH NO!!!', width/2, 180);
    text('!!!NOT ENOUGH FUEL!!!', width/2, 250);
    textSize(40);
    textFont(fontSmall);
    text('Refresh to try again!', width/2, 350); 

}