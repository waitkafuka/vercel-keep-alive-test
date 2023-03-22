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
    const params = form.getFieldsValue(['familyName', 'tips', 'gender']);
    setIsLoading(true);
    http.streamRequest({
      url: '/api/get-lengxiaohua',
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
        <title>人工智能讲冷笑话</title>
        <link rel="icon" href="https://openaiapi-site.azureedge.net/public-assets/d/ead04ef722/favicon.png" />
      </Head>
      <main className="main">

        <div style={{ textAlign: 'center', marginBottom: '20px' }}>
          <svg t="1679391259377" className="main-logo" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3407" width="128" height="128">
            <path d="M513 512.1m-446.6 0a446.6 446.6 0 1 0 893.2 0 446.6 446.6 0 1 0-893.2 0Z" fill="#75EAE4" p-id="3408" />
            <path d="M513 978.7c-63 0-124.1-12.3-181.6-36.7-55.6-23.5-105.5-57.1-148.3-100-42.8-42.8-76.5-92.7-100-148.3-24.3-57.5-36.7-118.6-36.7-181.6S58.7 388 83.1 330.5c23.5-55.6 57.1-105.5 100-148.3s92.7-76.5 148.3-100C388.9 57.9 450 45.6 513 45.6s124.1 12.3 181.6 36.7c55.6 23.5 105.5 57.1 148.3 100 42.8 42.8 76.5 92.7 100 148.3 24.3 57.5 36.7 118.6 36.7 181.6s-12.3 124.1-36.7 181.6c-23.5 55.6-57.1 105.5-100 148.3-42.8 42.8-92.7 76.5-148.3 100-57.5 24.3-118.6 36.6-181.6 36.6z m0-893.1c-57.6 0-113.5 11.3-166 33.5-50.8 21.5-96.4 52.2-135.6 91.4s-69.9 84.8-91.4 135.6c-22.2 52.6-33.5 108.4-33.5 166s11.3 113.5 33.5 166c21.5 50.8 52.2 96.4 91.4 135.6s84.8 69.9 135.6 91.4c52.6 22.2 108.4 33.5 166 33.5s113.5-11.3 166-33.5c50.8-21.5 96.4-52.2 135.6-91.4s69.9-84.8 91.4-135.6c22.2-52.6 33.5-108.4 33.5-166 0-57.6-11.3-113.5-33.5-166-21.5-50.8-52.2-96.4-91.4-135.6s-84.8-69.9-135.6-91.4c-52.5-22.3-108.4-33.5-166-33.5z" fill="#05C4CE" p-id="3409" />
            <path d="M85.6 486.4a427.4 420.8 0 1 0 854.8 0 427.4 420.8 0 1 0-854.8 0Z" fill="#FFFFFF" p-id="3410" />
            <path d="M353 216.2a44 38.1 0 1 0 88 0 44 38.1 0 1 0-88 0Z" fill="#05C4CE" p-id="3411" />
            <path d="M585 216.2a44 38.1 0 1 0 88 0 44 38.1 0 1 0-88 0Z" fill="#05C4CE" p-id="3412" />
            <path d="M199.246177 342.975339a28.1 59.2 87.699 1 0 118.304533-4.753669 28.1 59.2 87.699 1 0-118.304533 4.753669Z" fill="#75EAE4" p-id="3413" />
            <path d="M708.448646 322.578262a28.1 59.2 87.699 1 0 118.304533-4.753669 28.1 59.2 87.699 1 0-118.304533 4.753669Z" fill="#75EAE4" p-id="3414" />
            <path d="M513 978.7c-63 0-124.1-12.3-181.6-36.7-55.6-23.5-105.5-57.1-148.3-100-42.8-42.8-76.5-92.7-100-148.3-24.3-57.5-36.7-118.6-36.7-181.6S58.7 388 83.1 330.5c23.5-55.6 57.1-105.5 100-148.3s92.7-76.5 148.3-100C388.9 57.9 450 45.6 513 45.6s124.1 12.3 181.6 36.7c55.6 23.5 105.5 57.1 148.3 100 42.8 42.8 76.5 92.7 100 148.3 24.3 57.5 36.7 118.6 36.7 181.6s-12.3 124.1-36.7 181.6c-23.5 55.6-57.1 105.5-100 148.3-42.8 42.8-92.7 76.5-148.3 100-57.5 24.3-118.6 36.6-181.6 36.6z m0-893.1c-57.6 0-113.5 11.3-166 33.5-50.8 21.5-96.4 52.2-135.6 91.4s-69.9 84.8-91.4 135.6c-22.2 52.6-33.5 108.4-33.5 166s11.3 113.5 33.5 166c21.5 50.8 52.2 96.4 91.4 135.6s84.8 69.9 135.6 91.4c52.6 22.2 108.4 33.5 166 33.5s113.5-11.3 166-33.5c50.8-21.5 96.4-52.2 135.6-91.4s69.9-84.8 91.4-135.6c22.2-52.6 33.5-108.4 33.5-166 0-57.6-11.3-113.5-33.5-166-21.5-50.8-52.2-96.4-91.4-135.6s-84.8-69.9-135.6-91.4c-52.5-22.3-108.4-33.5-166-33.5z" fill="#05C4CE" p-id="3415" />
            <path d="M383.1 286.8c-0.4 4.7-0.6 9.5-0.4 14.3 2.4 67.1 59.2 120 126.2 117.7l18-0.6c67.1-2.4 120-59.2 117.7-126.2-0.2-4.8-0.7-9.6-1.4-14.3l-260.1 9.1z" fill="#05C4CE" p-id="3416" />
            <path d="M506.3 347.3c-27.1 0.9-50 23.1-61.8 55.4 19 10.9 41.1 16.9 64.5 16.1l18-0.6c21-0.7 40.6-6.8 57.5-16.8-14-33.2-39.3-55.3-67.2-54.4l-11 0.3z" fill="#75EAE4" p-id="3417" />
          </svg>
        </div>
        <Form colon={false} labelAlign="right" labelWidth="100px" layout="vertical" preventSubmitDefault resetType="empty" showErrorMessage form={form} scrollToFirstError="smooth" submitWithWarningMessage={false} onSubmit={onSubmit} className="form">
          <FormItem>
            <Button type="submit" theme="primary" loading={isLoading} block>
              给我讲个冷笑话
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
