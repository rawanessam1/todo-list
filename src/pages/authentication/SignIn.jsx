import { useState } from 'react'
import { Form, Button } from "antd";
import SignInForm from '../../components/authentication/SignInForm';
import mainImage from '../../assets/Rectangle-1.png';
import google from '../../assets/google-icon.png';
import facebook from '../../assets/Facebook-icon.png';


function SignIn() {
  return (
  <div className="container mx-auto flex h-screen gap-8 pt-11 pb-11">
      <div className="leftSide flex-1">
          <img src={mainImage} alt="main image"className="w-full h-full rounded-[40px]"/>
        </div>

        <div className="rightSide shadow-xl rounded-[40px] bg-mainWhite flex flex-col items-center justify-center flex-1">
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