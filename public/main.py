import os
from PIL import Image

def bulk_convert_images(input_folder, output_folder, target_format):
    """
    Converts all images in input_folder to target_format and saves them to output_folder.
    """
    # 1. Ensure output folder exists
    if not os.path.exists(output_folder):
        os.makedirs(output_folder)

    # Supported extensions to look for
    valid_extensions = ('.jpg', '.jpeg', '.png', '.webp', '.bmp', '.tiff')
    
    # Normalize target format (e.g., "jpg" -> "JPEG" for Pillow compatibility)
    target_format = target_format.lower()
    save_format = target_format
    if target_format == 'jpg':
        save_format = 'jpeg'

    files = [f for f in os.listdir(input_folder) if f.lower().endswith(valid_extensions)]
    
    print(f"Found {len(files)} images. Starting conversion to {target_format.upper()}...")

    for filename in files:
        img_name, ext = os.path.splitext(filename)
        
        # Skip if file is already in the target format
        if ext.lower().replace('.', '') == target_format:
            continue

        input_path = os.path.join(input_folder, filename)
        output_path = os.path.join(output_folder, f"{img_name}.{target_format}")

        try:
            with Image.open(input_path) as img:
                # Handle Transparency: 
                # JPGs don't support transparency. If converting PNG/WebP (RGBA) to JPG, 
                # we must convert to RGB first.
                if img.mode in ('RGBA', 'LA') and save_format in ('jpeg', 'bmp'):
                    background = Image.new('RGB', img.size, (255, 255, 255))
                    background.paste(img, mask=img.split()[-1])
                    img = background
                elif img.mode != 'RGB' and save_format in ('jpeg', 'bmp'):
                    img = img.convert('RGB')

                # Save the image
                # quality=90 ensures high quality for JPG/WebP
                img.save(output_path, save_format.upper(), quality=99)
                print(f"[OK] Converted: {filename} -> {os.path.basename(output_path)}")

        except Exception as e:
            print(f"[ERROR] Could not convert {filename}: {e}")

    print("\n--- Conversion Complete ---")

# ==========================================
# CONFIGURATION
# ==========================================
if __name__ == "__main__":
    # CHANGE THESE 3 VARIABLES AS NEEDED
    PUBLIC_DIR = os.path.dirname(os.path.abspath(__file__))
    INPUT_FOLDER = os.path.join(PUBLIC_DIR, 'other')    # Put your original images here
    OUTPUT_FOLDER = os.path.join(PUBLIC_DIR, 'Others')  # Converted images will appear here
    TARGET_FORMAT = 'webp'           # Options: 'webp', 'png', 'jpg'

    # Create dummy input folder if it doesn't exist so you don't get an error
    if not os.path.exists(INPUT_FOLDER):
        os.makedirs(INPUT_FOLDER)
        print(f"Created folder '{INPUT_FOLDER}'. Please put your images there and run again.")
    else:
        bulk_convert_images(INPUT_FOLDER, OUTPUT_FOLDER, TARGET_FORMAT)