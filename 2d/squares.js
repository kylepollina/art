/* test.js */

var palette;

function setup() {
    var canvas = createCanvas(700, 700);
    canvas.parent('squares-holder');
    // frameRate(30);

    palette = randomPalette1000();

    noStroke();
    rectMode(CENTER);
}

function draw() {
    background(255);
    translate(width/2, height/2);
    for(let i = 40; i > 1; i--) {
        let sidelen = 40*i;
        // let color = palette[floor(i%5)];
        let color = i % 2 == 0 ? 0 : 255;
        // fill(red(color), green(color), blue(color), 250);
        fill(color);

        push();
        let sign = i % 2 == 0 ? 1 : -1;
        rotate(sign * sin(frameCount/600)*i);
        rect(0, 0, sidelen, sidelen);
        pop();
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
