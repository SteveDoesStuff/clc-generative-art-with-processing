let diameter; // This will control the size of the ellipse
let x; // X location of the ellipse
let y; // Y location of the ellipse

let r; // Red value colour for the ellipse
let g; // Green value colour for the ellipse
let b; // Blue value colour for the ellipse

let rChange = 15; // The max amount the red value of the colour can change
let gChange = 15; // The max amount the green value of the colour can change
let bChange = 15; // The max amount the blue value of the colour can change

let newCircle = true; // If this is true, we want to restart the circle 'towers' and draw a new one

function setup() {
  createCanvas(500, 500);
  background(255);
  frameRate(40);  // This controls the speed of the animation, lower numbers will slow it down
  
  r = random(0,255);
  g = random(0,255);
  b = random(0,255);
}

function draw() {
  if(newCircle == true) { // We're starting a new circle 'tower', so let's set some new values for our variables...
    diameter = random(50, 80); // Set the diameter to a number between 50 to 80
    x = random(150, width - 150); // Set the X position between 100 to 400
    y = random(150, height - 150); // Set the Y position between 100 to 400
    r = r + random(rChange); // Change the red colour value by 0 to 15, or 0 to -15
    if (r > 255 || r < 0) { // If the red value is greater than 255 (the max for colours) or less than 0, then...
      rChange = rChange * -1; // Multiple the change value by -1, so 15 would become -15 and make the colour values go down, and -15 would become 15 and make the colour values go back up
    }
    g = g + random(gChange); // Do the same as above with green
    if (g > 255 || g < 0) {
      gChange = gChange * -1;
    }
    b = b + random(bChange); // ...and blue too!
    if (b > 255 || b < 0) {
      bChange = bChange * -1;
    }
    fillColor = color(r, g, b); // Now set the fillColor with those new RGB values
    newCircle = false; // We're done setting variables for the start of our new circle 'tower', so make sure the next few circles don't do this again
  }
  fill(fillColor);
  ellipse(x, y, diameter, diameter);
  // Now for the next circle in our tower...
  x = x + random(diameter / -2, diameter / 2); // Move the next circle by half the current diameter (radius) either left or right
  y = y + random(diameter / -2, diameter / 2); // Move the next circle by half the current diameter (radius) either up or down
  diameter = diameter - random(1, 5); // Subtract 5 to 10 from the next circle in the tower	
  if (diameter < 1) { // Oh no, our circle has a diameter of less than 1!
    newCircle = true; // When we get back to the top of draw(), let's start a new circle tower :)
  }
}