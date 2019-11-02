from p5 import *
import math

DOWN = 0
UP = 1

class Turtle:
    def __init__(self):
        self.x = 0
        self.y = 0
        self.heading = 0
        self.pen_state = DOWN
        self.steps = 0
        self.stack = []

    def move_to(self, x, y):
        self.x = x
        self.y = y

    def forward(self, step):
        x1 = self.x + step * math.cos(math.radians(self.heading))
        y1 = self.y + step * math.sin(math.radians(self.heading))

        if self.pen_state == DOWN:
            line((self.x, self.y), (x1, y1))

        self.x = x1
        self.y = y1

        self.steps += 1

    def right(self, angle):
        self.heading += angle

    def left(self, angle):
        self.heading -= angle

    def set_heading(self, angle):
        self.heading = angle

    def pen_down(self):
        self.pen_state = DOWN

    def pen_up(self):
        self.pen_state = UP

    def push(self):
        self.stack.append({x: self.x, y: self.y, heading:self.heading})

    def pop(self):
        state = self.stack.pop()
        self.x = state.x
        self.y = state.y
        self.heading = state.heading
