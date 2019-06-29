/* test.js */

var gridGraphics;
var boxlen = 20;
var palette;

function setup() {
    var canvas = createCanvas(500, 500, WEBGL);
    canvas.parent('cubes-holder');

    palette = randomPalette1000();
    gridGraphics = createGraphics(100, 100);

    ortho();
}

function draw() {

    for(let x = 0; x < gridGraphics.width; x+=boxlen) {
        for(let y = 0; y < gridGraphics.height; y+=boxlen) {
            let a = x/boxlen;
            let b = y/boxlen;
            let colnum = abs(floor(sin(2*a+b-frameCount/8)/10+cos(b+a)))%5;
            gridGraphics.fill(palette[colnum]);
            gridGraphics.noStroke();
            gridGraphics.rect(x, y, boxlen, boxlen);
        }
    }


    fill(255);
    stroke(0);
    texture(gridGraphics);
    rotateX(radians(45));
    rotateY(radians(45));

    translate(-2*width/3, 0, -200);

    for(let i = 0; i < 10; i++) {
        for(let j = 0; j < 10; j++) {
            box(100);
            translate(100, 0, 100);
            box(100);
            translate(0, 100, -100);
        }
        translate(-1000, -1000, 0); // reset origin
        translate(0, -100, 100);
    }
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
