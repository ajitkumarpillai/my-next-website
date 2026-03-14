const fs = require('fs');
const path = require('path');

function getFiles(dir, files = []) {
  fs.readdirSync(dir).forEach(file => {
    const name = path.join(dir, file);
    if (fs.statSync(name).isDirectory()) {
      getFiles(name, files);
    } else if (name.endsWith('.ts') || name.endsWith('.tsx') || name.endsWith('.css') || name.endsWith('.json')) {
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

    // "Thai Sports Massage" Replacements
    content = content.replace(/Thai Sports Massage/gi, "Clinical Athletic Recovery");
    content = content.replace(/Thai Sports Recovery/gi, "Clinical Athletic Recovery");
    content = content.replace(/Clinical Thai Sports/gi, "Clinical Athletic Recovery");
    content = content.replace(/Thai Sports/gi, "Athletic Recovery");
    content = content.replace(/Thai athletic recovery/gi, "Advanced athletic recovery");
    content = content.replace(/Thai assisted-stretching/gi, "Advanced assisted-stretching");
    content = content.replace(/Krit Thaiya/gi, "Dr. Krit");
    content = content.replace(/Lead Thai/gi, "Lead Recovery");
    content = content.replace(/hero-thai\.png/g, "hero-recovery.png");
    content = content.replace(/thai-sports-massage/g, "athletic-recovery");

    // Rest of "Sports Massage"
    content = content.replace(/Sports Massage/gi, "Athletic Recovery");

    // "Retreat Packages" -> "Wellness Programs"
    content = content.replace(/Retreat Packages/g, "Wellness Programs");
    content = content.replace(/retreat packages/g, "wellness programs");
    content = content.replace(/Retreats/g, "Programs");
    content = content.replace(/retreats/g, "programs");
    // Only replace Retreat to Program if it's standalone to avoid messing up things
    content = content.replace(/ Retreat/g, " Program");
    content = content.replace(/ retreat/g, " program");

    if (content !== orig) {
        fs.writeFileSync(file, content);
        console.log(`Updated ${file}`);
        count++;
    }
}
console.log(`Total files updated: ${count}`);
