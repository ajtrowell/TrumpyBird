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
var walls = [];

// Setup (one time only!)
function setup() {
    createCanvas(windowWidth,windowHeight);

}

// Main Loop (60 frames per second!)
function draw() {
      background(0);
      drawTerrain();

      wallManager(); // Add and remove walls as they enter and leave the screen.
      
      // Update all walls position and draw.
      for (let i=0; i<walls.length; i++) {
          walls[i].move();
          walls[i].draw();
      }
      
      applyGravity();
      drawTrump()

}


// Keyboard Inputs
function keyPressed() {
    if(keyCode == 32) { // Spacebar
        trumpyJump();
    }
}

function wallManager() {
    // Add and remove walls as they enter and leave the screen.

    if(walls.length === 0) {
        walls.push(new Wall(width));
    }
    let spacing = walls[0].spacing;
    let nextPosition;

    // Add walls at right side of screen.
    if (walls[walls.length -1].position_x < width ) {
        nextPosition = walls[walls.length - 1].position_x + spacing + 1;
        walls.push(new Wall(nextPosition));
        console.log("number of walls is " + walls.length);
    }

    // Delete walls at left side of screen.
    while(walls[0].position_x < -walls[0].width) {
        walls.splice(0,1); // Delete first list item.
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


