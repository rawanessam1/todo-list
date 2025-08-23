import { useState } from 'react'
import { Button } from "antd";
import MainLayout from "../../components/layout/MainLayout";

const Dashboard = () => {
  return (
    <MainLayout bgColor="bg-lightGray2">
      <div className="flex flex-col justify-center items-center text-center">
        <h1 className="text-3xl font-bold mb-4">Welcome to ToDoPy</h1>
        <p className="text-gray-600 max-w-xl mb-8">
          A to-do app is a simple, user-friendly digital tool designed to help individuals
          and teams organize tasks and manage their daily activities efficiently.
          Users can create, edit, and prioritize tasks, set deadlines or reminders,
          categorize items, and track their progress, all within an intuitive and accessible interface.
          These apps are essential for improving productivity, reducing stress, 
          and ensuring that important responsibilities are not forgotten.
        </p>
        <Button
          type="primary"
          className="!bg-green-400 !border-none hover:!bg-green-500 text-black font-semibold px-6 py-2 rounded-lg"
        >
          Go to tasks
        </Button>
      </div>
    </MainLayout>
  );
};

export default Dashboard;