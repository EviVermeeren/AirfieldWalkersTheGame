let eX = 110;
let eY = 25;

function enoughFuel(eX, eY){
    rectMode(CORNER);
    noFill();
    strokeWeight(3);
    stroke(0);
    rect(eX + 5, eY - 5, 10, 5);
    rect(eX, eY, 20, 40);

}