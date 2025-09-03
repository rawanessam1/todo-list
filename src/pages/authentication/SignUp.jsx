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
  <div className="container mx-auto flex h-screen gap-8 pt-11 pb-11">
      <div className="leftSide flex-1">
          <img src={mainImage} alt="main image"className="w-full h-full rounded-40"/>
      </div>

      <div className="rightSide shadow-xl rounded-40 bg-mainWhite flex flex-col items-center justify-center flex-1">
          <div className="w-full max-w-form">
            <SignUpForm onRegisterSuccess={() => setIsRegistered(true)} setAlertMsg={setAlertMsg} />
          </div>
          <p className="font-Inder text-center">
              Already have an account? <Link to="/signin">Sign In</Link>
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