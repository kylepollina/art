import json
import os
import random

THIS_FOLDER = os.path.dirname(os.path.abspath(__file__))
my_file = os.path.join(THIS_FOLDER, 'data/palettes.json')

# read file
with open(my_file, 'r') as palettes_file:
    data=palettes_file.read()

# parse file
palettes_data = json.loads(data)

def get_palette(n):
    return palettes_data[n]

def random_palette():
    index = random.randrange(len(palettes_data) - 1)
    print("Palette index: " + str(index))
    return palettes_data[index]
