// Trumpy Bird Constructor
function Trump() {
// Trumpy Bird State
this.pos_x = 150; // center position
this.pos_y = 100; // center position
this.velocity = 0;
this.rotation = 0; // Rotation reversed to be counter clockwise, positive for up.

// Game Settings
this.acceleration = .3; // pixesl per second^2
this.jump_velocity = -10;
this.size = 50;
this.max_fall_velocity = 50;
this.rotationRate = -40; // Degrees per second, while falling
this.rotationMax = 30; // Degrees up when jumping.
this.rotationMin = -40; // Degrees down when falling.

this.DEBUG = true; // Show debug outlines.

// Trump Art Assets
this.img_head;
this.sound_fart = [];
this.fart_death; // Sound to play at death.
this.fart_index = 0; // Keep track of last fart played.
    
} // constructor

Trump.prototype.jump = function() {
    this.velocity = this.jump_velocity;
    this.rotation = this.rotationMax;
    this.playFart();
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

    this.rotation += this.rotationRate / frameRate();
    if(this.rotation < this.rotationMin) { // Rotated past minimum
        this.rotation = this.rotationMin;
    }
    
}

Trump.prototype.draw = function() {
    // Trump Image
    push() 
        imageMode(CENTER);
        angleMode(DEGREES);
        translate(this.pos_x,this.pos_y);
        // rotate(20); // Degrees
        rotate(-this.rotation);
        this.img_head.resize(0,150);
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

Trump.prototype.playFart = function() {
    this.sound_fart[this.fart_index].setVolume(1);
    this.sound_fart[this.fart_index].play();

    this.fart_index++;
    if (this.fart_index >= this.sound_fart.length) {
        this.fart_index = 0;
    }
}

Trump.prototype.preloadAssets = function() {
    // this.img_head = loadImage("assets/trump_hair.jpg");
    
    this.img_head = loadImage("assets/trump2.jpg");

    this.fart_death = loadSound('assets/sounds/lotafarts.ogg');

    this.sound_fart.push( loadSound('assets/sounds/Another Fart-SoundBible.com-322027286.mp3') );
    this.sound_fart.push( loadSound('assets/sounds/Sharp Fart-SoundBible.com-359497364.mp3') );
    this.sound_fart.push( loadSound('assets/sounds/Bronx Cheer-SoundBible.com-524243477.mp3') );
    this.sound_fart.push( loadSound('assets/sounds/Fart Reverberating Bathroom-SoundBible.com-2032114496.mp3') );
    this.sound_fart.push( loadSound('assets/sounds/Fart Short Ripper-SoundBible.com-1317602707.mp3') );
    this.sound_fart.push( loadSound('assets/sounds/Funny Fart Trail-SoundBible.com-1691782690.mp3') );
    this.sound_fart.push( loadSound('assets/sounds/Quick An Small Fart-SoundBible.com-958779407.mp3') );
    this.sound_fart.push( loadSound('assets/sounds/Sharp Fart-SoundBible.com-359497364.mp3') );
    this.sound_fart.push( loadSound('assets/sounds/Trumpet Fart-SoundBible.com-2075756858.mp3') );
    this.sound_fart.push( loadSound('assets/sounds/Uuuuuu-Paula-1357936016.mp3') );
    this.sound_fart.push( loadSound('assets/sounds/Wet Fart-SoundBible.com-641895722.mp3') );
}
