/* test.js */

var owl;

function preload() {
    owl = loadImage('./owl_small.jpg');
}

function setup() {
    var canvas = createCanvas(500, 500);
    canvas.parent('test-holder');

    background(200);
}

function draw() {
    
}

/* Prevents up and down arrow from moving page up and down */
window.addEventListener("keydown", function(e) {
    // space and arrow keys
    if([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
        e.preventDefault();
    }
}, false);
