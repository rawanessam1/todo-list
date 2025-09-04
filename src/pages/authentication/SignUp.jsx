import { useState, useEffect } from 'react'
import { Alert } from "antd";
import SignUpForm from '../../components/authentication/SignUpForm';
import mainImage from '../../assets/Rectangle-1.png';
import { Link } from "react-router";

function SignUp() {
  useEffect(() => {
      document.body.classList.add("bg-lightGray"); 
      return () => {
        document.body.classList.remove("bg-lightGray");
      }
    }, []);

  const [isRegistered, setIsRegistered] = useState(false);
  const [alertMsg, setAlertMsg] = useState(null);

  return (
  <div className="container mx-auto flex flex-col lg:flex-row h-screen gap-8 pt-6 pb-6 lg:pt-11 lg:pb-11">
      <div className="leftSide flex-1 hidden lg:block">
          <img src={mainImage} alt="main image"className="w-full h-full object-cover rounded-40"/>
      </div>

      <div className="rightSide shadow-xl rounded-40 bg-mainWhite flex flex-col items-center justify-center flex-1">
          <div className="w-full max-w-form">
            <SignUpForm onRegisterSuccess={() => setIsRegistered(true)} setAlertMsg={setAlertMsg} />
          </div>
          <p className="font-Inder text-center">
              Already have an account? <Link to="/signin" className='hover:underline'>Sign In</Link>
          </p>
          {alertMsg && (
            <Alert
            message={alertMsg.message}
            type={alertMsg.type}
            showIcon
          />
          )}
          {isRegistered && (
            <Alert
            message="Registered successfully!"
            type="success"
            showIcon
            className="mt-4"
          />
          )}

      </div>
    </div>
  )
}

export default SignUp;