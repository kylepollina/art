/************
 * Spiro.js *
 ***********/

// var spiro;
var t;

function setup() {
    var canvas = createCanvas(800,600);    
    canvas.parent("spirohex-holder");

    t = new Turtle();
    t.penDown();

    // spiro = new Spiro();
    // spiro.set_start_pos(width/2,height/2 + 250);
    noLoop();
}

function draw() {
    background(250,250,255);

    for(let i = 0; i < 6; i++) {
        t.setHeading(0);
        t.right(60*i);
        t.moveTo(width/2, height/2);
        drawSpiro();
    }

    save();
}

function drawSpiro() {
    strokeWeight(1);
    let len = 200;
    let angle = 121;
    // let level = cos(frameCount / 150) * 6 + 5;
    let level = 5;

    t.forward(len);

    for(var i = 0; i < len; i++) {
        t.setHeading(t.heading + angle);
        let mov = len -  (level * (i+1));
        if(mov > 0)
            t.forward(mov);
    }
}

