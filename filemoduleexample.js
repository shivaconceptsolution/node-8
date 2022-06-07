var fs = require('fs');

fs.open('abc.txt', 'w', function (err, file) {
  if (err) throw err;
  console.log('Saved!');
});
/*fs.writeFile('abc.txt', 'Hello content!', function (err) {
    if (err) throw err;
    console.log('Saved!');
  });

  fs.appendFile('abc.txt', ' This is my text.', function (err) {
    if (err) throw err;
    console.log('Updated!');
  });
  

  fs.unlink('abc.txt', function (err) {
    if (err) throw err;
    console.log('File deleted!');
  });
  */

  fs.rename('abc.txt', 'abcnew.txt', function (err) {
    if (err) throw err;
    console.log('File Renamed!');
  });