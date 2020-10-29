function setup() {
  createCanvas(500, 500);
  background(145, 42, 126);
}

function draw() {
  // Only draw ellipses when the mouse button is pressed
  if(mouseIsPressed) {
    fill(random(0, 256), random(0, 256), random(0, 256)); // Make the colours random
    stroke(1, 209, 229);
    ellipse(mouseX, mouseY, random(10, 100), random(10, 100)); // Use the mouse X and Y position for the location of the ellipse, and random amounts for the width and height
  }

  // When any key is pressed, redraw the background to erase the ellipses
  if(keyIsPressed) {
    background(145, 42, 126);
  }
}