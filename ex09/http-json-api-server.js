if (process.argv.length != 3)
{
	console.error("argument error");
	return ;
}
var port = parseInt(process.argv[2]);
if (!(0 <= port && port <= 65535))
{
	console.error("BAD PORT");
	return ;
}

var port = parseInt(process.argv[2]);
var origin = 'http://localhost:' + process.argv[2];
var http = require('http');
var url = require('url');


var get_parsetime = function (string) {
	const date = new Date(string);
	return {
		'hour': date.getHours(),
		'minute': date.getMinutes(),
		'second': date.getSeconds(),
	}
}

var get_unixtime = function (string) {
	const date = new Date(string + "Z");
	return {"unixtime": date.getTime()}
}

var parseIsoStrings = function(string) {
	if (string === null) {
		console.error("format error");
		return null;
	}
	var pos = pos = string.indexOf("Z");
	if (pos >= 0)
		string = string.substring(0, pos)
	pos = -1;
	pos = string.indexOf(" ");
	if (pos >= 0)
		string = string.substring(0, pos)
	return (string);
}

var server = http.createServer(function (request, res) {
	var parth = new URL(request.url, origin);
	// console.log(parth);
	var string = parseIsoStrings(parth.searchParams.get('iso'));
	var time = {};
	// console.log(string);
	if (parth.pathname === '/api/parsetime' && string)
		time = get_parsetime(string);
	else if (parth.pathname === '/api/unixtime' && string)
		time = get_unixtime(string);
	else
		string = null;
	//res.writeHead(200, { 'Content-Type': 'application/json' });
	(string != null) ? res.end(JSON.stringify(time) + "\n") : res.end("invalid\n");
})
server.listen(port);
server.on("error", function (e) {
	console.error("error:" + e.message);
})
