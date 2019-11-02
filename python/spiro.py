from p5 import *
from utilities.turtle import Turtle

t = Turtle()

def setup():
    size(640, 640)


def draw():
    background(255)
    stroke_weight(1)
    t.set_heading(0)
    t.move_to(width/4, height/4)

    length = 400
    draw_spiro(length)

def draw_spiro(length):
    angle = 121

    level = (mouse_x - 100) / 10

    t.forward(length)
    
    for i in range(length):
        t.right(angle)
        step = length - level * (i + 1)
        if step > 0:
            t.forward(step)

run()
