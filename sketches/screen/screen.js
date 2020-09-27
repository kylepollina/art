/* screen.js */

var img;
var starfish;

function preload() {
    starfish = loadImage('starfish.jpg');
}

function setup() {
    var canvas = createCanvas(500, 500);
    canvas.parent('screen-holder');

    img = createImage(width, height);
    img.copy(starfish, 0, 0, starfish.width, starfish.height, 0, 0, width, height);
    img.loadPixels();

    noLoop();
}

function draw() {
    background(0);
    noStroke();

    let size = 10;

    // for(let x = 0; x < width; x += size/2) {
    //     for(let y = 0; y < height; y += 2* size) {
    //         let index = (x + y * img.height) * 4;

    //         let r = img.pixels[index];
    //         let b = brightness(img.pixels[index]);
    //         fill(255);
    //         ellipse(x, y, b/50);
    //     }
    // }

}

/* Prevents up and down arrow from moving page up and down */
window.addEventListener("keydown", function(e) {
    // space and arrow keys
    if([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
        e.preventDefault();
    }
}, false);
