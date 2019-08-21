/* test.js */

var checker;
var palette;

function setup() {
    var canvas = createCanvas(500, 500);
    canvas.parent('test-holder');

    checker = new Grid(0, 0, width, height, 21, 21);
    palette = getPalette1000(811);

    noStroke();
    // noLoop();
}

function draw() {
    for(let i = 0; i < checker.tiles.length; i++) {
        let tile = checker.tiles[i];
        let col = i % 2 == 0 ? palette[0] : palette[1];
        // let col = palette[num];
        fill(col);
        rect(tile.x, tile.y, tile.width+1, tile.height+1); 
    }
}

/* Prevents up and down arrow from moving page up and down */
window.addEventListener("keydown", function(e) {
    // space and arrow keys
    if([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
        e.preventDefault();
    }
}, false);
