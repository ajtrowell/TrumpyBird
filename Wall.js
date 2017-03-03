// Wall constructor
function Wall(position_x, position_y) {

    this.color = color(128,128,128);
    this.width = 50;
    this.gapSize = 300;
    this.spacing = 300;
    this.speed = -2;


    // Optional argument
    if(position_x !== undefined) {
        this.position_x = position_x;
    } else {
        this.position_x = width/2; // Default position
    }

    // Optional argument
    if(position_y !== undefined) {
        this.position_y = position_y;
    } else {
        // this.position_y = height/2; // From 0 to height - ground_height
        this.position_y = random(0+this.gapSize/2,height-this.gapSize/2 - ground_height);
    }

    

}
Wall.prototype.draw = function() {
    push()
        noStroke();
        fill(this.color);
        // Top Wall
        rect(this.position_x - this.width/2, 0, this.width, 
            this.position_y - this.gapSize/2);

            
        rect(this.position_x - this.width/2, 
            this.position_y + this.gapSize/2, 
            this.width, 
            height - (this.position_y + this.gapSize/2));

    pop();
}
Wall.prototype.move = function() {
    this.position_x += this.speed;
}

Wall.prototype.isHitBy = function(trumpObject) {
    // Detect whether Trump object has 
    // collided with this wall instance.
    // var rectTopWall = [this.position_x - this.width/2, 0, this.width, 
    //         this.position_y - this.gapSize/2];
    // var rectBottomWall  = [this.position_x - this.width/2, 
    //         this.position_y + this.gapSize/2, 
    //         this.width, height - (this.position_y + this.gapSize/2)];
    // var circle = [trumpObject.position_x, trumpObject.position_y,
    //         trumpObject.radius];
        
    var hitTop = collideRectCircle(this.position_x - this.width/2, 0, this.width, 
            this.position_y - this.gapSize/2,
            trumpObject.position_x, trumpObject.position_y,
            trumpObject.radius);
    var hitBottom = collideRectCircle(this.position_x - this.width/2, 
            this.position_y + this.gapSize/2, this.width, 
            height - (this.position_y + this.gapSize/2),
            trumpObject.position_x, trumpObject.position_y,
            trumpObject.radius);
            
    return hitTop || hitBottom;
}

