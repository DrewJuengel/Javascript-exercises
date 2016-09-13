// var word = proccess.argv[2];

// console.log(word);

// console.log(
//     word.split('')
//         .reverse()
//         .join('')
// );

var fs = require('fs');

// console.log(fs)

// fs.readFile('./main.js', {
//     encoding: 'utf-8'
// }, function(err, data) {
//     console.log('ERROR: ', err);
//     console.log('DATA: ', data);
// });


var originalFile = process.argv2[2];
var newFile = process.argv[3];

console.log('Trying to copy ' + originalFile + " to " + newFile);

fs.readFile(original)