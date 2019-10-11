let width;
let height;

let red;
let green;
let blue;

function setup() {
  createCanvas(500, 500);
  background(145, 42, 126);
}

function draw() {
  // Set the width and height to be random numbers 10-99 
  width = random(10, 100);
  height = random(10, 100);
  
  // Set the RGB values to be random numbers 0-255
  red = random(0, 256);
  green = random(0, 256);
  blue = random(0, 256);
  
  // Only draw ellipses when the mouse button is pressed
  if(mouseIsPressed) {
    fill(red, green, blue); // Use the variables to set the RGB fill colour 
    stroke(1, 209, 229);
    ellipse(mouseX, mouseY, width, height); // Use the mouse X and Y position for the location of the ellipse, and our variables to set the width and height
  }

  // When any key is pressed, redraw the background to erase the ellipses
  if(keyIsPressed) {
    background(145, 42, 126);
  }
}
