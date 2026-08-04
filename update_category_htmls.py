import re
import os

products_config = {
    # Lounge Chairs
    "Lounge 1": ("lounge-chairs.html", "products/Seating/Lounge Chairs/Lounge 1", "lounge-1", ["orange", "brown", "green", "grey", "navy", "maroon"]),
    "Lounge 2": ("lounge-chairs.html", "products/Seating/Lounge Chairs/Lounge 2", "lounge-2", ["green", "black", "white", "blue", "red", "yellow"]),
    "Lounge 3": ("lounge-chairs.html", "products/Seating/Lounge Chairs/Lounge 3", "lounge-3", ["black", "brown", "green", "grey", "navy", "maroon"]),
    "Lounge 4": ("lounge-chairs.html", "products/Seating/Lounge Chairs/Lounge 4", "lounge-4", ["black", "brown", "green", "grey", "navy", "maroon"]),
    "Lounge 5": ("lounge-chairs.html", "products/Seating/Lounge Chairs/Lounge 5", "lounge-5", ["maroon", "brown", "green", "grey", "navy", "black"]),
    "Lounge 6": ("lounge-chairs.html", "products/Seating/Lounge Chairs/Lounge 6", "lounge-6", ["black", "brown", "green", "grey", "navy", "maroon"]),
    "Lounge 7": ("lounge-chairs.html", "products/Seating/Lounge Chairs/Lounge 7", "lounge-7", ["black", "brown", "green", "grey", "navy", "maroon"]),
    "Lounge 8": ("lounge-chairs.html", "products/Seating/Lounge Chairs/Lounge 8", "lounge-8", ["blue", "green", "grey", "navy", "maroon", "brown"]),
    "Lounge 9": ("lounge-chairs.html", "products/Seating/Lounge Chairs/Lounge 9", "lounge-9", ["black", "brown", "green", "grey", "navy", "maroon"]),
    "Lounge 10": ("lounge-chairs.html", "products/Seating/Lounge Chairs/Lounge 10", "lounge-10", ["black", "brown", "green", "grey", "navy", "maroon"]),
    "Lounge 11": ("lounge-chairs.html", "products/Seating/Lounge Chairs/Lounge 11", "lounge-11", ["blue", "brown", "green", "grey", "navy", "maroon"]),
    "Lounge 12": ("lounge-chairs.html", "products/Seating/Lounge Chairs/Lounge 12", "lounge-12", ["black", "brown", "green", "grey", "navy", "maroon"]),
    "Lounge 14": ("lounge-chairs.html", "products/Seating/Lounge Chairs/Lounge 14", "lounge-14", ["black", "brown", "green", "grey", "navy", "maroon"]),

    # Sofas
    "Sofa 1": ("sofas.html", "products/Seating/Sofas/Sofa 1", "sofa-1", ["grey", "brown", "green", "lightgrey", "navy", "maroon"]),
    "Sofa 2": ("sofas.html", "products/Seating/Sofas/Sofa 2", "sofa-2", ["charcoal", "brown", "green", "grey", "navy", "maroon"]),
    "Sofa 3": ("sofas.html", "products/Seating/Sofas/Sofa 3", "sofa-3", ["tan", "green", "grey", "navy", "maroon", "black"]),
    "Sofa 4": ("sofas.html", "products/Seating/Sofas/Sofa 4", "sofa-4", ["grey", "brown", "green", "lightgrey", "navy", "burgundy"]),
    "Sofa 5": ("sofas.html", "products/Seating/Sofas/Sofa 5", "sofa-5", ["brownishgrey", "brown", "green", "lightgrey", "navy", "burgundy"]),

    # Conference Chairs
    "Conference 1": ("conference-chairs.html", "products/Seating/Conference Chairs/Conference 1", "conference-1", ["black", "brown", "green", "grey", "navy", "maroon"]),
    "Conference 2": ("conference-chairs.html", "products/Seating/Conference Chairs/Conference 2", "conference-2", ["black", "brown", "green", "grey", "navy", "maroon"]),
    "Conference 3": ("conference-chairs.html", "products/Seating/Conference Chairs/Conference 3", "conference-3", ["cream", "brown", "green", "grey", "navy", "maroon"]),
    "Conference 4": ("conference-chairs.html", "products/Seating/Conference Chairs/Conference 4", "conference-4", ["beige", "brown", "green", "grey", "navy", "maroon"]),
    "Conference 5": ("conference-chairs.html", "products/Seating/Conference Chairs/Conference 5", "conference-5", ["black", "brown", "green", "grey", "navy", "maroon"]),
    "Conference 6": ("conference-chairs.html", "products/Seating/Conference Chairs/Conference 6", "conference-6", ["cream", "brown", "green", "grey", "navy", "maroon"]),
    "Conference 7": ("conference-chairs.html", "products/Seating/Conference Chairs/Conference 7", "conference-7", ["black", "brown", "green", "grey", "navy", "maroon"]),
    "Conference 8": ("conference-chairs.html", "products/Seating/Conference Chairs/Conference 8", "conference-8", ["black", "brown", "green", "grey", "navy", "maroon"]),
    "Conference 9": ("conference-chairs.html", "products/Seating/Conference Chairs/Conference 9", "conference-9", ["black", "brown", "green", "grey", "navy", "maroon"]),
    "Conference 10": ("conference-chairs.html", "products/Seating/Conference Chairs/Conference 10", "conference-10", ["beige", "brown", "green", "grey", "navy", "maroon"]),
    "Conference 11": ("conference-chairs.html", "products/Seating/Conference Chairs/Conference 11", "conference-11", ["black", "brown", "green", "grey", "navy", "maroon"]),
}

def update_html_files():
    base_dir = r"d:\Projects\sheetal\fur-niture"
    
    # First revert git changes to HTML files if git is clean or checkout HTMLs
    os.system(f"git checkout -- {base_dir}\\lounge-chairs.html {base_dir}\\sofas.html {base_dir}\\conference-chairs.html")
    
    files_map = {}
    for prod_name, (html_file, folder, prefix, colors) in products_config.items():
        if html_file not in files_map:
            files_map[html_file] = {}
        files_map[html_file][prod_name] = (folder, prefix, colors)
        
    for html_file, items in files_map.items():
        full_path = os.path.join(base_dir, html_file)
        if not os.path.exists(full_path):
            continue
            
        with open(full_path, 'r', encoding='utf-8') as f:
            content = f.read()
            
        cards = content.split('<div class="product-card">')
        new_cards = [cards[0]]
        
        for card in cards[1:]:
            # Find product name in this card
            name_match = re.search(r'<h3 class="product-name">([^<]+)</h3>', card)
            if name_match:
                prod_name = name_match.group(1).strip()
                if prod_name in items:
                    folder, prefix, colors = items[prod_name]
                    
                    imgs_html = "\n                ".join([
                        f'<img src="{folder}/{prefix}-{col}.png" alt="{prod_name}" class="product-image">'
                        for col in colors
                    ])
                    scroller_html = f'<div class="product-image-scroller">\n                {imgs_html}\n              </div>'
                    
                    card = re.sub(
                        r'<div class="product-image-scroller">[\s\S]*?</div>',
                        scroller_html,
                        card
                    )
            new_cards.append(card)
            
        new_content = '<div class="product-card">'.join(new_cards)
        
        with open(full_path, 'w', encoding='utf-8') as f:
            f.write(new_content)
            
        print(f"Cleanly updated {html_file}!")

if __name__ == '__main__':
    update_html_files()
