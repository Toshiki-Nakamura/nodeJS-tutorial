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
	var hh = date.getHours();
	var mm = date.getMinutes();
	var ss = date.getSeconds();
	return {
		'hour': hh = ((hh < 10) ? "0" : "") + hh,
		'minute': mm = ((mm < 10) ? "0" : "") + mm,
		'second': ss = ((ss < 10) ? "0" : "") + ss,
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
	var parse = new URL(request.url, origin);
	// console.log(parse);
	var string = parseIsoStrings(parse.searchParams.get('iso'));
	var time = {};
	if (parse.pathname === '/api/parsetime' && string)
		time = get_parsetime(string);
	else if (parse.pathname === '/api/unixtime' && string)
		time = get_unixtime(string);
	else
		string = null;
	res.writeHead(200, { 'Content-Type': 'application/json' });
	(string != null) ? res.end(JSON.stringify(time) + "\n") : res.end("invalid\n");
})
server.listen(port);
server.on("error", function (e) {
	console.error("error:" + e.message);
})
