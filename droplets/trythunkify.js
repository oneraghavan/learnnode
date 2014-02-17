var thunkify = require('thunkify');
var fs = require('fs');

console.log(thunkify);

console.log(fs.readFile);


fs.readFile = thunkify(fs.readFile);
console.log(fs.readFile);

fs.readFile('sampletext.txt', 'utf8')(function(err, str){
	console.log(str);
	console.log(err);
});
