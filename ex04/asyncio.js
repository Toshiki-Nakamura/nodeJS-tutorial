const fs = require('fs');

var buff;
var ans;

if (process.argv.length < 3) {
	console.error("error: NO arguments");
	process.exit(1);
}

function read_file(arg, call) {
	buff = fs.readFile(arg, 'utf-8');
	call(buff.toString());
}

var call_back = function (file_content) {
	ans = file_content.split('\n').length - 1;
	console.log(ans);
}

read_file(process.argv[2], call_back);
