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
    <div className="w-80 bg-lightGray2 shadow-md rounded-40 p-12 flex flex-col justify-between">
      <div>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-4xl font-bold font-oswald">Menu</h2>
          <MenuOutlined className="text-xl" />
        </div>
        <Input prefix={<SearchOutlined />} placeholder="Search..." className="!bg-lightGray !rounded-full mb-6 !border-0 focus:!outline-none focus:!shadow-none"/>
        <div className="mb-6 text-sm">
          <h3 className="font-semibold mb-3 font-oswald">Tasks</h3>
          <ul className="space-y-3 justify-end space-x-4">                    {/* for space between children */}
            <li className="flex justify-between pl-6">
              <div className="flex gap-2"><MdKeyboardDoubleArrowRight /><span> Upcoming</span></div>
              <span className="bg-lightGray text-xs p-2 rounded-full">15+</span>
            </li>
            <li className="flex justify-between pl-6">
              <div className="flex gap-2"><TfiMenuAlt /><span> Today</span></div>
              <span className="bg-lightGray text-xs p-2 rounded-full">8</span>
            </li>
            <li className="pl-6">
                <div className="flex gap-2"><LuCalendar /> <span> Calendar</span></div>
            </li>
            <li className="pl-6">
                <div className="flex gap-2"><FaStickyNote /> <span>Sticky Wall</span></div>
            </li>
          </ul>
        </div>
        <div className="text-sm">
          <h3 className="font-semibold mb-4 font-oswald">Lists</h3>
          <ul className="space-y-3">
            <li className="flex items-center gap-3 bg-lightGray pl-6 rounded-40 p-1">
              <span className="w-4 h-3 rounded-full bg-red-500"></span> Work
            </li>
            <li className="flex items-center gap-3 bg-lightGray pl-6 rounded-40 p-1">
              <span className="w-4 h-3 rounded-full bg-green-500"></span> Personal
            </li>
            <li className="flex items-center gap-3 bg-lightGray pl-6 rounded-40 p-1">
              <span className="w-4 h-3 rounded-full bg-blue-500"></span> Study
            </li>
            <li className="text-black/70 flex items-center gap-2 pl-6"><IoIosAddCircleOutline /> Add new list</li>
          </ul>
        </div>
      </div>

      <div className="space-y-3 text-lg mt-12 text-black/70">
        <div className="flex gap-2"><RiMenu5Fill /> Settings</div>
        <div className="flex gap-2"><FiLogOut /> Sign Out</div>
      </div>
    </div>
  );
};

export default SidebarMenu;
