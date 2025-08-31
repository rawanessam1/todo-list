import { useState } from 'react'
import { Form, Button } from "antd";
import SignUpForm from '../../components/authentication/SignUpForm';
import mainImage from '../../assets/Rectangle-1.png';
import { Link } from "react-router";

function SignUp() {
  return (
  <div className="container mx-auto flex h-screen gap-8 pt-11 pb-11">
      <div className="leftSide flex-1">
          <img src={mainImage} alt="main image"className="w-full h-full rounded-40"/>
      </div>

      <div className="rightSide shadow-xl rounded-40 bg-mainWhite flex flex-col items-center justify-center flex-1">
          <div className="w-full max-w-form">
            <SignUpForm />
          </div>
          <p className="font-Inder text-center">
              Already have an account? <Link to="/signin">Sign In</Link>
          </p>
      </div>
    </div>
  )
}

export default SignUp;