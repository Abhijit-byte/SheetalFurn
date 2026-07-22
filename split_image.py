from PIL import Image
import os

source_path = r"C:\Users\tunak\.gemini\antigravity\brain\7184298e-f847-4866-8df9-f22812dcd9c2\.user_uploaded\media__1784741870893.png"
dest_dir = r"e:\desk\Sheetal\SheetalFurn\products\Seating\Executive Chairs\Indigo"

if not os.path.exists(dest_dir):
    os.makedirs(dest_dir)

im = Image.open(source_path)
width, height = im.size

col_width = width // 3
row_height = height // 2

colors = [
    ["black", "brown", "green"],
    ["grey", "navy", "crimson"]
]

for row in range(2):
    for col in range(3):
        left = col * col_width
        upper = row * row_height
        right = left + col_width
        lower = upper + row_height
        
        box = (left, upper, right, lower)
        cropped_im = im.crop(box)
        
        color_name = colors[row][col]
        dest_path = os.path.join(dest_dir, f"indigo-{color_name}.png")
        cropped_im.save(dest_path)
        print(f"Saved {dest_path}")
