import { useState } from 'react'
import { Form, Button } from "antd";
import SignInForm from '../../components/authentication/SignInForm';
import mainImage from '../../assets/Rectangle-1.png';
import google from '../../assets/google-icon.png';
import facebook from '../../assets/Facebook-icon.png';


function SignIn() {
  return (
    <div className="flex flex-row w-full h-screen justify-center items-center gap-7 p-14">
      <div className="leftSide rounded-[40px]">
        <img src={mainImage} alt="main image" className="object-cover"/>
      </div>

      <div className=" rightSide shadow-xl rounded-[40px] bg-mainWhite p-40 flex flex-col justify-center items-center">
          <div>
            <SignInForm />
          </div>
          <div className="flex justify-between gap-20">
            <Button className="font-Inder !text-xs !bg-lightGray !rounded-lg !w-28 !h-7" type="ghost"> <img src={google} alt="Google" className="w-3 h-3" />Google</Button>
            <Button className="font-Inder !text-xs !bg-lightGray !rounded-lg !w-28 !h-7" type="ghost"> <img src={facebook} alt="Facebook" className="w-3 h-3" />Facebook</Button>
          </div>
          <p className="font-Inder text-center p-6">
              Don't have an account? <a href='#'>Sign up</a>
          </p>
      </div>
    </div>
  
  )
}

export default SignIn;