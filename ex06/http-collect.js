if (process.argv.length < 3) {
	console.error("error: NO arguments");
}

/*
**	npm install bl
*/
var http = require('http');
const bl = require('bl');

const url = process.argv[2];

const req = http.get(url, (res) => {
	res.setEncoding('utf-8');
	res.pipe(bl((err, data) => {
		console.log(data.toString().length);
		console.log(data.toString());
	}))
});

req.on('error', (e) => {
	console.error(e.message);
});
req.end();
