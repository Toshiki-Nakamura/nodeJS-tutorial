const http = require("http");

if (process.argv.length < 3)
{
	console.error("error: NO URL");
}

const req = http.get(process.argv[2], (res) => {
	res.setEncoding('utf-8');
	res.on('data', (chunk) => {
		console.log(chunk.toString());
	});
});

req.on('error', (e) => {
	console.error(e.message);
});
req.end();

