/* lisa.js */

var img;
var triangles = [];
var num_splits = 1;
var max_splits = 14;
var is_updating;

function preload() {
    img = loadImage("lisa.png");
}

function setup() {
    var canvas = createCanvas(500,500);
    canvas.parent("lisa-holder");

    img.loadPixels();

    noStroke();
    noLoop();
}

function draw() {
    background(250, 250, 255);
    var t1 = new Triangle(0,0, width,0, width,height);
    var t2 = new Triangle(0,0, 0,height, width,height);

    t1.set_avg_color(img);
    t2.set_avg_color(img);

    triangles.push(t1);
    triangles.push(t2);

    recursive_split(t1, num_splits);
    recursive_split(t2, num_splits);

    /* prevent the sketch from updating while we are still processing the triangles */
    is_updating = true;
    for(let i = 0; i < triangles.length; i++) {
        var t = triangles[i];
        t.show();
    }
    is_updating = false;
}

function mouseMoved() {
    /* prevent the sketch from updating while we are still processing the triangles */
    if (is_updating == false) {
        if (mouseX < img.width) {
            num_splits = floor((mouseX / img.width) * max_splits)
        } else { num_splits = max_splits }
        triangles = []
        redraw()
    }
}

/*  Recursively split each triangle into 2, n amount of times */
function recursive_split(triangle, n) {
    if(n > max_splits) {
        return;
    }
    n--;
    
    /* Base case */
    if(n <= 0) {
        return;
    }

    /* Create vectors from points A,B,C of given triangle */
    var a = new Point(triangle.x1, triangle.y1);
    var b = new Point(triangle.x2, triangle.y2);
    var c = new Point(triangle.x3, triangle.y3);
    var ab = createVector(a.x - b.x, a.y - b.y);
    var ac = createVector(a.x - c.x, a.y - c.y);
    var bc = createVector(b.x - c.x, b.y - c.y);


    /* Find hypotenuse of given triangle */
    if(approx_equal(PI / 2, ab.angleBetween(ac), 20)) {
        /* BC is hypotenuse */
        var halfway = new Point(~~((b.x + c.x) / 2), ~~((b.y + c.y) / 2));
        var split1 = new Triangle(a.x,a.y, b.x,b.y, halfway.x,halfway.y);
        var split2 = new Triangle(a.x,a.y, c.x,c.y, halfway.x,halfway.y);

        if(n == 1) {
            split1.set_avg_color(img);
            split2.set_avg_color(img);
            triangles.push(split1);
            triangles.push(split2);
        }

        recursive_split(split1, n);
        recursive_split(split2, n);

    }    
    else if(approx_equal(PI / 2, ab.angleBetween(bc), 20)) {
        /* AC is hypotenuse */
        var halfway = new Point(~~((a.x + c.x) / 2), ~~((a.y + c.y) / 2));
        var split1 = new Triangle(a.x,a.y, b.x,b.y, halfway.x,halfway.y);
        var split2 = new Triangle(b.x,b.y, c.x,c.y, halfway.x,halfway.y);

        if(n == 1) {
            split1.set_avg_color(img);
            split2.set_avg_color(img);
            triangles.push(split1);
            triangles.push(split2);

        }

        recursive_split(split1, n);
        recursive_split(split2, n);
    }
    else if(approx_equal(PI / 2, ac.angleBetween(bc), 20)) {
        /* AB is hypotenuse */
        var halfway = new Point(~~((a.x + b.x) / 2), ~~((a.y + b.y) / 2));
        var split1 = new Triangle(a.x,a.y, c.x,c.y, halfway.x,halfway.y);
        var split2 = new Triangle(b.x,b.y, c.x,c.y, halfway.x,halfway.y);

        if(n == 1) {
            split1.set_avg_color(img);
            split2.set_avg_color(img);
            triangles.push(split1);
            triangles.push(split2);
        }

        recursive_split(split1, n);
        recursive_split(split2, n);
    }
    else {
        alert("Cannot split further");
        return;
    }
}

/*  Returns true if actual value is within a percentage tolerence of
    a desired value
*/
function approx_equal(desired, actual, tolerance_percent) {
    var diff = Math.abs(desired - actual);
    var tolerance = tolerance_percent / 100 * desired;
    return diff < tolerance;
}

class Point {
    constructor(x,y) {
        this.x = Math.floor(x);
        this.y = Math.floor(y);
    }
}

class Triangle {
    constructor(x1,y1,x2,y2,x3,y3) {
        this.x1 = x1;
        this.y1 = y1;
        this.x2 = x2;
        this.y2 = y2;
        this.x3 = x3;
        this.y3 = y3;

        this.r = 0;
        this.g = 0;
        this.b = 0;
    }

    /*  Set the color of the triangle to the average of the pixels defined 
        by the triangle 
    */
    set_avg_color(image) {
        /* loop through square of pixels defined by points of triangle */   
        var min_x = Math.min(this.x1, this.x2, this.x3);
        var min_y = Math.min(this.y1, this.y2, this.y3);
        var max_x = Math.max(this.x1, this.x2, this.x3);
        var max_y = Math.max(this.y1, this.y2, this.y3);

        var r_tot = 0;
        var g_tot = 0;
        var b_tot = 0;
        var total = 0;

        for(let i = min_x; i < max_x; i++) {
            for(let j = min_y; j < max_y; j++) {
                /* if coordinate is within the triangle */
                if(this.is_inside(i,j)) {
                    var index = (i + j * img.width) * 4;

                    r_tot += image.pixels[index];
                    g_tot += image.pixels[index + 1];
                    b_tot += image.pixels[index + 2];
                    total++;
                }
            }
        }

        var r_avg = r_tot / total;
        var g_avg = g_tot / total;
        var b_avg = b_tot / total;

        this.r = r_avg;
        this.g = g_avg;
        this.b = b_avg;
    }

    show() {
        fill(this.r,this.g,this.b);
        stroke(this.r, this.g, this.b);
        triangle(this.x1,this.y1,this.x2,this.y2,this.x3,this.y3);
    }

    /*  Check whether (x,y) lies inside the triangle */
    is_inside(x,y) {
        /* Calculate area of current triangle ABC */
        var A = area(this.x1,this.y1,this.x2,this.y2,this.x3,this.y3);

        /* Calculate area of (x,y)BC */
        var A1 = area(x,y,this.x2,this.y2,this.x3,this.y3);

        /* Calculate area of A(x,y)C */
        var A2 = area(this.x1,this.y1,x,y,this.x3,this.y3);

        /* Calculate area of AB(x,y) */
        var A3 = area(this.x1,this.y1,this.x2,this.y2,x,y);

        /* Check if sum of A1, A2, and A3 are the same as A */
        return (A == A1 + A2 + A3);
    }
};

/*  Returns the area of triangle */
function area(x1, y1, x2, y2, x3, y3) {
    var side_ab = Math.sqrt(Math.pow(x1-x2,2) + Math.pow(y1-y2,2));
    var side_ac = Math.sqrt(Math.pow(x1-x3,2) + Math.pow(y1-y3,2));
    var side_bc = Math.sqrt(Math.pow(x2-x3,2) + Math.pow(y2-y3,2));
    var s = (side_ab + side_ac + side_bc) / 2;
    return Math.sqrt(s*((s-side_ab)*(s-side_ac)*(s-side_bc)));
}



/* Prevents up and down arrow from moving page up and down */
window.addEventListener("keydown", function(e) {
    // space and arrow keys
    if([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
        e.preventDefault();
    }
}, false);
