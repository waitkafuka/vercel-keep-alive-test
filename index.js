const http = require('http');

const server = http.createServer((req, res) => {
  console.log(req.url);
  res.writeHead(200, {
    'Content-Type': 'text/event-stream',
    // Connection: 'close',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
  });
  res.write(`id: ${new Date().getTime()}\n\n`);
  res.write(`data: ${JSON.stringify({ message: 'First message' })}\n\n`);
  setTimeout(() => {
    res.write(`id: ${new Date().getTime()}\n\n`);
    res.write(`data: ${JSON.stringify({ message: 'Second message' })}\n\n`);
  }, 1000);
  setTimeout(() => {
    res.write(`id: ${new Date().getTime()}\n\n`);
    res.write(`data: ${JSON.stringify({ message: 'Third message' })}\n\n`);
    res.end();
  }, 2000);
});

const PORT = 3001;

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
