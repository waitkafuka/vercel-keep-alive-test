import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
  baseOptions: {},
});
// 开发环境需要代理
process.env.NODE_ENV === 'development' && (configuration.baseOptions.proxy = {
  host: '127.0.0.1',
  port: 7890,
});
const openai = new OpenAIApi(configuration);
const decoder = new TextDecoder('utf-8');

export default {
  async genetate1(req, res) {
    // res.writeHead(200, {
    // 'Content-Type': 'text/event-stream',
    // });
    let count = 0;
    // 每隔1秒发送一个心跳包，保持连接
    const timer = setInterval(() => {
      console.log('ping---');
      res.write(`data: {"id":"chatcmpl-6wWzfO3QBtcMFmpnEUB6MYMxaf6gl","object":"chat.completion.chunk","created":1679407871,"model":"gpt-3.5-turbo-0301","choices":[{"delta":{"content":"www${count++}"},"index":0,"finish_reason":null}]}\n\n`);
      if (count > 3) {
        clearInterval(timer);
        res.end();
      }
    }, 1000);
    // 客户端关闭连接时，清除定时器
    req.on('close', () => {
      console.log('end---');
      clearInterval(timer);
    });
  },

  async genetate(req, res, content) {
    // res.writeHead(200, {
    //   'Content-Type': 'text/event-stream',
    //   'Cache-Control': 'no-cache',
    //   Connection: 'keep-alive',
    //   'Access-Control-Allow-Origin': '*',
    //   'Access-Control-Allow-Headers': 'Content-Type',
    // });
    try {
      // 请求：https://api.openai.com/v1/chat/completions
      const completionStream = await openai.createChatCompletion({
        model: 'gpt-3.5-turbo',
        messages: [
          { role: 'system', content: 'You are a helpful assistant.' },
          {
            role: 'user',
            // content: process.env.NODE_ENV === 'development' ? 'hello' : content,
            content,
          },
        ],
        stream: true,
      }, { responseType: 'stream' });

      completionStream.data.on('data', (chunk) => {
        const msg = decoder.decode(chunk);
        console.log('msg----:', msg);
        res.write(msg);
      });
      completionStream.data.on('end', (chunk) => {
        res.end();
      });
    } catch (error) {
      console.log('error:', error);
      console.log('error.response.data.error:', error.response && error.response.data && error.response.data.error);
      // 设置状态码
      res.statusCode = (error.response && error.response.status) || 500;
      res.write(error.message);
      res.end();
    }
  },
};
