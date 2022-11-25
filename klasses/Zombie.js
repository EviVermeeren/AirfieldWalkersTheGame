class Zombie{
    constructor(xCoord, yCoord, width, height){
        this.x = xCoord;
        this.y = yCoord;
        this.w = width;
        this.h = height;
    }
    display(){
        rectMode(CORNER);
        fill('#8B4513');
        rect(this.x, this.y, this.w - 30, this.h); //body
        fill('#007500')
        rect(this.x - 5, this.y, this.w - 40, this.h - 30); //arm left
        rect(this.x + 15, this.y, this.w - 40, this.h - 30); //arm right
        rect(this.x, this.y + 40, this.w - 40, this.h - 40); //foot left
        rect(this.x + 10, this.y + 40, this.w - 40, this.h - 40); //foot right
        circle(this.x + 10, this.y - 10, this.w - 25); //head
        fill(0);
        rect(this.x + 5, this.y - 7, this.w - 40, this.h - 45); //mouth
        strokeWeight(4);
        point(this.x + 5, this.y - 15); //eyeball left
        point(this.x + 15, this.y - 15); //eyeball right
        
    }
    move(){
        this.x-=2;
    }
}
