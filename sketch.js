// Trumpy Bird State
var t_pos_x = 150; // center position
var t_pos_y = 100; // center position
var t_velocity = 0;

// Game Settings
var t_acceleration = .3; // pixesl per second^2
var t_jump_velocity = -10;
var t_size = 50;
var t_max_fall_velocity = 50;

// Terrain Settings
var ground_height = 200;
var trumpsWall;
var bobsWall;


// Setup (one time only!)
function setup() {
    createCanvas(windowWidth,windowHeight);
    trumpsWall = new Wall();
    bobsWall = new Wall();

}

// Main Loop (60 frames per second!)
function draw() {
      background(0);
      drawTerrain();
      trumpsWall.draw();
      bobsWall.gapPosition_x = width*3/4;
      bobsWall.draw();
      applyGravity();
      drawTrump()

}


// Keyboard Inputs
function keyPressed() {
    if(keyCode == 32) { // Spacebar
        trumpyJump();
    }
}


function trumpyJump() {
    t_velocity = t_jump_velocity;
}

 

function applyGravity() {
    if(t_velocity <= t_max_fall_velocity) { // Limit maximum fall speed
        t_velocity += t_acceleration;
    }

    t_pos_y += t_velocity;
    if( (t_pos_y +t_size/2) > (height - ground_height)) {
        t_velocity = 0;
        t_pos_y = height - ground_height - t_size/2;
    }
}




function drawTrump() {
    push()
        fill(200,0,0); // Red
        // nostroke();
        rect(t_pos_x-t_size/2,t_pos_y-t_size/2,t_size,t_size);
    pop()
    push()
        fill(0,250,0); // Green
        stroke(0,200,0); // Green stroke
        point(t_pos_x,t_pos_y);
    pop()
}



function drawTerrain() {
    // Blue Sky
    push();
        background(192,255,255); // Blue Sky

    pop();
    // Green grass
    push();
        noStroke();
        fill(0,200,0); // Green
        rect(0, height - ground_height, width, ground_height );
    pop();
}


