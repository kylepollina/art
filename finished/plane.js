/* plane.js */

var palette;
var recording;

function setup() {
    var canvas = createCanvas(500, 500, WEBGL);
    canvas.parent('plane-holder');

    // palette = randomPalette1000();
    palette = getPalette1000(921);
    recording = false;

    noStroke();
    ortho();
}

function draw() {
    camera(0, 0, -width/2 + sin(frameCount/50)*250, 0, 0, 0, 0, 1, 0);
    rotateX(radians(45));
    rotateY(radians(45));
    background(palette[3]);

    drawThing();
    saveFrame();
}

function saveFrame() {
    if(frameCount == 1) {
        // save();
        // noLoop();
    }
}

function drawThing() {
    translate(-width, 0, -height);

    for(let i = 0; i < 10; i++) {
        push();

        for(let j = 0; j < 10; j++) {
            push();

            translate(100*i, 0, 100*j);

            push();
            rotateY(frameCount/100);

            // fill(palette[(i+j + ~~(frameCount/10))%5]);
            fill(palette[(i*j)%5]);
            plane(100, 100);
            pop();

            rotateY(radians(90));

            push();
            rotateY(frameCount/100);
            // fill(palette[(1 + i+j + ~~(frameCount/10))%5]);
            fill(palette[(1 + i+j)%5]);
            plane(100, 100);
            pop();

            pop();
        }

        pop();

    }
}

function keyPressed() {
    if(keyCode == 32) {
        save();
    }
    else if(keyCode == 48) {
        palette = randomPalette1000();
    }
}

// function windowResized() {
//     resizeCanvas(windowWidth, windowHeight);
//     ortho();
// }

/* Prevents up and down arrow from moving page up and down */
window.addEventListener("keydown", function(e) {
    // space and arrow keys
    if([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
        e.preventDefault();
    }
}, false);
