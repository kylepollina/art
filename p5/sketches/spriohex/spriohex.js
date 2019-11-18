/* spriohex.js */

function preload() {}

function setup() {
    var canvas = createCanvas(640, 640);
    canvas.parent('spriohex-holder');
}

function draw() {
    
}

/* Prevents up and down arrow from moving page up and down */
window.addEventListener('keydown', function(e) {
    // space and arrow keys
    if([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
        e.preventDefault();
    }
}, false);
