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
      url: '/api/get-names',
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
        <title>人工智能 AI 起名</title>
        <link rel="icon" href="https://openaiapi-site.azureedge.net/public-assets/d/ead04ef722/favicon.png" />
      </Head>
      <main className="main">

        <div style={{ textAlign: 'center', marginBottom: '20px' }}>
          <svg className="main-logo" t="1679216645431" viewBox="0 0 2173 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3700" width="128" height="128"><path d="M2173.155556 568.888889v420.977778h-716.8l-11.377778-193.422223-34.133334 34.133334c-59.255467 27.921067-64.853333 57.423644-147.911111 68.266666-71.168-57.105067-140.310756-119.159467-102.4-193.422222l329.955556-273.066666c-63.271822-21.435733-77.016178-43.235556-79.644445-125.155556 35.407644-43.713422 77.266489-94.594844 159.288889-56.888889 41.051022 20.48 40.356978 23.278933 56.888889 68.266667l182.044445-170.666667h-261.688889l-273.066667 238.933333-45.511111-11.377777v-45.511111l375.466667-329.955556 56.888889 11.377778 11.377777 22.755555-45.511111 56.888889c156.626489-3.800178 399.792356-25.679644 500.622222 34.133334v91.022222l-398.222222 352.711111h443.733334zM204.8 22.755556h227.555556v182.044444h102.4v34.133333l-11.377778 22.755556h-91.022222v136.533333c129.399467-4.846933 189.394489-45.147022 352.711111-45.511111V113.777778H557.511111V56.888889c144.497778-3.106133 373.122844-26.032356 477.866667 22.755555v329.955556H807.822222v284.444444h261.688889v34.133334l-11.377778 22.755555H546.133333V625.777778h-102.4v113.777778h22.755556c159.994311 70.8608 432.674133 68.573867 637.155555 68.266666l-56.888888 216.177778c-318.646044-3.834311-671.197867-81.009778-921.6-182.044444L68.266667 1012.622222c-50.2784-8.8064-42.257067-6.826667-68.266667-34.133333l136.533333-466.488889h68.266667v-68.266667H45.511111v-45.511111h159.288889V261.688889H79.644444v-56.888889h125.155556V22.755556z m238.933333 420.977777v125.155556h102.4V443.733333h-102.4zM193.422222 591.644444c-9.864533 67.709156-33.6896 75.093333 11.377778 102.4l-11.377778-102.4z m1524.622222 34.133334v307.2h170.666667V625.777778h-170.666667z" p-id="3701" fill="#515151" /></svg>
          <p style={{ fontSize: '16px' }}>人工智能帮你起名</p>
        </div>
        <Form colon={false} labelAlign="right" labelWidth="100px" layout="vertical" preventSubmitDefault resetType="empty" showErrorMessage form={form} scrollToFirstError="smooth" submitWithWarningMessage={false} onSubmit={onSubmit} className="form">
          <FormItem
            name="familyName"
            shouldUpdate={false}
            successBorder={false}
            rules={[
              { whitespace: true, message: '姓氏不能为空' },
              { required: true, message: '姓氏必填', type: 'error' },
              { max: 2, message: '最多两个字', type: 'error' },
            ]}
          >
            <Input align="left" allowInputOverMax={false} autoWidth={false} autofocus={false} clearable={false} defaultValue="" placeholder="请输入您的姓氏" readonly={false} showClearIconOnEmpty={false} showLimitNumber={false} size="large" type="text" />
          </FormItem>
          <FormItem name="gender" initialData="男">
            <Radio.Group>
              <Radio value="男">男性</Radio>
              <Radio value="女">女性</Radio>
            </Radio.Group>
          </FormItem>
          <FormItem name="tips">
            <Textarea allowInputOverMax={false} autofocus={false} autosize={false} placeholder="请输入其他要求，比如：带三点水" readonly={false} />
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
