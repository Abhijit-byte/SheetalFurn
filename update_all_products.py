import json
import os
import re

color_definitions = {
    "black": {"name": "Classic Black", "hex": "#222222"},
    "brown": {"name": "Saddle Brown", "hex": "#6B4226"},
    "green": {"name": "Forest Green", "hex": "#507D67"},
    "grey": {"name": "Slate Grey", "hex": "#8C9298"},
    "lightgrey": {"name": "Light Grey", "hex": "#A3A3A3"},
    "brownishgrey": {"name": "Brownish Grey", "hex": "#635B55"},
    "charcoal": {"name": "Charcoal Black", "hex": "#333333"},
    "navy": {"name": "Midnight Navy", "hex": "#2D3E50"},
    "maroon": {"name": "Crimson Maroon", "hex": "#8A2B35"},
    "burgundy": {"name": "Deep Burgundy", "hex": "#6B1426"},
    "orange": {"name": "Terracotta Orange", "hex": "#E87A5D"},
    "white": {"name": "Pure White", "hex": "#E8E8E8"},
    "blue": {"name": "Royal Blue", "hex": "#3B6998"},
    "red": {"name": "Ruby Red", "hex": "#A83232"},
    "yellow": {"name": "Mustard Yellow", "hex": "#D6A738"},
    "cream": {"name": "Oatmeal Cream", "hex": "#D8C8B8"},
    "beige": {"name": "Warm Beige", "hex": "#E0D5C1"},
    "tan": {"name": "Caramel Tan", "hex": "#C87D55"}
}

# Mapping of product key -> (category_path_in_js, folder_path, color_list)
# Category keys:
# lounge chairs: under 'lounge-chairs' (or 'seating.lounge-chairs')
# sofas: under 'sofas'
# conference chairs: under 'conference-chairs'

products_config = {
    # Lounge Chairs (split across Public seating, High chairs, Cafe chairs)
    "lounge-1": ("lounge-chairs", "products/Seating/Public seating/Public seating 1", "lounge-1", ["orange", "brown", "green", "grey", "navy", "maroon"]),
    "lounge-2": ("lounge-chairs", "products/Seating/High chairs/High chair 2", "lounge-2", ["green", "black", "white", "blue", "red", "yellow"]),
    "lounge-3": ("lounge-chairs", "products/Seating/High chairs/High chair 1", "lounge-3", ["black", "brown", "green", "grey", "navy", "maroon"]),
    "lounge-4": ("lounge-chairs", "products/Seating/Public seating/Public seating 2", "lounge-4", ["black", "brown", "green", "grey", "navy", "maroon"]),
    "lounge-5": ("lounge-chairs", "products/Seating/Cafe chairs/Cafe chair 1", "lounge-5", ["maroon", "brown", "green", "grey", "navy", "black"]),
    "lounge-6": ("lounge-chairs", "products/Seating/Public seating/Public seating 3", "lounge-6", ["black", "brown", "green", "grey", "navy", "maroon"]),
    "lounge-7": ("lounge-chairs", "products/Seating/Public seating/Public seating 4", "lounge-7", ["black", "brown", "green", "grey", "navy", "maroon"]),
    "lounge-8": ("lounge-chairs", "products/Seating/Public seating/Public seating 5", "lounge-8", ["blue", "green", "grey", "navy", "maroon", "brown"]),
    "lounge-9": ("lounge-chairs", "products/Seating/Cafe chairs/Cafe chair 2", "lounge-9", ["black", "brown", "green", "grey", "navy", "maroon"]),
    "lounge-10": ("lounge-chairs", "products/Seating/Cafe chairs/Cafe chair 3", "lounge-10", ["black", "brown", "green", "grey", "navy", "maroon"]),
    "lounge-11": ("lounge-chairs", "products/Seating/Public seating/Public seating 6", "lounge-11", ["blue", "brown", "green", "grey", "navy", "maroon"]),
    "lounge-12": ("lounge-chairs", "products/Seating/High chairs/High chair 3", "lounge-12", ["black", "brown", "green", "grey", "navy", "maroon"]),
    "lounge-14": ("lounge-chairs", "products/Seating/High chairs/High chair 4", "lounge-14", ["black", "brown", "green", "grey", "navy", "maroon"]),

    # Sofas
    "sofa-1": ("sofas", "products/Seating/Sofas/Sofa 1", "sofa-1", ["grey", "brown", "green", "lightgrey", "navy", "maroon"]),
    "sofa-2": ("sofas", "products/Seating/Sofas/Sofa 2", "sofa-2", ["charcoal", "brown", "green", "grey", "navy", "maroon"]),
    "sofa-3": ("sofas", "products/Seating/Sofas/Sofa 3", "sofa-3", ["tan", "green", "grey", "navy", "maroon", "black"]),
    "sofa-4": ("sofas", "products/Seating/Sofas/Sofa 4", "sofa-4", ["grey", "brown", "green", "lightgrey", "navy", "burgundy"]),
    "sofa-5": ("sofas", "products/Seating/Sofas/Sofa 5", "sofa-5", ["brownishgrey", "brown", "green", "lightgrey", "navy", "burgundy"]),

    # Conference / Visitors Chairs
    "conference-1": ("conference-chairs", "products/Seating/Visitors Chairs/Conference 1", "conference-1", ["black", "brown", "green", "grey", "navy", "maroon"]),
    "conference-2": ("conference-chairs", "products/Seating/Visitors Chairs/Conference 2", "conference-2", ["black", "brown", "green", "grey", "navy", "maroon"]),
    "conference-3": ("conference-chairs", "products/Seating/Visitors Chairs/Conference 3", "conference-3", ["cream", "brown", "green", "grey", "navy", "maroon"]),
    "conference-4": ("conference-chairs", "products/Seating/Visitors Chairs/Conference 4", "conference-4", ["beige", "brown", "green", "grey", "navy", "maroon"]),
    "conference-5": ("conference-chairs", "products/Seating/Visitors Chairs/Conference 5", "conference-5", ["black", "brown", "green", "grey", "navy", "maroon"]),
    "conference-6": ("conference-chairs", "products/Seating/Visitors Chairs/Conference 6", "conference-6", ["cream", "brown", "green", "grey", "navy", "maroon"]),
    "conference-7": ("conference-chairs", "products/Seating/Visitors Chairs/Conference 7", "conference-7", ["black", "brown", "green", "grey", "navy", "maroon"]),
    "conference-8": ("conference-chairs", "products/Seating/Visitors Chairs/Conference 8", "conference-8", ["black", "brown", "green", "grey", "navy", "maroon"]),
    "conference-9": ("conference-chairs", "products/Seating/Visitors Chairs/Conference 9", "conference-9", ["black", "brown", "green", "grey", "navy", "maroon"]),
    "conference-10": ("conference-chairs", "products/Seating/Visitors Chairs/Conference 10", "conference-10", ["beige", "brown", "green", "grey", "navy", "maroon"]),
    "conference-11": ("conference-chairs", "products/Seating/Visitors Chairs/Conference 11", "conference-11", ["black", "brown", "green", "grey", "navy", "maroon"]),
}

def update_product_data():
    js_path = r"d:\Projects\sheetal\fur-niture\product-data.js"
    orig_path = r"d:\Projects\sheetal\fur-niture\original-product-data.js"
    
    # Read original if product-data has syntax error
    source = orig_path if os.path.exists(orig_path) else js_path
    
    with open(source, 'r', encoding='utf-8') as f:
        content = f.read()
        
    # Extract JSON object reliably
    start_idx = content.find('{')
    brace_count = 0
    in_string = False
    escape = False
    end_idx = -1

    for i in range(start_idx, len(content)):
        char = content[i]
        if escape:
            escape = False
            continue
        if char == '\\':
            escape = True
            continue
        if char == '"':
            in_string = not in_string
            continue
        if not in_string:
            if char == '{':
                brace_count += 1
            elif char == '}':
                brace_count -= 1
                if brace_count == 0:
                    end_idx = i
                    break

    if start_idx == -1 or end_idx == -1:
        print("Could not find productData object!")
        return

    json_str = content[start_idx:end_idx+1]
    
    try:
        data = json.loads(json_str)
    except Exception as e:
        print("JSON parse error from file:", e)
        return

    for key, (cat_key, folder, prefix, colors) in products_config.items():
        if cat_key not in data:
            data[cat_key] = {}
            
        prod_entry = data[cat_key].get(key, {})
        
        # Build images and finishes array
        img_list = []
        fin_list = []
        
        for i, col in enumerate(colors):
            img_path = f"{folder}/{prefix}-{col}.png"
            cdef = color_definitions.get(col, {"name": col.capitalize(), "hex": "#888888"})
            
            img_list.append(img_path)
            fin_entry = {
                "name": cdef["name"] + (" (Original)" if i == 0 else ""),
                "color": cdef["hex"],
                "image": img_path
            }
            if i == 0:
                fin_entry["isOriginal"] = True
            fin_list.append(fin_entry)
            
        prod_entry["images"] = img_list
        prod_entry["finishes"] = fin_list
        
        if "name" not in prod_entry:
            # e.g. "lounge-1" -> "Lounge 1"
            parts = key.split('-')
            prod_entry["name"] = " ".join([p.capitalize() for p in parts])
            
        if "dimensions" not in prod_entry:
            prod_entry["dimensions"] = "Standard Dimensions"
            
        if "description" not in prod_entry:
            prod_entry["description"] = f"A sleek, premium {prod_entry['name']} designed to bring exceptional ergonomics, style, and utility to modern settings."
            
        if "specifications" not in prod_entry:
            prod_entry["specifications"] = {
                "Frame/Structure": "High-tensile strength construction with premium architectural coating",
                "Upholstery/Finish": "Premium contract-grade finishes built for durability",
                "Ergonomics": "Contoured profiles, premium dynamic support adjustments",
                "Warranty & Support": "Sheetal Furnitures Guarantee and cooperation options"
            }
            
        if "materials" not in prod_entry:
            prod_entry["materials"] = {
                "Base": "Premium quality components / structural support bases",
                "Cladding & Finishes": "Highly durable textures, BIFMA certified hardware"
            }
            
        data[cat_key][key] = prod_entry

    new_js = "const productData = " + json.dumps(data, indent=2) + ";\n\nif (typeof module !== 'undefined' && module.exports) {\n  module.exports = productData;\n}\n"
    
    with open(js_path, 'w', encoding='utf-8') as f:
        f.write(new_js)
        
    print("Successfully updated product-data.js!")

if __name__ == '__main__':
    update_product_data()
