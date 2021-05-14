const fs = require('fs');

const files = {};

const folder = '';

fs.readdir('c:/', function (err, archivos) {
if (err) {
console.log(err);
return err;
}
console.log(archivos);
});
