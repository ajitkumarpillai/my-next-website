const fs = require('fs');
const path = require('path');

function getFiles(dir, files = []) {
  fs.readdirSync(dir).forEach(file => {
    const name = path.join(dir, file);
    if (fs.statSync(name).isDirectory()) {
      getFiles(name, files);
    } else if (name.endsWith('.ts') || name.endsWith('.tsx') || name.endsWith('.css')) {
      files.push(name);
    }
  });
  return files;
}

const allFiles = getFiles('/Users/ajitpillai/Documents/AntiGravity/WellnestWebsite2/src');
let count = 0;

for (const file of allFiles) {
    let content = fs.readFileSync(file, 'utf8');
    const orig = content;

    content = content.replace(/Ayurveda Wing/g, "Ayurveda");
    content = content.replace(/Homeopathy Wing/g, "Homeopathy");
    content = content.replace(/The Ayurveda/g, "Ayurveda");
    content = content.replace(/The Homeopathy/g, "Homeopathy");
    content = content.replace(/Homeopathy & Ayurveda Wings/g, "Homeopathy & Ayurveda");

    if (content !== orig) {
        fs.writeFileSync(file, content);
        console.log(`Updated ${file}`);
        count++;
    }
}
console.log(`Total files updated: ${count}`);
