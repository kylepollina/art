/**************
 ** faces.js **
 *************/

var X_AXIS = 2;
var Y_AXIS = 1;
var palette;
var cubeColor;
var face1 = [];
var face2 = [];
var face3 = [];
var face4 = [];
var face5 = [];
var face6 = [];

function setup() {
    var canvas = createCanvas(500, 500, WEBGL);
    canvas.parent('faces-holder');

    // palette = randomPalette1000();
    palette = getPalette1000(749);
    gradient = createGraphics(width, height);
    col1 = randColor(palette);
    col2 = randColor(palette);
    // stripeGradient = new StripeGradient(0, 0, width, height, col1, col2, 10);
    // gradient.image(stripeGradient.generate(), 0, 0);
    setGradient(0, 0, width, height, col1, col2, Y_AXIS);
    cubeColor = randColor(palette);

    setupFaces();

    camera(0, 0, (height/2) / tan(PI/6) + 150, 0, 0, 0, 0, 1, 0);

    ortho();
    noStroke();
    // noLoop();
}

function setupFaces() {
    let updateFunction = function() { 
        this.distance++;
        if(this.distance > 500) {
            this.distance = -50;
            this.color = randColor(palette);
        }
    }

    for(let i = 0; i < 20; i++) {
        face1.push({color: randColor(palette), distance: i*40, update: updateFunction});
        face2.push({color: randColor(palette), distance: i*40, update: updateFunction});
        face3.push({color: randColor(palette), distance: i*40, update: updateFunction});
        face4.push({color: randColor(palette), distance: i*40, update: updateFunction});
        face5.push({color: randColor(palette), distance: i*40, update: updateFunction});
        face6.push({color: randColor(palette), distance: i*40, update: updateFunction});
    }
}

function draw() {
    clear();

    drawGradient();
    translate(0, 0, 200);
    drawFaces();
}

function drawFaces() {
    push();
    drawface1();
    drawface2();
    drawface3();
    drawface4();
    drawface5();
    drawface6();
    pop();
}

function drawface1() {
    push();
    rotateX(radians(-45));
    rotateY(radians(45));
    
    for(let i = 0; i < face1.length; i++) {
        push();
        let face = face1[i];
        face.update();
        if(face.distance > 40*20) face.distance = 0;
        fill(face.color);
        translate(0, 0, face.distance);
        plane(100);
        pop();
    }

    pop();
}

function drawface2() {
    push();
    rotateX(radians(-45));
    rotateY(radians(-45));

    for(let i = 0; i < face2.length; i++) {
        push();
        let face = face2[i];
        face.update();
        if(face.distance > 40*20) face.distance = 0;
        fill(face.color);
        translate(0, 0, face.distance);
        plane(100);
        pop();
    }

    pop();
}

function drawface3() {
    push();
    rotateX(radians(45));
    rotateZ(radians(45));

    for(let i = 0; i < face3.length; i++) {
        push();
        let face = face3[i];
        face.update();
        if(face.distance > 40*20) face.distance = 0;
        fill(face.color);
        translate(0, 0, face.distance);
        plane(100);
        pop();
    }

    pop();
}

function drawface4() {
    push();
    rotateX(radians(45));
    rotateY(radians(45));

    for(let i = 0; i < face4.length; i++) {
        push();
        let face = face4[i];
        face.update();
        if(face.distance > 40*20) face.distance = 0;
        fill(face.color);
        translate(0, 0, face.distance);
        plane(100);
        pop();
    }

    pop();
}

function drawface5() {
    push();
    rotateX(radians(45));
    rotateY(radians(-45));

    for(let i = 0; i < face5.length; i++) {
        push();
        let face = face5[i];
        face.update();
        if(face.distance > 40*20) face.distance = 0;
        fill(face.color);
        translate(0, 0, face.distance);
        plane(100);
        pop();
    }

    pop();
}

function drawface6() {
    push();
    rotateX(radians(-45));
    rotateZ(radians(45));

    for(let i = 0; i < face6.length; i++) {
        push();
        let face = face6[i];
        face.update();
        if(face.distance > 40*20) face.distance = 0;
        fill(face.color);
        translate(0, 0, face.distance);
        plane(100);
        pop();
    }

    pop();
}

function drawCube() {
    push();
    rotateX(radians(-45));
    rotateY(radians(45));
    fill(255);
    box(100);
    pop();
}

function drawGradient() {
    push();
    texture(gradient);
    translate(-1/2*width, -1/2*height, 100);
    rect(0, 0, width, height);
    pop();
}

var gradient;
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
