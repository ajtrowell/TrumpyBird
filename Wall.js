// Wall constructor
function Wall() {
    this.color = color(128,128,128);
    this.width = 50;
    this.gapSize = 300;
    this.position_y = height/2; // From 0 to height - ground_height
    this.position_x = width/2;
    this.spacing = 500;
    this.speed = -5;
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

