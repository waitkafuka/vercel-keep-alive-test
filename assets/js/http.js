function processMessage(messageStr, type = 'CHAT') {
  const results = [];
  const resultArray = messageStr.split('data: ');
  for (const item of resultArray) {
    try {
      const obj = JSON.parse(item);
      if (type === 'CHAT' && obj.choices && obj.choices.length > 0) {
        results.push(obj.choices[0].delta.content);
      }
      if (type === 'COMPLETION' && obj.choices && obj.choices.length > 0) {
        results.push(obj.choices[0].text);
      }
    } catch (error) {
      // 扔掉不符合json格式的数据，什么也不做
    }
  }
  return results.join('');
}

export default {
  /**
     *
     * @param {*} param0
     * @param {*} type: 'CHAT' or 'COMPLETION'
     */
  streamRequest({
    url, data, onMessage, onComplete, onError, type,
  }) {
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),

    }).then((response) => {
      if (response.status === 200) {
        const reader = response.body.getReader();
        const decoder = new TextDecoder('utf-8');
        reader.read().then(function processText({ done, value }) {
          if (done) {
            onComplete && onComplete();
            return;
          }
          const messageStr = decoder.decode(value);
          console.log('message---:', messageStr);
          onMessage && onMessage(processMessage(messageStr, type));
          reader.read().then(processText);
        });
      } else {
        onError && onError(response.statusText);
        onComplete && onComplete();
      }
    }).catch((error) => {
      onError && onError(error);
      onComplete && onComplete();
    });
  },
};
