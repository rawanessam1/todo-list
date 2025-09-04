import React from 'react';
import { Button, Form, Input } from 'antd';
import { useNavigate } from 'react-router';

const SignInForm = ({ setAlertMsg  }) => {
  const navigate = useNavigate();

  const onFinish = (values) => {
    const { username, password } = values; // username is email
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(u => u.email === username && u.password === password);
    if (user) {
      localStorage.setItem("loggedInUser", username);
      localStorage.setItem("username", user.firstname);  /* save it to call it as hello, username */
      setAlertMsg({ type: 'success', message: 'Logged in successfully!' });
      setTimeout(() => navigate("/dashboard"), 3000);
    }
    else {
      setAlertMsg({ type: 'error', message: 'Invalid username or password' });
      setTimeout(() => setAlertMsg(null), 3000);
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form
      name="basic"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <h1 className='font-oswald font-extrabold text-3xl lg:text-4xl pb-3'>Sign in</h1>

      <Form.Item
        name="username"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input placeholder="mail.example@mail.com" className="!border-black !rounded-lg !bg-mainWhite !placeholder-black/60"/>
      </Form.Item>

      <Form.Item
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password placeholder="************" className="!border-black !rounded-lg !bg-mainWhite !placeholder-black/60 "/>
      </Form.Item>

      <Form.Item>
        <Button htmlType="submit" type="ghost" className="!font-Inder !rounded-lg !border-none !bg-green hover:text-black w-full max-w-form transition duration-300 transform hover:-translate-y-0.5">
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
};

export default SignInForm;