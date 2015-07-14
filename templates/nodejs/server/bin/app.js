var http = require('http');
http.createServer(function(req, res) {
	res.writeHead(200, {
		'Content-Type': 'text/plain'
	});
	res.end('template node server. \n\n\nnew Date().getTime() is: ' + new Date().getTime());
}).listen(1337, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1337/');