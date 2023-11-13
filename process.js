
const fs = require('fs');
const beroun = require('./beroun.json');

const out = [];

for (const item of beroun.elements) {
  out.push({
    type: item.type,
    id: item.id,
  })
}

fs.writeFileSync('./beroun-out.json', JSON.stringify(out, null, 2));

const out2 = beroun.elements.map(({ type, id }) => `/${type}/${id}`).join('\n');
fs.writeFileSync('./beroun-links.txt', out2);



fs.writeFileSync('./beroun-links.htm', beroun.elements.map(({ type, id, tags }) => `<a href="https://osmapp.org/${type}/${id}">${tags.name}</a>`).join('\n'));
fs.writeFileSync('./beroun-links.md', beroun.elements.map(({ type, id, tags }) => ` - [${tags.name}](https://osmapp.org/${type}/${id})`).join('\n'));
