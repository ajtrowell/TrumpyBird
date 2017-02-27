// Trumpy Bird Constructor
function Trump() {
// Trumpy Bird State
this.pos_x = 150; // center position
this.pos_y = 100; // center position
this.velocity = 0;

// Game Settings
this.acceleration = .3; // pixesl per second^2
this.jump_velocity = -10;
this.size = 50;
this.max_fall_velocity = 50;

this.DEBUG = true;

// Trump Image Assets
this.img_head;
    
} // constructor

Trump.prototype.jump = function() {
    this.velocity = this.jump_velocity;
}

Trump.prototype.applyGravity = function() {
    if(this.velocity <= this.max_fall_velocity) { // Limit maximum fall speed
        this.velocity += this.acceleration;
    }

    this.pos_y += this.velocity;
    if( (this.pos_y +this.size/2) > (height - ground_height)) {
        this.velocity = 0;
        this.pos_y = height - ground_height - this.size/2;
    }
}

Trump.prototype.draw = function() {
    // Trump Image
    push() 
        imageMode(CENTER);
        angleMode(DEGREES);
        translate(this.pos_x,this.pos_y);
        rotate(20); // Degrees
        this.img_head.resize(0,200);
        image(this.img_head,0,0);
    pop()
    
    // Prelim Graphics
    if(this.DEBUG) {
    push()
        fill(200,0,0); // Red
        // nostroke();
        rect(this.pos_x-this.size/2,this.pos_y-this.size/2,this.size,this.size);
    pop()
    push()
        fill(0,250,0); // Green
        stroke(0,200,0); // Green stroke
        point(this.pos_x,this.pos_y);
    pop()
    }

}

Trump.prototype.preloadImages = function() {
    // this.img_head = loadImage("assets/trump_hair.jpg");
    this.img_head = loadImage("assets/trump2.jpg");
    
}