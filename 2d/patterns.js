/* test.js */

var palette;

function setup() {
    var canvas = createCanvas(500, 500);
    canvas.parent('patterns-holder');

    palette = randomPalette1000();

    strokeWeight(3);
    stroke(randColor(palette));
    fill(randColor(palette));
}

function keyPressed() {
    if(keyCode == 32) {
        palette = randomPalette1000();
        stroke(randColor(palette));
        fill(randColor(palette));
    }
    else if(keyCode == 48) {
        stroke(randColor(palette));
        fill(randColor(palette));
    }
}

function draw() {
    background(255);

    for(let i = 0; i < 10; i++) {
        for(let j = 0; j < 10; j++) {
            let squareLen = (width-1)/10;
            let x = i*squareLen;
            let y = j*squareLen;

            for(let k = 0; k < 6; k++) {
                rect(x + 10*k + k*cos(frameCount*i/60), y + 10*k + k*sin(frameCount*j/60), squareLen-8*k, squareLen-8*k);
            }
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
