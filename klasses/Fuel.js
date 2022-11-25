class Fuel{
    constructor(xCoord, yCoord, width, height){
        this.x = xCoord;
        this.y = yCoord;
        this.w = width;
        this.h = height;
    }
    display(){
        rectMode(CORNER);
        fill('#FF0000');
        rect(this.x, this.y, this.w, this.h); //red rect
        fill(200);
        rect(this.x - 5, this.y - 5, 10, 5); //opening
        fill('#FF0000');
        rect(this.x + 15, this.y + 5, 5, 10); //handle
    }
    move(){
        this.x-=2; //will move with platforms
    }
}
