// Circular Arcs

let num = 25;
let angle = 0;
let ctx = null;
const r = 100;

function setup() {
	createCanvas(500, 500);
	ellipseMode(CENTER);
	colorMode(HSB);
	ctx = canvas.getContext('2d');
}

function draw() {

	background(120, 120, 0);
	num = round(map(mouseX, 0, width, 4, 25));
	if (num % 2 === 1) {
		num += 1;
	}
	angle = radians(360 / num);

	push();
	translate(width / 2, height / 2);

	noStroke();
	
	ctx.save();
	ctx.beginPath();
	ctx.rect(-width / 2, -height / 2, width / 2, height);
	ctx.clip();
	for (let i = 0; i < num; i++) {
		fill(i/num * 360, 90, 80);
		rotate(angle);
		circle(r, 0, 2*r, 2*r, -angle, PI);
	}
	ctx.restore();
	
	ctx.beginPath();
	ctx.save();
	ctx.rect(0, -height / 2, width / 2, height);
	ctx.clip();
	
	rotate(PI);
	for (let i = 0; i < num; i++) {
		fill((i/num * 360 + 180) % 360, 90, 80);
		rotate(angle);
		circle(r, 0, 2*r, 2*r);
	}
	ctx.restore();

	pop();
}

