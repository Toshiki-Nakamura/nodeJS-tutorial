if (process.argv.length != 5) {
	console.error("error: invalid arguments");
	process.exit(1);
}

var http = require('http');
var async = require('async');

let str = [];
let cnt = 0;
function get_string (url, index) {
	const req = http.get(url, index, (res) => {
		res.setEncoding('utf-8');
		str[index] = "";
		res.on('data', (chunk) => {
			chunk.toString();
			str[index] += chunk.toString();
		});
		res.on('error', (e) =>{
			console.error(e.message);
		});
		res.on("end", () => {
		if (++cnt === 3)
		{
			for (let i = 0; i < 3; i++)
				console.log(str[i]);
		}
		});
	})
	req.on('error', (e) => {
		console.error(e.message);
	});
	req.end();
}

for (let i = 2; i < 5; i++)
{
	get_string(process.argv[i], i - 2);
}
