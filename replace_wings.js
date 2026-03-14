const fs = require('fs');
const glob = require('glob');

const tsxFiles = glob.sync('/Users/ajitpillai/Documents/AntiGravity/WellnestWebsite2/src/**/*.{ts,tsx,css}');

let count = 0;
for (const file of tsxFiles) {
    let content = fs.readFileSync(file, 'utf8');
    const orig = content;

    content = content.replace(/Ayurveda Wing/g, "Ayurveda");
    content = content.replace(/Homeopathy Wing/g, "Homeopathy");
    content = content.replace(/The Ayurveda/g, "Ayurveda");
    content = content.replace(/The Homeopathy/g, "Homeopathy");
    
    // Cleanup plural mappings
    content = content.replace(/Homeopathy & Ayurveda Wings/g, "Homeopathy & Ayurveda");
    content = content.replace(/Onyx and Emerald Wings/g, "Onyx and Emerald Wings"); // kept as is
    
    if (content !== orig) {
        fs.writeFileSync(file, content);
        console.log(`Updated ${file}`);
        count++;
    }
}
console.log(`Total files updated: ${count}`);
