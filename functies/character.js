let p1X = 100;
let p1Y = 375;
let pWidth = 100;
let pHeight = 100;

function setup(){
  createCanvas(1800, 500);
  background(200);

}

function draw (){
  character(p1X, p1Y, 255);
} 


function character(p1X, p1Y){ //player character

  strokeWeight(3);
  stroke(0);
  rectMode(CENTER);
  fill('#16537e');
  rect(p1X + 10, p1Y + 50, 15, 25); //body bottom
  fill('#16537e');
  rect(p1X + 10, p1Y + 35, 15, 25); //body top
  fill('#ce7e00');
  rect(p1X + 10, p1Y + 50, 15, 5); //gold belt
  fill('#ce7e00'); 
  rect(p1X + 5, p1Y + 15, 5, 35); //gold stripes on jacket
  rect(p1X + 15, p1Y + 15, 5, 35); //gold stripes on jacket
  fill('#e2dac1');
  circle(p1X + 10, p1Y, 40); //head
  line(p1X - 10, p1Y + 20, p1X +1 , p1Y + 35); //arm left
  line(p1X + 19, p1Y + 34, p1X + 30, p1Y + 20); //arm right
  line(p1X + 5, p1Y + 65, p1X + 5, p1Y + 90); //leg left
  line(p1X + 15, p1Y + 65, p1X + 15, p1Y + 90); //leg right
  fill('#bed5ea');
  strokeWeight(2);
  circle(p1X, p1Y, 8); //eye left
  circle(p1X + 20, p1Y, 8); //eye right
  fill(255);
  strokeWeight(3);
  point(p1X, p1Y); //eyeball left
  point(p1X + 20, p1Y); //eyeball right
  fill('#16537e');
  strokeWeight(3);
  line(p1X - 15, p1Y - 15, p1X + 35, p1Y - 15); //hat
  strokeWeight(3);
  rect(p1X + 10, p1Y - 30, 30, 10); //hat
  strokeWeight(3);
  fill('#ce7e00');
  rect(p1X + 10, p1Y - 20, 30, 10); //gold stripe on hat
  strokeWeight(2);
  fill('#e2dac1');
  arc(p1X + 10, p1Y + 10, 10, 10, -25, PI, OPEN); //smile
  
}
