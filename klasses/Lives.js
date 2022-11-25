class Live{
    constructor(xCoord, yCoord, width, height){
        this.x = xCoord;
        this.y = yCoord;
        this.w = width;
        this.h = height;
    }
    display(){
        fill('red');
        fill(204, 55, 51);
        strokeWeight(2);
        ellipse(this.x, this.y, 25, 23);
        stroke(78, 38, 0);
        strokeWeight(5);
        line(this.x-5, this.y-20, this.x, this.y-10);
        noStroke();
        fill(39, 166, 21);
        ellipse(this.x + 4, this.y-15, 5, 15)
        stroke('black');
    }
    move(){
        this.x-=2;
    }
}