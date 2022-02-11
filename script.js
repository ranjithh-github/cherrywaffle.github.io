require('./index.html');
const http = require('http');

http.createServer(function (req, res) {
  res.end();
}).listen(8080);