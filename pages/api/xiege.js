export default async function (req, res) {
  res.writeHead(200, {
    // 'Content-Type': 'text/event-stream',
    Connection: 'close',
    'Transfer-Encoding': 'chunked',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
  });
  res.write(`id: ${new Date().getTime()}\n\n`);
  res.write(`data: ${JSON.stringify({ message: 'First11 message' })}\n\n`);
  setTimeout(() => {
    res.write(`id: ${new Date().getTime()}\n\n`);
    res.write(`data: ${JSON.stringify({ message: 'Second22 message' })}\n\n`);
  }, 1000);
  setTimeout(() => {
    res.write(`id: ${new Date().getTime()}\n\n`);
    res.write(`data: ${JSON.stringify({ message: 'Third33 message' })}\n\n`);
    res.end();
  }, 2000);
}
