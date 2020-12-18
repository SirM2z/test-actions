const fs = require('fs');
const path = require('path');

const copyFile = () => {
  fs.copyFile(
    path.resolve(process.cwd(), './src/CNAME'),
    path.resolve(process.cwd(), './dist/CNAME'),
    (err) => { if (err) { throw err } }
  );
}

(() => {
  copyFile();
})();
