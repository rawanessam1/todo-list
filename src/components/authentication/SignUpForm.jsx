import React from 'react';
import { Button, Form, Input } from 'antd';
import { useNavigate } from 'react-router';

const AuthForm = ({ onRegisterSuccess, setAlertMsg }) => {
  const navigate = useNavigate();

  const onFinish = values => {   // onfinish is when user clicks sign up
    const { firstname, lastname, email, password } = values;
    const users = JSON.parse(localStorage.getItem("users")) || [];  // Get existing users or empty array
    if (users.find(user => user.email === email)) {
      setAlertMsg({ type: 'error', message: 'User already exists!' });
      setTimeout(() => setAlertMsg(null), 3000);
      return;
    }
    else{
      const newUser = { firstname, lastname, email, password, tasks: [] };
      users.push(newUser);
      localStorage.setItem("users", JSON.stringify(users));
      localStorage.setItem("loggedInUser", email);
      localStorage.setItem("username", firstname); /* save it to call it as hello, username */    
      if (onRegisterSuccess){
        onRegisterSuccess();
      }
      else{
        setTimeout(() => navigate("/signin"), 2000);
      }
    }
  }

  const onFinishFailed = errorInfo => { // shows error messages like enter your name
    console.log('Failed:', errorInfo);
  };

  return (
    <Form
      name="basic"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <h1 className='font-oswald font-extrabold text-4xl pb-3'>Sign Up</h1>

      <Form.Item
        name="firstname"
        rules={[{ required: true, message: 'Please enter your First Name!' }]}
      >
        <Input placeholder="First Name" className="!border-black !rounded-lg !bg-mainWhite !placeholder-black/60"/>
      </Form.Item>

      <Form.Item
        name="lastname"
        rules={[{ required: true, message: 'Please enter your Last Name!' }]}
      >
        <Input placeholder="Last Name" className="!border-black !rounded-lg !bg-mainWhite !placeholder-black/60"/>
      </Form.Item>

      <Form.Item
        name="email"
        rules={[{ required: true, message: 'Please enter your Email!' }]}
      >
        <Input placeholder="E-mail address" className="!border-black !rounded-lg !bg-mainWhite !placeholder-black/60"/>
      </Form.Item>

      <Form.Item
        name="password"
        rules={[ {required: true, message: 'Please enter your password!'},
          {pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s])[^\s]{8,}$/,
            message: "Min 8 chars, include uppercase, lowercase, number, and special character. No spaces."}
      ]}
      >
        <Input.Password placeholder="Password" className="!border-black !rounded-lg !bg-mainWhite"/>
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
        <Button htmlType="submit" type="ghost" className="!font-Inder !rounded-lg !border-none !bg-green !hover:text-black w-full max-w-form">
          Sign Up
        </Button>
      </Form.Item>
    </Form>
  );
};

export default AuthForm;
