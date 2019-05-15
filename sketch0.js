function setup() {
  createCanvas(windowWidth,windowHeight);
  frameRate(20);
}

function draw() {
  stroke("#22ff22");
  line(mouseX,mouseY,pmouseX,pmouseY);
}
