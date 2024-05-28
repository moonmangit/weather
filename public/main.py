import sys
import os
from PIL import Image

# ex: python main.py --folder weather/ --scales 0.25,0.75,0.85

folder = sys.argv[sys.argv.index("--folder")+1]
scales = sys.argv[sys.argv.index("--scales")+1].split(",")

if not os.path.exists("__output"):
    os.makedirs("__output")

images = [f for f in os.listdir(folder) if f.endswith('.jpg') or f.endswith('.png')]

work_dir = os.getcwd()
for scale in scales:
    if not os.path.exists(work_dir + "\\__output\\" + scale):
        os.makedirs(work_dir + "\\__output\\" + scale)
    scale_float = float(scale)
    for image in images:
        img = Image.open(folder + image)
        img = img.resize((int(img.width*scale_float), int(img.height*scale_float)))
        path = work_dir + "\\__output\\" + scale + "\\" + image 
        print(path)
        img.save(path)
