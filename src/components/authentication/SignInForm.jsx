import React from 'react';
import { Button, Form, Input } from 'antd';
const onFinish = values => {
  console.log('Success:', values);
};
const onFinishFailed = errorInfo => {
  console.log('Failed:', errorInfo);
};
const SignInForm = () => (
  <Form
    name="basic"
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >

    <h1 className='font-oswald font-extrabold text-4xl pb-3'>Sign in</h1>

    <Form.Item
      name="username"
      rules={[{ required: true, message: 'Please input your username!' }] }
    >
      <Input placeholder="mail.example@mail.com" className="!border-black !rounded-lg !bg-mainWhite !placeholder-black/60 w-[301px] h-8"/>
    </Form.Item>

    <Form.Item
      name="password"
      rules={[{ required: true, message: 'Please input your password!' }]}
    >
      <Input.Password placeholder="************" className="!border-black !rounded-lg !bg-mainWhite !placeholder-black/60 w-[301px] h-8"/>
    </Form.Item>

    <Form.Item>
      <Button htmlType="submit" type="ghost" className="font-Inder !rounded-lg !border-none !bg-green !w-[301px] !h-10 hover:text-black">
       Sign In
      </Button>
    </Form.Item>

    <div className="flex items-center justify-center gap-5 mb-5">
        <hr className="flex-1" />
        <span>or</span>
        <hr className="flex-1" />
    </div>

  </Form>
);
export default SignInForm;