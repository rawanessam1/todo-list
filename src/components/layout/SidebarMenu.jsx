import React from "react";
import { Input } from "antd";
import { MenuOutlined, SearchOutlined } from "@ant-design/icons";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { TfiMenuAlt } from "react-icons/tfi";
import { LuCalendar } from "react-icons/lu";
import { FaStickyNote } from "react-icons/fa";
import { IoIosAddCircleOutline } from "react-icons/io";
import { RiMenu5Fill } from "react-icons/ri";
import { FiLogOut } from "react-icons/fi";

const SidebarMenu = () => {
  return (
    <div className="w-64 bg-lightGray2 shadow-md rounded-3xl p-6 flex flex-col justify-between">
      <div>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Menu</h2>
          <MenuOutlined className="text-xl" />
        </div>
        <Input prefix={<SearchOutlined />} placeholder="Search..." className="bg-lightGray rounded-full mb-6"/>
        <div className="mb-6">
          <h3 className="font-semibold mb-3">Tasks</h3>
          <ul className="space-y-3">                    {/* for space between children */}
            <li className="flex justify-between">
              <MdKeyboardDoubleArrowRight /><span>Upcoming</span>
              <span className="bg-lightGray text-xs p-2 rounded-full">15+</span>
            </li>
            <li className="flex justify-between">
              <span><TfiMenuAlt /> Today</span>
              <span className="bg-lightGray text-xs p-2 rounded-full">8</span>
            </li>
            <li><LuCalendar /> Calendar</li>
            <li><FaStickyNote /> Sticky Wall</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-3">Lists</h3>
          <ul className="space-y-3">
            <li className="flex items-center gap-3 bg-lightGray">
              <span className="w-3 h-3 rounded-full bg-red-500"></span> Work
            </li>
            <li className="flex items-center gap-3 bg-lightGray">
              <span className="w-3 h-3 rounded-full bg-green-500"></span> Personal
            </li>
            <li className="flex items-center gap-3 bg-lightGray">
              <span className="w-3 h-3 rounded-full bg-blue-500"></span> Study
            </li>
            <li className="text-gray-500 flex items-center gap-2"><IoIosAddCircleOutline /> Add new list</li>
          </ul>
        </div>
      </div>

      <div className="space-y-3">
        <div className="flex items-center gap-2"><RiMenu5Fill /> Settings</div>
        <div className="flex items-center gap-2"><FiLogOut /> Sign Out</div>
      </div>
    </div>
  );
};

export default SidebarMenu;
