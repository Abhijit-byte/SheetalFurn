from PIL import Image
import os

source_path = r"C:\Users\tunak\.gemini\antigravity\brain\7184298e-f847-4866-8df9-f22812dcd9c2\.user_uploaded\media__1784790176681.png"
dest_dir = r"e:\desk\Sheetal\SheetalFurn\products\Woodwork\Cafe tables\Cafe 8"

os.makedirs(dest_dir, exist_ok=True)

img = Image.open(source_path)
width, height = img.size

if img.mode == 'RGBA':
    img = img.convert('RGB')
    
col_width = width // 3
row_height = height // 2

colors = ["silver", "gold", "black", "copper", "bronze", "white"]

for i, color in enumerate(colors):
    row = i // 3
    col = i % 3
    
    left = col * col_width
    right = left + col_width
    upper = row * row_height
    lower = upper + row_height
        
    cropped_img = img.crop((left, upper, right, lower))
    
    cropped_img.save(os.path.join(dest_dir, f"cafe-8-{color}.png"), "PNG")
    print(f"Saved cafe-8-{color}.png")
