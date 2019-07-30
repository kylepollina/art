/* brush.js */

var palette;
var phyllotaxis;
var points;

function setup() {
    var canvas = createCanvas(windowWidth, windowHeight);
    canvas.parent('brush-holder');

    palette = randomPalette1000();
    phyllotaxis = new Phyllotaxis(1000);
    points = phyllotaxis.generatePoints();
    console.log(points);

    noStroke();
}

function draw() {
    for(let p in points) {
        let x = width/2 + p.x;
        let y = height/2 + p.y;

        fill(palette[int(random(5))]);
        ellipse(x, y, 100);
        for(let i = 0; i < 10; i++) {
            fill(palette[int(random(5))]);
            ellipse(x+random(-100, 100), y+random(-100, 100), 100-i*10);
        }
    }
}



function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

/* Prevents up and down arrow from moving page up and down */
window.addEventListener("keydown", function(e) {
    // space and arrow keys
    if([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
        e.preventDefault();
    }
}, false);
