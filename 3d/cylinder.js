/* test.js */

var checker;
var rad;
var h;

function setup() {
    var canvas = createCanvas(500, 500, WEBGL);
    canvas.parent('cylinder-holder');

    rad = 80;
    h = 90;

    checker = createGraphics(2*rad*PI, h);
    let boxlen = 20;
    for(let i = 0; i < checker.width; i+=boxlen) {
        for(let j = 0; j < checker.height; j+=boxlen) {
            checker.fill(i/2);
            checker.stroke(0);
            checker.rect(i, j, 20, 20);
        }
    }

    // angleMode(DEGREES);
    // noLoop();
}

function draw() {
    background(255);
    translate(0, 0, 200);
    rotateX(radians(mouseY));
    rotateY(radians(mouseX));
    texture(checker);
    // cylinder(rad, h, 34, 1, 0, 0);
    plane(100, 100);
}

/* Prevents up and down arrow from moving page up and down */
window.addEventListener("keydown", function(e) {
    // space and arrow keys
    if([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
        e.preventDefault();
    }
}, false);
