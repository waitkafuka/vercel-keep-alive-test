import { createParser } from 'eventsource-parser';
import { Configuration, OpenAIApi } from 'openai';

const decoder = new TextDecoder();
const encoder = new TextEncoder();

// export const runtime = 'edge';

export const config = {
  runtime: 'edge',
};

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
  baseOptions: {},
});
// 开发环境需要代理
// eslint-disable-next-line no-unused-expressions
process.env.NODE_ENV === 'development'
  && (configuration.baseOptions.proxy = {
    host: '127.0.0.1',
    port: 7890,
  });
const openai = new OpenAIApi(configuration);

export default async function (req, res) {
  const payload = {
    model: 'gpt-3.5-turbo',
    messages: [{ role: 'user', content: 'hello' }],
    // prompt,
    temperature: 0.7,
    top_p: 1,
    stream: true,
    n: 1,
  };
  let stream;
  try {
    const chatResponse = await fetch('https://api.openai.com/v1/chat/completions', {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      method: 'POST',
      body: JSON.stringify(payload),
    });

    // const chatResponse = await openai.createChatCompletion(
    //   {
    //     model: 'gpt-3.5-turbo',
    //     messages: [
    //       {
    //         role: 'user',
    //         content: 'hello',
    //       },
    //     ],
    //     stream: true,
    //   },
    //   { responseType: 'stream' },
    // );

    stream = new ReadableStream({
      async start(controller) {
      // callback
        function onParse(event) {
          if (event.type === 'event') {
            const { data } = event;
            // https://beta.openai.com/docs/api-reference/completions/create#completions/create-stream
            if (data === '[DONE]') {
              controller.close();
              return;
            }
            try {
              console.log('data', data);
              const queue = encoder.encode(data);
              controller.enqueue(queue);
            // counter++;
            } catch (e) {
            // maybe parse error
              controller.error(e);
            }
          }
        }

        // stream response (SSE) from OpenAI may be fragmented into multiple chunks
        // this ensures we properly read chunks and invoke an event for each SSE event stream
        const parser = createParser(onParse);
        // https://web.dev/streams/#asynchronous-iteration
        for await (const chunk of chatResponse.data) {
          parser.feed(decoder.decode(chunk));
        }
      },
    });
  } catch (error) {
    console.log(error);
  }
  return new Response(stream);
}
