/**************
 ** faces.js **
 *************/

var X_AXIS = 2;
var Y_AXIS = 1;
var gradient;


function setup() {
    var canvas = createCanvas(500, 500, WEBGL);
    canvas.parent('faces-holder');

    gradient = createGraphics(width, height);
    setGradient(0, 0, width, height, color(0), color(255), Y_AXIS);

    ortho();
    // noLoop();
}

function draw() {
    drawGradient();
    drawCube();
    drawFaces();
}

function drawFaces() {
    push();
    rotateX(radians(-45));
    rotateY(radians(45));
    translate(0,0,80);
    fill(0);
    rect(-50,-50, 100, 100);
    pop();
    translate(0,0,100);
    rect(-50,-50, 100, 100);
}

function drawCube() {
    push();
    fill(255);
    strokeWeight(3);
    stroke(0);
    rotateX(radians(45));
    rotateZ(radians(45));
    box(100);
    pop();
}

function drawGradient() {
    push();
    texture(gradient);
    translate(-1*width/2, -1*height/2, -66);
    rect(0, 0, width, height);
    pop();
}

function setGradient(x, y, w, h, c1, c2, axis) {
  gradient.noFill();

  if (axis === Y_AXIS) {
    // Top to bottom gradient
    for (let i = y; i <= y + h; i++) {
      let inter = map(i, y, y + h, 0, 1);
      let c = lerpColor(c1, c2, inter);
      gradient.stroke(c);
      gradient.line(x, i, x + w, i);
    }
  } else if (axis === X_AXIS) {
    // Left to right gradient
    for (let i = x; i <= x + w; i++) {
      let inter = map(i, x, x + w, 0, 1);
      let c = lerpColor(c1, c2, inter);
      gradient.stroke(c);
      gradient.line(i, y, i, y + h);
    }
  }
}


/* Prevents up and down arrow from moving page up and down */
window.addEventListener("keydown", function(e) {
    // space and arrow keys
    if([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
        e.preventDefault();
    }
}, false);
