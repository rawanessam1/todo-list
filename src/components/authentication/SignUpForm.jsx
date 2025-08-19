import React from 'react';
import { Button, Form, Input } from 'antd';
const onFinish = values => {
  console.log('Success:', values);
};
const onFinishFailed = errorInfo => {
  console.log('Failed:', errorInfo);
};
const AuthForm = () => (
  <Form
    name="basic"
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >

    <h1 className='font-oswald font-extrabold text-4xl pb-3'>Sign Up</h1>

    <Form.Item
      name="firstname"
      rules={[{ required: true, message: 'Please enter your First Name!' }] }
    >
      <Input placeholder="First Name" className="!border-black !rounded-lg !bg-mainWhite !placeholder-black/60 w-[301px] h-8"/>
    </Form.Item>

    <Form.Item
      name="lastname"
      rules={[{ required: true, message: 'Please enter your Last Name!' }] }
    >
      <Input placeholder="Last Name" className="!border-black !rounded-lg !bg-mainWhite !placeholder-black/60 w-[301px] h-8"/>
    </Form.Item>

    <Form.Item
      name="email"
      rules={[{ required: true, message: 'Please enter your Email!' }] }
    >
      <Input placeholder="E-mail address" className="!border-black !rounded-lg !bg-mainWhite !placeholder-black/60 w-[301px] h-8"/>
    </Form.Item>


    <Form.Item
      name="password"
      rules={[{ required: true, message: 'Please enter your password!' }]}
    >
      <Input.Password placeholder="Password" className="!border-black !rounded-lg !bg-mainWhite w-[301px] h-8"/>
    </Form.Item>

    <Form.Item
      name="reEnterPassword"
      dependencies={['password']}
      rules={[
        { required: true, message: 'Please confirm your password!' },
        ({ getFieldValue }) => ({
          validator(_, value) {
            if (!value || getFieldValue('password') === value) {
              return Promise.resolve();
            }
            return Promise.reject(new Error('Passwords do not match!'));
          },
        }),
      ]} 
    >
      <Input.Password placeholder="Re-enter the password" className="!border-black !rounded-lg !bg-mainWhite"/>
    </Form.Item>


    <Form.Item>
      <Button htmlType="submit" type="ghost" className="font-Inder !rounded-lg !border-none !bg-green !w-[301px] !h-10 !hover:text-black">
       Sign Up
      </Button>
    </Form.Item>

  </Form>
);
export default AuthForm;