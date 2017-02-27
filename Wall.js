// Wall constructor
function Wall(position_x) {

    // Optional argument
    if(position_x !== undefined) {
        this.position_x = position_x;
    } else {
        this.position_x = width/2; // Default position
    }

    this.position_y = height/2; // From 0 to height - ground_height
    this.color = color(128,128,128);
    this.width = 50;
    this.gapSize = 300;
    this.spacing = 300;
    this.speed = -1;
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

