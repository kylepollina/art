// Circular Arcs

let rad = 50;
let num = 4;
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
		arc(rad, 0, rad*5/3, rad*5/3, -angle, PI);
		arc(rad, 0, rad*4/3, rad*4/3, -angle, PI);
		arc(rad, 0, rad, rad, -angle, PI);
		arc(rad, 0, rad*2/3, rad*2/3, -angle, PI);
		arc(rad, 0, rad*1/3, rad*1/3, -angle, PI);
	}

	pop();
}
