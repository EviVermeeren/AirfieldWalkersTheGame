pX = 9000; 
pY = 400;

function setup(){
    createCanvas(1500,800);
    background(200);
}

function draw(){
    airplane(300,500);
}

function airplane(pX, pY){ //airplane win end
    fill('#828E6F');
    ellipse(pX, pY, 150,40); //plane body
    arc(pX + 55, pY - 8, 25, 65, PI, 0); //tale
    arc(pX - 10, pY - 20, 30, 70, PI, 0); //wing top
    arc(pX - 9, pY + 10, 30, 100, 0, PI); //wing bottom
    fill('#d2d2d2');
    ellipse(pX - 50, pY - 5, 25, 20); //window pilot
    ellipse(pX - 10, pY - 5, 10, 10); //little windows
    ellipse(pX + 5, pY - 5, 10, 10); //little windows
    ellipse(pX - 25, pY - 5, 10, 10); //little windows
    ellipse(pX + 20, pY - 5, 10, 10); //little windows
    ellipse(pX + 35, pY - 5, 10, 10); //little windows
    fill('#606953');
    ellipse(pX - 72, pY, 5, 10); //nose
}