void setup() {
    size(640, 640);
}

void draw() {
    background(255);

    int numLines = 40;

    stroke(0);
    /* strokeWeight(4); */

    noFill();
    for(float i = 0; i <= numLines; i++) {
        float y = i * (height / (numLines -1));

        beginShape();
        curveVertex(0, y);
        for(float j = 0; j < width; j += 2) {
            float x = j * (width / 100);

            float xOffset;
            float yOffset;
            float distToCenter = dist(x, y, width/2, height/2);
            float distToMiddle = dist(x, y, width/2, y);
            float radius = 100;

            if(distToCenter < radius) {
                xOffset = 0;
                yOffset = 100 / (distToCenter * sin(distToCenter));
            }
            else {
                xOffset = 0;
                yOffset = 0;
            }

            curveVertex(x + xOffset, y + yOffset);
        }
        endShape();
    }

}

