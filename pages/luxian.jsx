import Head from 'next/head';
import React, { useState } from 'react';
import {
  Button, Form, Input, RangeInput, Textarea, Space, MessagePlugin, loading,
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
      url: '/api/get-luxian',
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
        <title>人工智能路线编排</title>
        <link rel="icon" href="https://openaiapi-site.azureedge.net/public-assets/d/ead04ef722/favicon.png" />
      </Head>
      <main className="main">

        <div style={{ textAlign: 'center', marginBottom: '20px' }}>
          <svg t="1679394567860" className="main-logo" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="25905" width="128" height="128">
            <path d="M265.728 678.4h-35.84c-16.896 0-30.72-13.824-30.72-30.72s13.824-30.72 30.72-30.72h35.84c39.424 0 71.68-28.16 71.68-62.464s-32.256-62.464-71.68-62.464h-40.96c-16.896 0-30.72-13.824-30.72-30.72s13.824-30.72 30.72-30.72h40.96c73.216 0 133.12 55.296 133.12 123.904s-59.392 123.904-133.12 123.904z" fill="#4B81EE" p-id="25906" />
            <path d="M693.76 902.144H203.264c-73.216 0-133.12-64-133.12-142.336s59.904-142.336 133.12-142.336h55.808c16.896 0 30.72 13.824 30.72 30.72s-13.824 30.72-30.72 30.72H203.264c-39.424 0-71.68 36.352-71.68 80.896s32.256 80.896 71.68 80.896h490.496c16.896 0 30.72 13.824 30.72 30.72s-13.824 30.72-30.72 30.72z" fill="#4B81EE" p-id="25907" />
            <path d="M348.672 263.68c0 82.432-109.568 196.096-123.904 196.096-14.336 0-123.904-111.616-123.904-196.096 0-68.608 55.296-123.904 123.904-123.904 68.608 0 123.904 55.808 123.904 123.904z" fill="#DBE6FC" p-id="25908" />
            <path d="M224.768 491.008c-11.264 0-23.04-4.608-46.592-27.136-14.848-14.336-30.72-32.256-45.056-51.2-28.672-37.888-62.976-94.208-62.976-148.48 0-84.992 69.12-154.624 154.624-154.624s154.624 69.12 154.624 154.624c0 52.736-34.304 109.568-62.976 147.456-22.016 29.184-64 79.36-91.648 79.36z m0-320.512c-51.2 0-93.184 41.984-93.184 93.184 0 55.808 64 132.608 93.184 159.232 30.208-27.648 93.184-107.008 93.184-159.232 0-51.2-41.472-93.184-93.184-93.184z" fill="#4B81EE" p-id="25909" />
            <path d="M182.272 258.56c0 23.552 18.944 42.496 42.496 42.496s42.496-18.944 42.496-42.496c0-23.552-18.944-42.496-42.496-42.496s-42.496 18.944-42.496 42.496c0-0.512 0-0.512 0 0z" fill="#FF7879" p-id="25910" />
            <path d="M693.76 901.632c-11.264 0-26.624-3.584-68.096-43.52-26.624-25.6-55.296-57.856-80.896-91.648-50.688-66.56-111.104-165.888-111.104-259.072 0-143.36 116.736-260.096 260.096-260.096 143.36 0 260.096 116.736 260.096 260.096 0 90.624-60.416 189.952-111.104 257.024-25.6 33.792-54.272 67.072-80.896 92.672-41.472 40.96-56.832 44.544-68.096 44.544z m-8.192-59.904z m8.192-532.48c-109.568 0-198.656 89.088-198.656 198.656 0 124.416 152.576 294.912 198.144 328.704 46.08-34.304 198.656-205.312 198.656-328.704 0.512-109.568-88.576-198.656-198.144-198.656z" fill="#4B81EE" p-id="25911" />
            <path d="M693.76 589.824c52.224 0 94.72-42.496 94.72-94.72s-42.496-94.72-94.72-94.72S599.04 442.88 599.04 495.104s42.496 94.72 94.72 94.72z m0-128c18.432 0 33.28 14.848 33.28 33.28s-14.848 33.28-33.28 33.28-33.28-14.848-33.28-33.28 14.848-33.28 33.28-33.28z" fill="#FF7879" p-id="25912" />
          </svg>
        </div>
        <Form colon={false} labelAlign="right" labelWidth="100px" layout="vertical" preventSubmitDefault resetType="empty" showErrorMessage form={form} scrollToFirstError="smooth" submitWithWarningMessage={false} onSubmit={onSubmit} className="form">

          <FormItem
            name="qidian"
            shouldUpdate={false}
            successBorder={false}
            rules={[
              { required: true, message: '必填', type: 'error' },
            ]}
          >
            <Input align="left" allowInputOverMax={false} autoWidth={false} autofocus={false} clearable={false} defaultValue="" placeholder="请输入起点" readonly={false} showClearIconOnEmpty={false} showLimitNumber={false} size="large" type="text" />
          </FormItem>
          <FormItem
            name="zhongdian"
            shouldUpdate={false}
            successBorder={false}
            rules={[
              { required: true, message: '必填', type: 'error' },
            ]}
          >
            <Input align="left" allowInputOverMax={false} autoWidth={false} autofocus={false} clearable={false} defaultValue="" placeholder="请输入终点" readonly={false} showClearIconOnEmpty={false} showLimitNumber={false} size="large" type="text" />
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
