class Enemyplane{
    constructor(xCoord, yCoord, width, height){
        this.x = xCoord;
        this.y = yCoord;
        this.w = width;
        this.h = height;
    }

    display(){
        fill('#828E6F');
        ellipse(this.x, this.y, 75, 20); //plane body
        arc(this.x + 25, this.y - 4, 12, 32, PI, 0); //tale
        arc(this.x - 5, this.y - 10, 15, 35, PI, 0); //wing top
        arc(this.x - 4, this.y + 5, 15, 50, 0, PI); //wing bottom
        fill('#d2d2d2');
        ellipse(this.x - 25, this.y - 2, 12, 10); //window pilot
        ellipse(this.x - 5, this.y - 3, 5, 5); //little windows
        ellipse(this.x + 2, this.y - 3, 5, 5); //little windows
        ellipse(this.x - 12, this.y - 3, 5, 5); //little windows
        fill('#606953');
        ellipse(this.x - 36, this.y, 2, 5); //nose        
    }
    
    move(){
        this.x-=4;
    }
    
}