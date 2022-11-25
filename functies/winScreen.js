//winScreen (level == 2)

function winScreen(){
    image(winbgi, width/2, height/2, width, height);
    textSize(80);
    textFont(font);
    text('!!!CONGRATS!!!', width/2, 180);
    text('!!!YOU WIN!!!', width/2, 250);
    textSize(40);
    textFont(fontSmall);
    text('Refresh to play again!', width/2, 350);
    text('Your score:', width/2 - 35, 300)
    text(score, width/2 + 125, 300); //display score

}