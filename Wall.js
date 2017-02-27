// Wall constructor
function Wall() {
    this.color = color(128,128,128);
    this.width = 50;
    this.gapSize = 300;
    this.gapPosition_y = height/2; // From 0 to height - ground_height
    this.gapPosition_x = width/2;
    this.wallSpacing = 500;
    this.wallSpeed = -5;
}
Wall.prototype.draw = function() {
    push()
        noStroke();
        fill(this.color);
        rect(this.gapPosition_x - this.width/2, 0, this.width, 
            this.gapPosition_y - this.gapSize/2);

    pop();

}

