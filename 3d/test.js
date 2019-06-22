/* test.js */

var n = 0;

function setup() {
    var canvas = createCanvas(500, 500, WEBGL);
    canvas.parent('test-holder');

    noStroke();
}

function draw() {
    background(170);
    rotateY(n/20);
    rotateX(n/20);
    box(100);
    n++;
}

/* Prevents up and down arrow from moving page up and down */
window.addEventListener("keydown", function(e) {
    // space and arrow keys
    if([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
        e.preventDefault();
    }
}, false);
