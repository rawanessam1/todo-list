import { Button } from 'antd';
import { Link } from "react-router";
import { useNavigate } from "react-router";

function IntroCard() {
    let navigate = useNavigate();
    return(
        <div>
        <h1 className='font-oswald font-extrabold text-3xl lg:text-4xl pb-3 text-center'>ToDo Py</h1>
        <div className='max-w-80'>
            <p>Stay Organized, Get Things Done: Your Ultimate To-Do List App.</p>
            <p>A todo list app is a digital task management tool designed to help users organize and prioritize
                their daily activities and responsibilities.</p>
        </div>
        <Button className="font-Inder !rounded-lg !border-none !bg-green w-full max-w-xs sm:max-w-sm !h-10 transition duration-300 transform hover:-translate-y-0.5" type="ghost" onClick={() => { navigate("/dashboard"); }}> Get Started</Button>
        <p className="font-Inder text-center p-6">Already have an account? <Link to="/signin" className='hover:underline'>Sign in</Link></p>
        </div>
    )
}
export default IntroCard; 