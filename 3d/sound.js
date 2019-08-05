/* test.js */

var toggle;
var soundwave;
var song;
var fft;

var planes;

function preload() {
    song = loadSound('doin_time.mp3');
}

function setup() {
    var canvas = createCanvas(500, 500, WEBGL);
    canvas.parent('sound-holder');
    frameRate(10);
    angleMode(DEGREES);

    toggle = createButton("toggle");
    toggle.mousePressed(toggleSong);
    song.play();

    planes = [];

    fft = new p5.FFT(0, 256);

    // ortho();
}


function draw() {
    background(255);
    drawSoundwave();

    rotateX(-45);
    rotateY(45);

    for(let i = 0; i < planes.length; i++) {
        translate(0, 0, 5*i);
        texture(planes[i]);
        plane(width, height);

    }

    if(planes.length > 10) planes.shift();
}

function drawSoundwave() {
    soundwave = createGraphics(width, height);

    soundwave.stroke(0);
    soundwave.noFill();

    var spectrum = fft.analyze();

    soundwave.beginShape();
    for(let i = 0; i < spectrum.length; i++) {
        let amplitude = spectrum[i];
        if(amplitude != 0) {
            soundwave.vertex(map(i, 0, spectrum.length, 0, width), height*3/4 - map(amplitude, 0, 900, 0, height));
        }
    }
    soundwave.endShape();

    planes.push(soundwave);
}

function toggleSong() {
    if(song.isPlaying()){
        noLoop();
        song.pause();
    }
    else {
        song.play();
        loop();
    }
}

/* Prevents up and down arrow from moving page up and down */
window.addEventListener("keydown", function(e) {
    // space and arrow keys
    if([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
        e.preventDefault();
    }
}, false);
