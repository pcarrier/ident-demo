const http = require('http');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.end(JSON.stringify({
    headers: req.headers,
    remoteAddress: req.connection.remoteAddress
  }));
});

server.listen(3000, () => {
  console.log('Server running');
});
