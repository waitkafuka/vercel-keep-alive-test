const fs = require('fs');
const { Readable } = require('stream');

class MyStream extends Readable {
  constructor(options) {
    super(options);
    this.count = 0;
  }

  _read() {
    // 定期推送数据
    setTimeout(() => {
      const data = `Count: ${this.count++}\n`;
      if (this.count > 5) {
        this.push(null);
      } else {
        this.push(data);
      }
    }, 1000);
  }
}

export default async function (req, res) {
  res.writeHead(200, {
    // 'Content-Type': 'text/event-stream',
    // Connection: 'close',
    'Transfer-Encoding': 'chunked',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
  });

  // const stream = new ReadableStream({
  //   start(controller) {
  //     setInterval(() => {
  //       const rand = Math.round(Math.random());
  //       if (rand > 7) {
  //         controller.close();
  //       }
  //       controller.enqueue(`data: ${rand}\n\n`);
  //     }, 1000);
  //   },
  // });
  // let count = 0;
  // const stream = new Readable({
  //   read() {
  //     // 定期推送数据
  //     setInterval(() => {
  //       const data = `Count: ${count++}\n`;
  //       if (count > 5) {
  //         this.push(null);
  //       } else {
  //         this.push(data);
  //       }
  //     }, 1000);
  //   },
  // });
  // const readStream2 = fs.createReadStream(__dirname + '/demo.js');
  // readStream.pipe(res);
  new MyStream().pipe(res);
}
