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
      url: '/api/get-cuobiezi',
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
          <svg t="1679393618732" className="main-logo" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="20032" width="128" height="128">
            <path d="M26.151454 783.058824m60.235294 0l843.294118 0q60.235294 0 60.235294 60.235294l0 120.470588q0 60.235294-60.235294 60.235294l-843.294118 0q-60.235294 0-60.235294-60.235294l0-120.470588q0-60.235294 60.235294-60.235294Z" fill="#05AFC8" p-id="20033" />
            <path d="M206.857336 722.823529H146.622042L477.91616 0h60.235294L206.857336 722.823529z" fill="#4D4D4D" p-id="20034" />
            <path d="M538.151454 0h-60.235294L809.210278 722.823529h60.235294L538.151454 0z" fill="#4D4D4D" p-id="20035" />
            <path d="M267.092631 481.882353h481.882353v60.235294H267.092631z" fill="#4D4D4D" p-id="20036" />
          </svg>
          <p style={{ fontSize: '16px' }}>修改文中的错别字并润色文字</p>
        </div>
        <Form colon={false} labelAlign="right" labelWidth="100px" layout="vertical" preventSubmitDefault resetType="empty" showErrorMessage form={form} scrollToFirstError="smooth" submitWithWarningMessage={false} onSubmit={onSubmit} className="form">

          <FormItem
            name="content"
            rules={[
              { required: true, message: '必填', type: 'error' },
              { max: 500, message: '非盈利工具，请最多输入500个字符', type: 'error' },
            ]}
          >
            <Textarea allowInputOverMax={false} autofocus={false} autosize={{ minRows: 5 }} placeholder="请输入要纠正的原文" />
          </FormItem>
          <FormItem>
            <Button type="submit" theme="primary" loading={isLoading} block>
              确定
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
