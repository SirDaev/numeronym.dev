const fs = require('fs');
const fse = require("fs-extra");
const pug = require('pug');
const data = require('./numeronymsData.json');

const compiledFunction = pug.compileFile('./src/index.pug');
const html = compiledFunction({data: data});

if (!fs.existsSync("dist")){
  fs.mkdirSync("dist");
}

fse.copySync('fonts', 'dist/fonts');

const stream = fs.createWriteStream('./dist/index.html');
stream.once('open', (fd) => stream.end(html));