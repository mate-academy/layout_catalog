const fs = require('fs');
const path = require('path');

function convertCRLF(dir) {
  const files = fs.readdirSync(dir);
  files.forEach((file) => {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      convertCRLF(fullPath);
    } else if (/\.(html|scss|css|js|json)$/i.test(file)) {
      let content = fs.readFileSync(fullPath, 'utf8');
      content = content.replace(/\r?\n/g, '\r\n');
      fs.writeFileSync(fullPath, content, 'utf8');
    }
  });
}

convertCRLF(path.join(__dirname, 'src'));
console.log('✅ Todos os arquivos src convertidos para CRLF');
