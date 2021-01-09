if (process.argv.length != 3)
{
	console.error("arugument error");
	return ;
}
var port = parseInt(process.argv[2]);
if (!(0 <= port && port <= 65535))
{
	console.error("BAD PORT");
	return ;
}

var data = new Date();
var YY = data.getFullYear();
var MM = data.getMonth() + 1;
var DD = data.getDate();
var hh = data.getHours();
var mm = data.getMinutes();

MM = ((MM < 10) ? '0' : "") + MM;
DD = ((DD < 10) ? '0' : "") + DD;
hh = ((hh < 10) ? '0' : "") + hh;
mm = ((mm < 10) ? '0' : "") + mm;

var date = YY + '-' + MM + '-' + DD + ' ' + hh + ':' + mm;

var net = require('net');

var server = net.createServer((conn) => {
	// console.log(date);
	conn.write(date);
	conn.on("error", (e) => {
		console.error("error: " + e.message);
	})
	conn.end("\n");
});

server.listen(port);
server.on("error", (err) => {
	console.error("Error: " + err.message);
})
