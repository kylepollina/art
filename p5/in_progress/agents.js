/* agents.js */

var points = [];
var gradient;

function preload() {
    gradient = loadImage('gradient.png'); 
    gradient.loadPixels(); 
}

function setup() {
    var canvas = createCanvas(500, 500);
    canvas.parent('agents-holder');

    setupPoints();

    noStroke();
}

function setupPoints() {
    for(let i = 0; i < 100; i++) {
        let point = [floor(random(-1/2*width, 3/2*width)), floor(random(-1/2*height, 3/2*height))];
        points.push(point);
    }
}

function draw() {
    background(0);

    image(gradient, 0, 0);
    
    // drawPoints();
    updatePoints();
    // drawDiagram();
}

function drawPoints() {
    for(let i = 0; i < points.length; i++) {
        let point = points[i];
        ellipse(point[0], point[1], 10);
    }
}

function drawDiagram() {
    let delaunay = Delaunay.from(points);

    for(var polygon of delaunay.trianglePolygons()) {
        /* find avg color of polygon */
        
        let xmin = min([polygon[0][0], polygon[1][0], polygon[2][0]]);
        let ymin = min([polygon[0][1], polygon[1][1], polygon[2][1]]);
        let xmax = max([polygon[0][0], polygon[1][0], polygon[2][0]]);
        let ymax = max([polygon[0][1], polygon[1][1], polygon[2][1]]);

        console.log("xmin:" + xmin, "xmax:" + xmax, "ymin:" + ymin, "ymax:" + ymax);

        // for(let i = 0; i < polygon.length - 1; i++) {
        //     xmin = min(polygon[i][0], polygon[i+1][0]);
        //     ymin = min(polygon[i][1], polygon[i+1][1]);
        //     xmax = max(polygon[i][0], polygon[i+1][0]);
        //     ymax = max(polygon[i][1], polygon[i+1][1]);
        // }

        // let color = getAvgColor(gradient, xmin, ymin, xmax, ymax);
        // fill(color);
        // stroke(color);

        /* create polygon */
        beginShape();
        for(let i = 0; i < polygon.length; i++) {
            /* add vertex to shape */
            vertex(polygon[i][0],polygon[i][1]); 
        }
        endShape();

    }
}

function updatePoints() {
    for(let i = 0; i < points.length; i++) {
        points[i][0]++;
        points[i][1]--;

        if(points[i][0] > 3/2*width) points[i][0] = -1/2*width;
        if(points[i][1] < -1/2*height) points[i][1] = 3/2*height;
    }

    // for(let i = 0; i < points.length; i++) {
    //     let p1 = points[i];
    //     let p1x = p1[0];
    //     let p1y = p1[1];

    //     for(let j = 0; j < points.length; j++) {
    //         let p2 = points[j];
    //         let p2x = p2[0];
    //         let p2y = p2[1];

    //         if(dist(p1x, p1y, p2x, p2y) && p1 !== p2) {
    //             separatePoints(p1, p2);
    //         }
    //     }
    // }
}

/* Prevents up and down arrow from moving page up and down */
window.addEventListener("keydown", function(e) {
    // space and arrow keys
    if([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
        e.preventDefault();
    }
}, false);
