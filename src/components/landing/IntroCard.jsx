import { Button } from 'antd';

function IntroCard() {
    return(
        <div>
        <h1 className='font-oswald font-extrabold text-4xl pb-3 text-center'>ToDo Py</h1>
        <div className='max-w-80'>
            <p>Stay Organized, Get Things Done: Your Ultimate To-Do List App.</p>
            <p>A todo list app is a digital task management tool designed to help users organize and prioritize
                their daily activities and responsibilities.</p>
        </div>
        <Button className="font-Inder !rounded-lg !border-none !bg-green !w-96 !h-10" type="ghost"> Get Started</Button>
        <p className="font-Inder text-center p-6">Already have an account? <a href='#'>Sign ip</a></p>
        </div>
    )
}
export default IntroCard;