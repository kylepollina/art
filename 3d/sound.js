/* test.js */

var toggle;

var song;
var fft;

function preload() {
    song = loadSound('doin_time.mp3');
}

function setup() {
    var canvas = createCanvas(500, 500);
    canvas.parent('sound-holder');

    toggle = createButton("toggle");
    toggle.mousePressed(toggleSong);
    song.play();

    fft = new p5.FFT(0, 512);

    background(0);
}

function draw() {
    var spectrum = fft.analyze();
    console.log(spectrum);
}

function toggleSong() {
    if(song.isPlaying()){
        song.pause();
    }
    else {
        song.play();
    }
}

/* Prevents up and down arrow from moving page up and down */
window.addEventListener("keydown", function(e) {
    // space and arrow keys
    if([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
        e.preventDefault();
    }
}, false);
