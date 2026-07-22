import os
from PIL import Image
import numpy as np

source_path = r"C:\Users\tunak\.gemini\antigravity\brain\7184298e-f847-4866-8df9-f22812dcd9c2\.user_uploaded\media__1784743629934.jpg"
img = Image.open(source_path).convert('L')
data = np.array(img)
height, width = data.shape

mid_start = int(height * 0.45)
mid_end = int(height * 0.55)

row_brightness = data[mid_start:mid_end, :].mean(axis=1)
best_split = mid_start + np.argmax(row_brightness)

print(f"Total height: {height}")
print(f"Middle (height // 2): {height // 2}")
print(f"Best split line (whitest row): {best_split}")
