import os
import re

directory = 'e:\\Websites\\NKD Frontend\\src\\pages'

for filename in os.listdir(directory):
    if not filename.endswith('.jsx'): continue
    filepath = os.path.join(directory, filename)
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    new_content = content
    def lower_size(match):
        tag = match.group(1)
        classes = match.group(2)
        classes = classes.replace('text-7xl', 'text-5xl')
        classes = classes.replace('text-6xl', 'text-5xl')
        classes = classes.replace('text-5xl', 'text-4xl')
        classes = classes.replace('text-4xl', 'text-3xl')
        classes = classes.replace('text-3xl', 'text-2xl')
        classes = classes.replace('text-2xl', 'text-xl')
        classes = classes.replace('text-xl', 'text-lg')
        classes = classes.replace('text-[clamp(3rem,8vw,6rem)]', 'text-[clamp(2.5rem,6vw,4.5rem)]')
        return f'<{tag} className="{classes}"'

    new_content = re.sub(r'<(h[123])\s+className="([^"]+)"', lower_size, new_content)

    if new_content != content:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f'Updated {filename}')
