
export default async function (req, res) {
  res.writeHead(200, {
    // 'Content-Type': 'text/event-stream',
    Connection: 'close',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
  });
  res.write(`id: ${new Date().getTime()}\n\n`);
  res.write(`data: ${JSON.stringify({ message: 'First1 message' })}\n\n`);
  setTimeout(() => {
    res.write(`id: ${new Date().getTime()}\n\n`);
    res.write(`data: ${JSON.stringify({ message: 'Second2 message' })}\n\n`);
  }, 1000);
  setTimeout(() => {
    res.write(`id: ${new Date().getTime()}\n\n`);
    res.write(`data: ${JSON.stringify({ message: 'Third3 message' })}\n\n`);
    res.end();
  }, 2000);
}
