let img;
let overlay;
let maskLayer;
let brushSize = 150;



function preload() {
  img=loadImage('plant.jpg.jpg');
}

function setup() {
  createCanvas(400, 400);

// hidden graphics layer
overlay = createGraphics(width,height);
  
  // draw in white
  overlay.stroke(255);
  overlay.strokeWeight(2);
  overlay.noFill();
  overlay.arc(170,195,130,155,400,0);
  overlay.line(290,150,178,370);
  overlay.triangle(10,350,100,230,275,350);
  
  // layer stores what is being revealed
  maskLayer = createGraphics(width,height);
  
}

function draw() {
   image(img,0,0,width,height); // draw the image to fill the canvas

  //paint onto mask where mouse goes
  maskLayer.ellipse(mouseX,mouseY,brushSize,brushSize);
  
  //apply mask to overlay
  let revealed = overlay.get();
   revealed.mask(maskLayer.get());
  
  // draw geometry overlay only where revealed
  image(revealed,0,0);
  
  }