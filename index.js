
let wordlist = require('./src/words_dictionary.json'),
	ext = require('./src/data.js'),
	fs = require('fs');

ext = ext.filter((a) => a.match(/^\.\w+/));

let out = [];
for (let i in wordlist) {
	if (i.length <= 6) {
		for (let x in ext) {
			let e = new RegExp(`${ext[x].replace(/\./g, '')}$`);
			if (i.match(e)) {
				out.push([i, ext[x]]);
			}
		}
	}
}
out = out.sort((a, b) => a[0].length - b[0].length);
let o = '';
for (let i in out) {
	o += `${out[i][0]} ${out[i][1]}\n`;
}
console.log(out.length);

fs.writeFileSync('out.txt', o);
fs.writeFileSync('out_flat.json', JSON.stringify(out));
fs.writeFileSync('out.json', JSON.stringify(out, null, '\t'));
