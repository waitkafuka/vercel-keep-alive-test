const fs = require('fs');
export default async function (req, res) {
  res.writeHead(200, {
    // 'Content-Type': 'text/event-stream',
    Connection: 'close',
    'Transfer-Encoding': 'chunked',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
  });

  const readStream = fs.createReadStream(__dirname+'/data.txt');
  readStream.pipe(res);
}
