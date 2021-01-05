if (process.argv.length < 3) {
	console.error("error: NO arguments");
	process.exit(1);
}

const http = require("http");
const url = process.argv[2];

const req = http.get(url, (res) => {
	res.setEncoding('utf-8');
	res.on('data', (chunk) => {
		console.log(chunk.toString());
	})
	res.on('error', (error) =>{
		console.error(e.message);
	})
});

req.on('error', (e) => {
	console.error(e.message);
});
req.end();

