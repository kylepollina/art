/* test.js */

var grid;
var mask;
var src;
var flowers;

function preload() {
    flowers = loadImage('wave_small.jpg');
    flowers.loadPixels();
}

function setup() {
    var canvas = createCanvas(500, 500);
    canvas.parent('test-holder');

    grid = new Grid(0, 0, width, height, 10, 10);
    mask = createGraphics(width, height);
    src = createGraphics(width, height);
    src.image(flowers, 0, 0);

    background(255,255,255);
}

function draw() {
    drawMask(); 
    image(graphicsMask(src, mask), 0, 0);
    background(255,255,255, 14);
    drawBorder();
}

function drawBorder() {
    strokeWeight(20);
    line(0,0,width,0);
}

function drawMask() {
    mask.clear();
    mask.noStroke();
    mask.fill(0);
    for(let i = 1; i < grid.nRows-1; i++) {
        for(let j = 1; j < grid.nCols-1; j++) {
            let tile = grid.getTile(i,j);

            mask.push();

            let x1 = width/2;
            let x2 = tile.centerX;
            let y1 = height/2;
            let y2 = tile.centerY;
            let distance = dist(x1,y1,x2,y2);
            let angle = sin(i+j+frameCount/20)/2;
            mask.translate(tile.centerX, tile.centerY);
            mask.rotate(angle);
            mask.rect(0,0, tile.width/2, tile.height/2);

            mask.pop();
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
