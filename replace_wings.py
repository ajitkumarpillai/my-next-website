import os

directory = '/Users/ajitpillai/Documents/AntiGravity/WellnestWebsite2/src'

for root, _, files in os.walk(directory):
    for file in files:
        if file.endswith(('.tsx', '.ts')):
            filepath = os.path.join(root, file)
            with open(filepath, 'r') as f:
                content = f.read()
                
            orig_content = content
            content = content.replace("Ayurveda Wing", "Ayurveda")
            content = content.replace("Homeopathy Wing", "Homeopathy")
            content = content.replace("The Ayurveda", "Ayurveda")
            content = content.replace("The Homeopathy", "Homeopathy")
            
            # Additional cleanups
            content = content.replace("Explore Our Wings", "Explore Ayurveda & Homeopathy")
            content = content.replace("Homeopathy & Ayurveda Wings", "Homeopathy & Ayurveda")
            
            if content != orig_content:
                with open(filepath, 'w') as f:
                    f.write(content)
                print(f"Updated {filepath}")
