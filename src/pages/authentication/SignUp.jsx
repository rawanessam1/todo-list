import { useState } from 'react'
import { Form, Button } from "antd";
import SignUpForm from '../../components/authentication/SignUpForm';
import mainImage from '../../assets/Rectangle-1.png';



function SignUp() {
  return (
    <div className="flex flex-row w-full h-screen justify-center items-center gap-7 p-14">
      <div className="leftSide rounded-[40px]">
        <img src={mainImage} alt="main image" className="object-cover"/>
      </div>

        <div className=" rightSide shadow-xl rounded-[40px] bg-mainWhite p-32 flex flex-col justify-center items-center">
          <div>
            <SignUpForm />
          </div>
          <p className="font-Inder text-center">
              Already have an account? <a href='#'>Sign In</a>
          </p>
        </div>
    </div>
  )
}

export default SignUp;