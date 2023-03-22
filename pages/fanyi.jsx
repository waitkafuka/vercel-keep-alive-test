import Head from 'next/head';
import React, { useState } from 'react';
import {
  Button, Form, Input, Radio, Textarea, Space, MessagePlugin, loading,
} from 'tdesign-react'; // 按需引入无样式组件代码
import 'tdesign-react/dist/tdesign.css'; // 全局引入所有组件样式代码
import 'tdesign-react/dist/reset.css';
import http from '../assets/js/http';

const { FormItem } = Form;

export default function Names(a, b) {
  const [form] = Form.useForm();
  const [messages, setMessages] = useState('');
  const [isLoading, setIsLoading] = useState('');

  async function onSubmit(e) {
    const results = [];
    setMessages('');
    if (e.validateResult !== true) return;
    const params = form.getFieldsValue(['content']);
    setIsLoading(true);
    http.streamRequest({
      url: '/api/get-fanyi',
      data: params,
      onMessage: (result) => {
        results.push(result);
        setMessages(results.join(''));
      },
      onComplete() {
        setIsLoading(false);
      },
      onError(error) {
        MessagePlugin.error(`请求失败:${error}`);
      },
    });
  }

  return (
    <div>
      <Head>
        <title>人工智能翻译</title>
        <link rel="icon" href="https://openaiapi-site.azureedge.net/public-assets/d/ead04ef722/favicon.png" />
      </Head>
      <main className="main">

        <div style={{ textAlign: 'center', marginBottom: '20px' }}>
          <svg className="main-logo" t="1679391458573" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4260" width="128" height="128">
            <path d="M381.5 483.7c0-53.1 43.2-96.3 96.3-96.3h85v-187c0-9.4-7.6-17-17-17H137.9c-9.4 0-17 7.6-17 17v283.3c0 9.4 7.6 17 17 17h73.6v32.1l64.3-32.1h105.7v-17z" fill="#9ADCCF" p-id="4261" />
            <path d="M747.7 784h-270c-9.4 0-17-7.6-17-17V483.7c0-9.4 7.6-17 17-17h407.9c9.4 0 17 7.6 17 17V767c0 9.4-7.6 17-17 17H812v32.1L747.7 784z" fill="#FFF370" p-id="4262" />
            <path d="M341.8 523.4h-56.7c-2.6 0-5.2 0.6-7.6 1.8l-88.7 44.4v-29.2c0-9.4-7.6-17-17-17h-34c-21.9 0-39.7-17.8-39.7-39.7V200.5c0-21.9 17.8-39.7 39.7-39.7h407.9c21.9 0 39.7 17.8 39.7 39.7v147.3c0 9.4 7.6 17 17 17s17-7.6 17-17V200.5c0-40.6-33-73.6-73.6-73.6H137.9c-40.6 0-73.6 33-73.6 73.6v283.3c0 40.6 33 73.6 73.6 73.6h17V597c0 5.9 3 11.4 8.1 14.5 2.7 1.7 5.8 2.5 8.9 2.5 2.6 0 5.2-0.6 7.6-1.8l109.7-54.9h52.6c9.4 0 17-7.6 17-17 0-9.3-7.6-16.9-17-16.9z" fill="#4F3D3B" p-id="4263" />
            <path d="M885.7 410.1h-65.8c-9.4 0-17 7.6-17 17s7.6 17 17 17h65.8c21.9 0 39.7 17.8 39.7 39.7V767c0 21.9-17.8 39.7-39.7 39.7h-34c-9.4 0-17 7.6-17 17v29.2L746 808.4c-2.4-1.2-5-1.8-7.6-1.8H477.8c-21.9 0-39.7-17.8-39.7-39.7V483.7c0-21.9 17.8-39.7 39.7-39.7h249.3c9.4 0 17-7.6 17-17s-7.6-17-17-17H477.8c-12.9 0-25 3.3-35.5 9.2l-85-180.7c-2.8-6-8.8-9.8-15.4-9.8s-12.6 3.8-15.4 9.8l-90.6 192.6c-4 8.5-0.3 18.6 8.1 22.6 8.5 4 18.6 0.3 22.6-8.1l19.4-41.2h111.7l18.4 39.1c-7.6 11.6-12 25.4-12 40.2V767c0 40.6 33 73.6 73.6 73.6h256.6L844 895.5c2.4 1.2 5 1.8 7.6 1.8 3.1 0 6.2-0.9 8.9-2.5 5-3.1 8.1-8.6 8.1-14.5v-39.7h17c40.6 0 73.6-33 73.6-73.6V483.7c0.1-40.6-32.9-73.6-73.5-73.6z m-583.8-39.7l39.9-84.7 39.9 84.7h-79.8zM358 733.9c-0.2-0.6-0.3-1.1-0.5-1.7-0.2-0.6-0.6-1.1-0.9-1.7-0.2-0.4-0.4-0.8-0.7-1.2-1.2-1.9-2.9-3.5-4.7-4.7-0.4-0.3-0.8-0.4-1.2-0.6-0.6-0.3-1.1-0.7-1.7-0.9-0.5-0.2-1.1-0.3-1.7-0.5-0.5-0.2-1-0.3-1.5-0.4-1.1-0.2-2.2-0.3-3.3-0.3H241c-21.9 0-39.7-17.8-39.7-39.7v-17.1c0-9.4-7.6-17-17-17s-17 7.6-17 17V682c0 40.6 33 73.6 73.6 73.6h59.8L284.5 772c-6.6 6.6-6.6 17.4 0 24 3.3 3.3 7.7 5 12 5s8.7-1.7 12-5l45.3-45.3c0.8-0.8 1.5-1.7 2.1-2.6 0.3-0.4 0.4-0.8 0.7-1.2 0.3-0.6 0.6-1.1 0.9-1.7 0.2-0.5 0.4-1.1 0.5-1.7 0.1-0.5 0.3-1 0.4-1.5 0.4-2.2 0.4-4.5 0-6.7 0-0.5-0.2-1-0.4-1.4zM665.5 222.3c0.2 0.6 0.3 1.1 0.5 1.7 0.2 0.6 0.6 1.1 0.9 1.7 0.2 0.4 0.4 0.8 0.7 1.2 1.2 1.9 2.9 3.5 4.7 4.7 0.4 0.3 0.8 0.4 1.2 0.6 0.6 0.3 1.1 0.7 1.7 0.9 0.5 0.2 1.1 0.3 1.7 0.5 0.5 0.2 1 0.3 1.5 0.4 1.1 0.2 2.2 0.3 3.3 0.3h100.8c21.9 0 39.7 17.8 39.7 39.7v73.6c0 9.4 7.6 17 17 17s17-7.6 17-17V274c0-40.6-33-73.6-73.6-73.6h-59.8l16.3-16.3c6.6-6.6 6.6-17.4 0-24-6.6-6.6-17.4-6.6-24 0l-45.3 45.3c-0.8 0.8-1.5 1.7-2.1 2.6-0.3 0.4-0.4 0.8-0.7 1.2-0.3 0.6-0.6 1.1-0.9 1.7-0.2 0.5-0.4 1.1-0.5 1.7-0.1 0.5-0.3 1-0.4 1.5-0.4 2.2-0.4 4.5 0 6.7 0 0.5 0.2 1 0.3 1.5z" fill="#4F3D3B" p-id="4264" />
            <path d="M681.7 750c9.4 0 17-7.6 17-17v-45.3H778c9.4 0 17-7.6 17-17V580c0-9.4-7.6-17-17-17h-79.3v-45.3c0-9.4-7.6-17-17-17s-17 7.6-17 17V563h-79.3c-9.4 0-17 7.6-17 17v90.6c0 9.4 7.6 17 17 17h79.3V733c0 9.4 7.6 17 17 17z m17-153H761v56.7h-62.3V597z m-96.3 56.7V597h62.3v56.7h-62.3z" fill="#4F3D3B" p-id="4265" />
          </svg>
        </div>
        <Form colon={false} labelAlign="right" labelWidth="100px" layout="vertical" preventSubmitDefault resetType="empty" showErrorMessage form={form} scrollToFirstError="smooth" submitWithWarningMessage={false} onSubmit={onSubmit} className="form">

          <FormItem
            name="content"
            rules={[
              { required: true, message: '请输入要翻译的文字', type: 'error' },
              { max: 500, message: '非盈利工具，请最多输入500个字符', type: 'error' },
            ]}
          >
            <Textarea allowInputOverMax={false} autofocus={false} autosize={{ minRows: 5 }} placeholder="请输入要翻译的文字，中英文均可" />
          </FormItem>
          <FormItem>
            <Button type="submit" theme="primary" loading={isLoading} block>
              翻译
            </Button>
          </FormItem>
          <Textarea
            allowInputOverMax={false}
            autofocus={false}
            autosize={{ minRows: 6 }}
            readonly
            value={messages}
          />
        </Form>
      </main>
    </div>
  );
}
