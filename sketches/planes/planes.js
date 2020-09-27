/* planes.js */

var palette;
var numloops;
var allowedToStop = false;
var allowedToStart = false;

function setup() {
    var canvas = createCanvas(500, 500, WEBGL);
    canvas.parent('planes-holder');

    // palette = randomPalette1000();
    palette = getPalette1000(921);

    noStroke();
    ortho();

    numloops = 0;
}

function draw() {
    background(palette[3]);

    camera(0, 0, -width/2 + sin(frameCount/50)*250, 0, 0, 0, 0, 1, 0);
    rotateX(radians(45));
    rotateY(radians(45));
    drawThing();

    // camera(0, 0, -width/2 , 0, 0, 0, 0, 1, 0);
    // background(250, 250, 255);



    // camera(-width/2 + sin(frameCount/50)*250, 0, 0, 0, 0, 0, 0, 1, 0);
    // translate(0, 0, width*3/5);
    // push();
    // drawThing();
    // pop();
    // translate(100, 100, 0);
    // push();
    // drawThing();
    // pop();
    // translate(100, 100, 0);
    // push();
    // drawThing();
    // pop();
    // translate(100, -300, 0);
    // push();
    // drawThing();
    // pop();
    // translate(100, -100, 0);
    // push();
    // drawThing();
    // pop();

}

function keyPressed() {
    if(keyCode == 32) {
        allowedToStop = true;
    }
    if(keyCode == 48) {
        allowedToStart = true;
    }
}

function drawThing() {
    translate(-width, 0, -height);

    for(let i = 0; i < 10; i++) {

        for(let j = 0; j < 10; j++) {
            push();

            translate(100*i, 0, 100*j);

            push();
            rotateY(frameCount/100);

            // fill(palette[(i+j + ~~(frameCount/10))%5]);
            fill(palette[(i+j)%5]);
            plane(100, 100);
            pop();

            rotateY(radians(90));

            push();
            rotateY(frameCount/100);
            // fill(palette[(1 + i+j + ~~(frameCount/10))%5]);
            fill(palette[(1 + i+j)%5]);
            plane(101, 101);
            pop();

            pop();
        }


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
