const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(function(file) {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) { 
      results = results.concat(walk(file));
    } else {
      if (file.endsWith('.jsx')) results.push(file);
    }
  });
  return results;
}

const files = walk('./src');
files.forEach(f => {
  let content = fs.readFileSync(f, 'utf8');
  let newContent = content
    .replace(/\.querySelectorAll\(['"]\.hidden['"]\)/g, ".querySelectorAll('.reveal-hidden')")
    .replace(/\.classList\.add\(['"]show['"]\)/g, ".classList.add('reveal-show')")
    .replace(/\.classList\.remove\(['"]show['"]\)/g, ".classList.remove('reveal-show')");
  if (content !== newContent) {
    fs.writeFileSync(f, newContent);
    console.log("Updated", f);
  }
});
