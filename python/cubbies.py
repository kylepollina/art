from p5 import *
from utilities.palettes import *
import random

# palette = random_palette()
palette = get_palette(250)

def setup():
    size(640, 640)
    no_loop()

def draw():
    background(255)
    stroke(255)
    stroke_weight(20)
    stroke_cap(PROJECT)
    stroke_join(ROUND) 
    
    translate(10, 10)
    sketch_width = width - 20
    sketch_height = height - 20
    
    numboxes = 5
    for i in range(numboxes):
        x = sketch_width / numboxes * i

        for j in range(numboxes):
            y = sketch_height / numboxes * j 
            
            boxlen = sketch_width/numboxes
            boxheight = sketch_height/numboxes

            index1 = random.randrange(5)
            fill(palette[index1])
            rect((x, y), boxlen, boxheight)

            index2 = random.randrange(5)
            while index2 == index1:
                index2 = random.randrange(5)

            fill(palette[index2])

            x2 = x + boxlen/2
            y2 = y + boxlen/2

            mod1 = random.randint(0,1)
            mod2 = random.randint(0,1)

            mod3 = -1 if mod2 == 0 else 1
            mod4 = -1 if mod1 == 0 else 1

            # rect((x + boxlen/2 * mod1, y + boxheight/2 * mod2), boxlen/2, boxheight/2)
            # line((x2, y2), (x2 - boxlen/2 * mod4, y2 - boxheight/2 * mod3))

            rect((x2, y2), boxlen/2, boxheight/2)
            line((x, y), (x2, y2))

            

def key_pressed():
    if key == " ":
        global palette
        palette = random_palette()
        redraw()

def mouse_pressed():
    save()


run()
