import { useState } from 'react'
import SignInForm from '../../components/authentication/SignInForm';
import { Input, Button } from "antd";
import { MenuOutlined, SearchOutlined } from "@ant-design/icons";

const Dashboard = () => {
  return (
    <div className="flex h-screen bg-lightGray">
      <div className="w-64 bg-white shadow-md rounded-3xl p-6 flex flex-col justify-between">
        {/* Top Section */}
        <div>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold">Menu</h2>
            <MenuOutlined className="text-xl" />
          </div>

          {/* Search */}
          <Input
            prefix={<SearchOutlined />}
            placeholder="Search..."
            className="rounded-full mb-6"
          />

          {/* Tasks Section */}
          <div className="mb-6">
            <h3 className="font-semibold mb-3">Tasks</h3>
            <ul className="space-y-3">
              <li className="flex justify-between">
                <span className="flex items-center gap-2">» Upcoming</span>
                <span className="bg-gray-200 text-xs px-2 py-1 rounded-full">
                  15+
                </span>
              </li>
              <li className="flex justify-between">
                <span className="flex items-center gap-2">☰ Today</span>
                <span className="bg-gray-200 text-xs px-2 py-1 rounded-full">
                  8
                </span>
              </li>
              <li>📅 Calendar</li>
              <li>📝 Sticky Wall</li>
            </ul>
          </div>

          {/* Lists Section */}
          <div>
            <h3 className="font-semibold mb-3">Lists</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <span className="w-3 h-3 rounded-full bg-red-500"></span>
                Work
              </li>
              <li className="flex items-center gap-3">
                <span className="w-3 h-3 rounded-full bg-green-500"></span>
                Personal
              </li>
              <li className="flex items-center gap-3">
                <span className="w-3 h-3 rounded-full bg-blue-500"></span>
                Study
              </li>
              <li className="text-gray-500 flex items-center gap-2">
                ⊕ Add new list
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">☰ Settings</div>
          <div className="flex items-center gap-2">⇦ Sign Out</div>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-1 p-12 flex flex-col justify-center items-center text-center bg-white rounded-3xl shadow-md mx-6">
        <h1 className="text-3xl font-bold mb-4">Welcome to ToDoPy</h1>
        <p className="text-gray-600 max-w-xl mb-8">
          A to-do app is a simple, user-friendly digital tool designed to help
          individuals and teams organize tasks and manage their daily
          activities efficiently. Users can create, edit, and prioritize tasks,
          set deadlines or reminders, categorize items, and track their
          progress, all within an intuitive and accessible interface. These apps
          are essential for improving productivity, reducing stress, and
          ensuring that important responsibilities are not forgotten.
        </p>
        <Button
          type="primary"
          className="!bg-green-400 !border-none hover:!bg-green-500 text-black font-semibold px-6 py-2 rounded-lg"
        >
          Go to tasks
        </Button>
      </main>
    </div>
  );
};

export default Dashboard;
