// Circular Arcs

let rad = 50;
let num = 25;
let angle = 0

function setup() {
    var canvas = createCanvas(300, 300);
    canvas.parent("arcs-holder");
	ellipseMode(CENTER);
}

function draw() {

	background(255, 255, 0);
	num = ~~map(mouseX, 0, width, 3, 25);
	angle = radians(360 / num);

	push();
	translate(width / 2, height / 2);

	fill(255);
	noStroke();
	for (let i = 0; i < num; i++) {
		rotate(angle);
		circle(rad, 0, 2*rad, 2*rad);
	}
	
	noFill();
	stroke(0);
	for (let i = 0; i < num; i++) {
		rotate(angle);
		arc(rad, 0, 2*rad, 2*rad, -angle, PI);
	}

	pop();
}

function drawArcs() {
	for (let i = 0; i < num; i++) {
		rotate(angle);
		arc(rad, 0, 100, 100, -angle, PI);
	}
}
