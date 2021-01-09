if (process.argv[2] != "8080" || process.argv.length != 3)
{
	console.error("arugument error");
	return ;
}


var data = new Date();
var YY = data.getFullYear();
var MM = data.getMonth() + 1;
var DD = data.getDate();
var hh = data.getHours();
var mm = data.getMinutes();

if (MM < 10)
	MM = '0' + MM;
if (DD < 10)
	DD = '0' + DD;
if (hh < 10)
	hh = '0' + hh;
if (mm < 10)
	mm = '0' + mm;

var date = YY + '-' + MM + '-' + DD + ' ' + hh + ':' + mm;

var http = require('http');

var server = http.createServer(function(req, res) {
	console.log(date);
	res.end();
});
server.listen(process.argv[2]);
// server.close();
