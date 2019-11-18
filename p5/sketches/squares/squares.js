/* squares.js */

var palette;
var numSquares;
var squareColors = [];

var isBW = true;
var frameChanged = 0;

function setup() {
    var canvas = createCanvas(600, 600);
    canvas.parent('squares-holder');

    numSquares = 30;
    setupSquareColors();
    palette = randomPalette();

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

        if(isBW == false && frameCount - frameChanged > i*2) {
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


function mouseClicked() {
    if(isBW == true) {
        isBW = false;
        frameChanged = frameCount;
        palette = randomPalette1000();
    }
    else {
        isBW = true;
    }
}

function keyPressed() {
    if(keyCode == 32) {
        palette = randomPalette();
    }
}

