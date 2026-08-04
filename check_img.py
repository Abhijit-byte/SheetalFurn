from PIL import Image

paths = [
    r"C:\Users\tunak\.gemini\antigravity\brain\7184298e-f847-4866-8df9-f22812dcd9c2\.user_uploaded\media__1784780824277.jpg",
    r"C:\Users\tunak\.gemini\antigravity\brain\7184298e-f847-4866-8df9-f22812dcd9c2\.user_uploaded\media__1784780877986.jpg",
    r"C:\Users\tunak\.gemini\antigravity\brain\7184298e-f847-4866-8df9-f22812dcd9c2\.user_uploaded\media__1784780924041.jpg"
]

for p in paths:
    img = Image.open(p)
    print(f"{p[-25:]}: size {img.size}")
