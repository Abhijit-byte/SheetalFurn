from PIL import Image, ImageChops
import os
import numpy as np

source_path = r"C:\Users\ABHIJIT DASH\.gemini\antigravity-ide\brain\64e5df34-74c0-490b-b1fe-b0e2d816624a\media__1784758481599.jpg"
dest_dir = r"d:\Projects\sheetal\fur-niture\products\Seating\Conference Chairs\Conference 11"

os.makedirs(dest_dir, exist_ok=True)

img = Image.open(source_path)
width, height = img.size

if img.mode == 'RGBA':
    img = img.convert('RGB')
    
data = np.array(img.convert('L'))
mid_start = int(height * 0.4)
mid_end = int(height * 0.6)
row_brightness = data[mid_start:mid_end, :].mean(axis=1)
row_split = mid_start + np.argmax(row_brightness)

col_width = width // 3
colors = ["black", "brown", "green", "grey", "navy", "maroon"]

for i, color in enumerate(colors):
    row = i // 3
    col = i % 3
    
    left = col * col_width
    right = left + col_width
    
    if row == 0:
        upper = 0
        lower = row_split
    else:
        upper = row_split
        lower = height
        
    cropped_img = img.crop((left, upper, right, lower))
    
    bg_color = cropped_img.getpixel((5, 5))
    
    bg = Image.new("RGB", cropped_img.size, bg_color)
    diff = ImageChops.difference(cropped_img.convert("RGB"), bg)
    diff = diff.convert("L").point(lambda x: 255 if x > 15 else 0)
    bbox = diff.getbbox()
    
    if bbox:
        # Pad slightly
        p = 20
        bbox = (max(0, bbox[0]-p), max(0, bbox[1]-p), min(cropped_img.width, bbox[2]+p), min(cropped_img.height, bbox[3]+p))
        cropped_img = cropped_img.crop(bbox)
        
    cropped_img.save(os.path.join(dest_dir, f"conference-11-{color}.png"), "PNG")
    print(f"Saved conference-11-{color}.png with bbox {bbox}")

