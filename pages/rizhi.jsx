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
      url: '/api/get-rizhi',
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
        <title>人工智能润色日志</title>
        <link rel="icon" href="https://openaiapi-site.azureedge.net/public-assets/d/ead04ef722/favicon.png" />
      </Head>
      <main className="main">
        <div style={{ textAlign: 'center', marginBottom: '20px' }}>
          <svg className="main-logo" t="1679392346249" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7042" width="128" height="128">
            <path d="M949.491302 47.98464v607.31392a113.2544 113.2544 0 0 1-33.34144 80.09728l-0.08192 0.08192 0.08192-0.08192-0.08192 0.08192a113.2544 113.2544 0 0 1-80.09728 33.34144h-220.9792l124.94848 216.39168c16.15872 27.97568-22.9376 50.72896-39.15776 22.67136l-138.0352-239.06304h-95.744l-138.0352 239.06304c-16.13824 27.97568-55.5008 5.38624-39.3216-22.67136l124.928-216.39168H188.065382c-62.44352 0-113.54112-51.0976-113.54112-113.52064V47.98464H24.245862c-32.29696 0-32.37888-45.34272 0-45.34272h975.54432c32.31744 0 32.37888 45.34272 0 45.34272h-50.29888z" fill="#595757" p-id="7043" />
            <path d="M904.148582 48.00512H119.866982v607.31392a68.38272 68.38272 0 0 0 68.1984 68.17792h647.92576c18.75968 0 35.81952-7.65952 48.128-19.968l0.1024-0.08192a67.93216 67.93216 0 0 0 19.968-48.128V48.00512h-0.04096z" fill="#FFDB00" p-id="7044" />
            <path d="M724.293222 304.10752v309.20704c0 32.31744-45.34272 32.3584-45.34272 0V304.10752c0-32.31744 45.34272-32.37888 45.34272 0zM534.689382 209.89952v403.41504c0 32.31744-45.34272 32.3584-45.34272 0V209.89952c0-32.31744 45.34272-32.37888 45.34272 0zM345.065062 441.77408v171.52c0 32.31744-45.34272 32.3584-45.34272 0v-171.52c0-32.29696 45.34272-32.37888 45.34272 0z" fill="#595757" p-id="7045" />
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
            <Textarea
              allowInputOverMax={false}
              autofocus={false}
              autosize={{ minRows: 5 }}
              placeholder="请输入你的日志或者大致工作"
            />
          </FormItem>
          <FormItem>
            <Button type="submit" theme="primary" loading={isLoading} block>
              撰写日志
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
