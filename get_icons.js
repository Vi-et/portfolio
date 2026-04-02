import fs from 'fs';
const tools = ['nuxt', 'amazonwebservices'];
async function fetchIcons() {
  const map = {};
  for(const t of tools) {
     try {
       const res = await fetch(`https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/${t}.svg`);
       map[t] = await res.text();
     } catch (e) {
       map[t] = "ERROR";
     }
  }
  fs.writeFileSync('icons-ext.json', JSON.stringify(map, null, 2));
}
fetchIcons();
