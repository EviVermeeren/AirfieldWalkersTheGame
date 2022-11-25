class Platform{
    constructor(xCoord, yCoord, width, height){
        this.x = xCoord;
        this.y = yCoord;
        this.w = width;
        this.h = height;
    }
    display(){
        rectMode(CENTER);
        fill("#503707");
        strokeWeight(1);
        rect(this.x, this.y, this.w, this.h);
        fill('#38761d');
        triangle(this.x - 100, this.y - 20, this.x - 80, this.y - 20, this.x - 90, this.y);
        triangle(this.x - 80, this.y - 20, this.x - 60, this.y - 20, this.x - 70, this.y);
        triangle(this.x - 60, this.y - 20, this.x - 40, this.y - 20, this.x - 50, this.y);
        triangle(this.x - 40, this.y - 20, this.x - 20, this.y - 20, this.x - 30, this.y);
        triangle(this.x - 20, this.y - 20, this.x, this.y - 20, this.x - 10, this.y);
        triangle(this.x, this.y - 20, this.x + 20, this.y - 20, this.x + 10, this.y);
        triangle(this.x + 20, this.y - 20, this.x + 40, this.y - 20, this.x + 30, this.y);
        triangle(this.x + 40, this.y - 20, this.x + 60, this.y - 20, this.x + 50, this.y);
        triangle(this.x + 60, this.y - 20, this.x + 80, this.y - 20, this.x + 70, this.y);
        triangle(this.x + 80, this.y - 20, this.x + 100, this.y - 20, this.x + 90, this.y);
    }
    move(){
        this.x-=2;
    }
}
