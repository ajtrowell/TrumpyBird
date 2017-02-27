var trump;

// Terrain Settings
var ground_height = 200;
var walls = [];


// Run before anything else is displayed.
function preload() {
    trump = new Trump();
    trump.preloadImages(); // Preload all image assets.
}


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
      
      trump.applyGravity();
      trump.draw();
}





// Keyboard Inputs
function keyPressed() {
    if(keyCode == 32) { // Spacebar
        trump.jump();
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


