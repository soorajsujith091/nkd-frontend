const fs = require('fs');
const path = require('path');

const directory = 'e:\\Websites\\NKD Frontend\\src\\pages';

fs.readdirSync(directory).forEach(filename => {
    if (!filename.endsWith('.jsx')) return;
    const filepath = path.join(directory, filename);
    let content = fs.readFileSync(filepath, 'utf-8');

    let new_content = content.replace(/<(h[123])\s+className="([^"]+)"/g, (match, tag, classes) => {
        let newClasses = classes;
        newClasses = newClasses.replace('text-7xl', 'text-5xl');
        newClasses = newClasses.replace('text-6xl', 'text-5xl');
        newClasses = newClasses.replace('text-5xl', 'text-4xl');
        newClasses = newClasses.replace('text-4xl', 'text-3xl');
        newClasses = newClasses.replace('text-3xl', 'text-2xl');
        newClasses = newClasses.replace('text-2xl', 'text-xl');
        newClasses = newClasses.replace('text-xl', 'text-lg');
        newClasses = newClasses.replace('text-[clamp(3rem,8vw,6rem)]', 'text-[clamp(2.5rem,6vw,4.5rem)]');
        return `<${tag} className="${newClasses}"`;
    });

    if (new_content !== content) {
        fs.writeFileSync(filepath, new_content, 'utf-8');
        console.log(`Updated ${filename}`);
    }
});
