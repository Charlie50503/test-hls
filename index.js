// // index.js
// const HLSServer = require('hls-server');
// const http = require('http');


// var server = http.createServer()
// const hls = new HLSServer(server, {
//   path: '/streams', // Base URI to output HLS streams
//   dir: 'source-m3u8', // Directory that input files are stored
// });

// server.listen(8000);



// index.js
const HLSServer = require('hls-server');
const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  const html = fs.readFileSync('index.html', 'utf8');
  res.write(html);
  res.end();
});

const hls = new HLSServer(server, {
  path: '/streams', // Base URI to output HLS streams
  dir: 'source-m3u8', // Directory that input files are stored
});

server.listen(8000);