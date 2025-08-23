import { useState } from 'react'
import { Button } from "antd";
import MainLayout from "../../components/layout/MainLayout";  // if Dashboard is nested deeper

const Dashboard = () => {
  return (
    <MainLayout bgColor="bg-lightGray2">
      <div className="flex justify-center items-center h-full">
        <div className='flex flex-col justify-center items-center text-center gap-14'>
        <h1 className="text-4xl font-bold mb-4 font-oswald">Welcome to ToDoPy</h1>
        <p className="max-w-lg mb-8">
          A to-do app is a simple, user-friendly digital tool designed to help individuals
          and teams organize tasks and manage their daily activities efficiently.
          Users can create, edit, and prioritize tasks, set deadlines or reminders,
          categorize items, and track their progress, all within an intuitive and accessible interface.
          These apps are essential for improving productivity, reducing stress, 
          and ensuring that important responsibilities are not forgotten.
        </p>
        <Button
          type="primary"
          className="!bg-green !px-14 !py-4.5 !rounded-xl !font-oswald !text-black !text-2xl"
        >
          Go to tasks
        </Button>
      </div>
      </div>
    </MainLayout>
  );
};

export default Dashboard;