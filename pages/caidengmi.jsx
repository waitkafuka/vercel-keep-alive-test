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
      url: '/api/get-caidengmi',
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
        <title>人工智能猜灯谜</title>
        <link rel="icon" href="https://openaiapi-site.azureedge.net/public-assets/d/ead04ef722/favicon.png" />
      </Head>
      <main className="main">

        <div style={{ textAlign: 'center', marginBottom: '20px' }}>
          <svg t="1679394217992" className="main-logo" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="23541" width="128" height="128">
            <path d="M640.6 749.7H422.9c-131.1 0-238.4-107.3-238.4-238.4 0-131.1 107.3-238.4 238.4-238.4h217.7C771.7 273 879 380.3 879 511.4S771.7 749.7 640.6 749.7z" fill="#FF4633" p-id="23542" />
            <path d="M640.6 768.2H422.9c-141.6 0-256.8-115.2-256.8-256.8s115.2-256.8 256.8-256.8h217.7c141.6 0 256.8 115.2 256.8 256.8S782.2 768.2 640.6 768.2zM422.9 291.4c-121.3 0-219.9 98.7-219.9 219.9s98.7 219.9 219.9 219.9h217.7c121.3 0 219.9-98.7 219.9-219.9s-98.7-219.9-219.9-219.9H422.9zM603.3 194.7c-10.2 0-18.4-8.3-18.4-18.4v-66.2c0-29.8-24.2-54-54-54s-54 24.2-54 54v66.2c0 10.2-8.3 18.4-18.4 18.4-10.2 0-18.4-8.3-18.4-18.4v-66.2c0-50.1 40.8-90.9 90.9-90.9s90.9 40.8 90.9 90.9v66.2c-0.1 10.1-8.4 18.4-18.6 18.4zM413.7 1004.8c-10.2 0-18.4-8.3-18.4-18.4V829.7c0-10.2 8.3-18.4 18.4-18.4 10.2 0 18.4 8.3 18.4 18.4v156.6c0.1 10.2-8.2 18.5-18.4 18.5zM489.4 1004.8c-10.2 0-18.4-8.3-18.4-18.4V829.7c0-10.2 8.3-18.4 18.4-18.4 10.2 0 18.4 8.3 18.4 18.4v156.6c0.1 10.2-8.2 18.5-18.4 18.5zM565.1 1004.8c-10.2 0-18.4-8.3-18.4-18.4V829.7c0-10.2 8.3-18.4 18.4-18.4 10.2 0 18.4 8.3 18.4 18.4v156.6c0.1 10.2-8.2 18.5-18.4 18.5zM640.8 1004.8c-10.2 0-18.4-8.3-18.4-18.4V829.7c0-10.2 8.3-18.4 18.4-18.4 10.2 0 18.4 8.3 18.4 18.4v156.6c0 10.2-8.2 18.5-18.4 18.5z" fill="#840000" p-id="23543" />
            <path d="M665.4 273H398.1c-16.5 0-29.9-13.5-29.9-29.9v-36.9c0-16.5 13.5-29.9 29.9-29.9h267.3c16.5 0 29.9 13.5 29.9 29.9v36.9c0.1 16.4-13.4 29.9-29.9 29.9z" fill="#FFAC33" p-id="23544" />
            <path d="M665.4 291.4H398.1c-26.7 0-48.4-21.7-48.4-48.4v-36.9c0-26.7 21.7-48.4 48.4-48.4h267.3c26.7 0 48.4 21.7 48.4 48.4V243c0 26.7-21.7 48.4-48.4 48.4z m-267.3-96.7c-6.2 0-11.5 5.3-11.5 11.5v36.9c0 6.2 5.3 11.5 11.5 11.5h267.3c6.2 0 11.5-5.3 11.5-11.5v-36.9c0-6.2-5.3-11.5-11.5-11.5H398.1z" fill="#840000" p-id="23545" />
            <path d="M668.2 829.7H395.4c-15 0-27.2-12.2-27.2-27.2V777c0-15 12.2-27.2 27.2-27.2h272.8c15 0 27.2 12.2 27.2 27.2v25.5c0 14.9-12.3 27.2-27.2 27.2z" fill="#FFAC33" p-id="23546" />
            <path d="M668.2 848.1H395.4c-25.2 0-45.6-20.5-45.6-45.6V777c0-25.2 20.5-45.6 45.6-45.6h272.8c25.2 0 45.6 20.5 45.6 45.6v25.5c0 25.1-20.5 45.6-45.6 45.6z m-272.8-79.9c-4.7 0-8.8 4-8.8 8.8v25.5c0 4.7 4 8.8 8.8 8.8h272.8c4.7 0 8.8-4 8.8-8.8V777c0-4.7-4-8.8-8.8-8.8H395.4z" fill="#840000" p-id="23547" />
            <path d="M531.8 749.7c-127.3 0-231.4-104.1-231.4-231.4v-13.9c0-127.3 104.1-231.4 231.4-231.4 127.3 0 231.4 104.1 231.4 231.4v13.9c0 127.3-104.2 231.4-231.4 231.4z" fill="#FF4633" p-id="23548" />
            <path d="M531.8 768.2c-137.8 0-249.9-112.1-249.9-249.9v-13.9c0-137.8 112.1-249.9 249.9-249.9s249.9 112.1 249.9 249.9v13.9c-0.1 137.8-112.2 249.9-249.9 249.9z m0-476.8c-117.4 0-213 95.5-213 213v13.9c0 117.4 95.5 213 213 213s213-95.5 213-213v-13.9c-0.1-117.4-95.6-213-213-213z" fill="#840000" p-id="23549" />
            <path d="M448.9 511.4a82.9 238.4 0 1 0 165.8 0 82.9 238.4 0 1 0-165.8 0Z" fill="#FF4633" p-id="23550" />
            <path d="M531.8 768.2c-66.5 0-101.3-129.2-101.3-256.8s34.8-256.8 101.3-256.8 101.3 129.2 101.3 256.8-34.8 256.8-101.3 256.8z m0-476.8c-26.3 0-64.4 85.7-64.4 219.9s38.2 219.9 64.4 219.9c26.3 0 64.4-85.7 64.4-219.9S558 291.4 531.8 291.4z" fill="#840000" p-id="23551" />
            <path d="M194.1 120.4l13.3 13.7c4 4.1 9.8 6 15.5 5.1l18.8-3.2c14.3-2.4 25.3 12.6 18.5 25.5l-8.9 16.9c-2.7 5.1-2.7 11.2 0 16.3l8.9 16.9c6.7 12.9-4.2 27.9-18.6 25.4l-18.8-3.3c-5.7-1-11.5 0.9-15.5 5l-13.4 13.6c-10.2 10.4-27.9 4.6-29.9-9.8l-2.7-18.9c-0.8-5.7-4.4-10.7-9.6-13.2l-17.1-8.5c-13-6.5-13-25.1 0.1-31.5l17.1-8.4c5.2-2.5 8.8-7.5 9.6-13.2l2.8-18.9c2-14.2 19.7-19.9 29.9-9.5z" fill="#840000" p-id="23552" />
            <path d="M131 275.6l0.6 9.2c0.2 2.8 1.7 5.3 4.1 6.7l7.9 4.7c6 3.6 5.3 12.5-1.2 15.1l-8.5 3.4c-2.6 1-4.5 3.3-5.1 6l-2 9c-1.5 6.8-10.2 8.9-14.7 3.6l-5.9-7.1c-1.8-2.1-4.5-3.3-7.3-3l-9.2 0.9c-7 0.7-11.7-7-8-12.9l4.9-7.8c1.5-2.4 1.7-5.3 0.6-7.8l-3.6-8.4c-2.8-6.4 3-13.3 9.8-11.5l8.9 2.2c2.7 0.7 5.6 0 7.6-1.9l6.9-6.1c5.4-4.7 13.7-1.2 14.2 5.7z" fill="#840000" p-id="23553" />
          </svg>
        </div>
        <Form colon={false} labelAlign="right" labelWidth="100px" layout="vertical" preventSubmitDefault resetType="empty" showErrorMessage form={form} scrollToFirstError="smooth" submitWithWarningMessage={false} onSubmit={onSubmit} className="form">

          <FormItem
            name="content"
            rules={[
              { required: true, message: '必填', type: 'error' },
              { max: 500, message: '非盈利工具，请最多输入500个字符', type: 'error' },
            ]}
          >
            <Textarea allowInputOverMax={false} autofocus={false} autosize={{ minRows: 5 }} placeholder="请输入灯谜内容" />
          </FormItem>
          <FormItem>
            <Button type="submit" theme="primary" loading={isLoading} block>
              开始猜灯谜
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
