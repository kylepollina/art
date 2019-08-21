/* squares.js */

var palette;
var numSquares;
var squareColors = [];

function setup() {
    var canvas = createCanvas(windowWidth, windowHeight);
    canvas.parent('squares-holder');

    numSquares = 30;
    setupSquareColors();
    palette = randomPalette1000();

    noStroke();
    rectMode(CENTER);
    background(255);
}

function setupSquareColors() {
    for(let i = 0; i < numSquares; i++) {
        squareColors.push(255);
    }
}

function draw() {
    translate(width/2, height/2);
    for(let i = numSquares; i > 1; i--) {
        let sidelen = width/40*i;



        if(bw == false && frameCount - frameChanged > i*2) {
            var color = palette[i%5];
        }
        else 
            var color = i % 2 == 0 ? 0 : 255;
        fill(color);

        if(i == numSquares) background(palette[i%5]);

        push();
        let sign = i % 2 == 0 ? 1 : -1;
        rotate(sign * sin(frameCount/1000)*i);
        rect(0, 0, sidelen, sidelen);
        pop();
    } 
}

var bw = true;
var frameChanged = 0;

function mouseClicked() {
    if(bw == true) {
        bw = false;
        frameChanged = frameCount;
        palette = randomPalette1000();
    }
    else {
        bw = true;
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function keyPressed() {
    if(keyCode == 32) {
        palette = randomPalette1000();
    }
}

/* Prevents up and down arrow from moving page up and down */
window.addEventListener("keydown", function(e) {
    // space and arrow keys
    if([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
        e.preventDefault();
    }
}, false);
