import { useState, useEffect  } from 'react'
import { Button, Alert  } from "antd";
import SignInForm from '../../components/authentication/SignInForm';
import mainImage from '../../assets/Rectangle-1.png';
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { Link } from "react-router";


function SignIn() {
  useEffect(() => {
    document.body.classList.add("bg-lightGray"); 
    return () => {
      document.body.classList.remove("bg-lightGray");
    }
  }, []);

  const [alertMsg, setAlertMsg] = useState(null);

  return (
  <div className="container mx-auto flex flex-col lg:flex-row h-screen gap-8 pt-6 pb-6 lg:pt-11 lg:pb-11">
      <div className="leftSide flex-1 hidden lg:block">
          <img src={mainImage} alt="main image"className="w-full h-full object-cover rounded-40"/>
        </div>

        <div className="rightSide shadow-xl rounded-40 bg-mainWhite flex flex-col items-center justify-center flex-1">
          <div className="w-full max-w-form">
            <SignInForm setAlertMsg={setAlertMsg}
            />
          </div>
          <div className="flex flex-col lg:flex-row justify-between gap-4 lg:gap-24">
            <Button className="!font-Inder !bg-lightGray !rounded-lg " type="ghost"><FcGoogle /> Google</Button>
            <Button className="!font-Inder !bg-lightGray !rounded-lg" type="ghost"><FaFacebook className="text-blue-800" /> Facebook</Button>
          </div>
          <p className="!font-Inder text-center p-6">
              Don't have an account? <Link to="/signup"className='hover:underline'>Sign up</Link>
          </p>
          {alertMsg && (
            <Alert
            message={alertMsg.message}
            type={alertMsg.type}
            showIcon
            className="mt-4"
          />
          )}
      </div>
    </div>
  
  )
}

export default SignIn;