from PIL import Image
import os
import numpy as np

source_path = r"C:\Users\tunak\.gemini\antigravity\brain\7184298e-f847-4866-8df9-f22812dcd9c2\.user_uploaded\media_1786655452463.jpg"
dest_dir = r"e:\desk\Sheetal\SheetalFurn\products\Workstations\Wooden workstations\Workstation 3"

os.makedirs(dest_dir, exist_ok=True)

img = Image.open(source_path)
width, height = img.size

if img.mode != 'RGBA':
    img = img.convert('RGBA')
    
col_width = width // 3
row_height = height // 2

colors = ["original", "walnut", "darkoak", "white", "grey", "maple"]

for i, color in enumerate(colors):
    row = i // 3
    col = i % 3
    
    left = col * col_width
    right = left + col_width
    upper = row * row_height
    lower = upper + row_height
        
    cell_img = img.crop((left, upper, right, lower))
    
    # Remove white background
    data = np.array(cell_img)
    r, g, b, a = data.T
    white_areas = (r > 230) & (g > 230) & (b > 230)
    data[..., 3][white_areas.T] = 0
    cell_img = Image.fromarray(data)
    
    # Get bbox using ONLY the alpha channel
    bbox = cell_img.split()[-1].getbbox()
    if bbox:
        # tight crop
        pad = 10
        tight_box = (
            max(0, bbox[0] - pad),
            max(0, bbox[1] - pad),
            min(cell_img.width, bbox[2] + pad),
            min(cell_img.height, bbox[3] + pad)
        )
        cell_img = cell_img.crop(tight_box)
    
    cell_img.save(os.path.join(dest_dir, f"workstation-3-{color}.png"), "PNG")
    print(f"Saved workstation-3-{color}.png with bbox: {bbox}")
