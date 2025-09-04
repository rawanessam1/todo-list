import { useEffect, useState } from "react";
import { Input, message, Button, AutoComplete, Dropdown, Drawer } from "antd";
import { MenuOutlined, SearchOutlined } from "@ant-design/icons";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { TfiMenuAlt } from "react-icons/tfi";
import { LuCalendar } from "react-icons/lu";
import { FaStickyNote } from "react-icons/fa";
import { IoIosAddCircleOutline } from "react-icons/io";
import { RiMenu5Fill } from "react-icons/ri";
import { FiLogOut } from "react-icons/fi";
import { MdLogin } from "react-icons/md";
import { FaUserPlus } from "react-icons/fa6";
import { Link, useNavigate } from "react-router";

const SidebarMenu = () => {
  const navigate = useNavigate();

  // for AutoComplete search
  const pages = ["Today", "Upcoming", "Calendar"];
  const [options, setOptions] = useState([]);
  const handleSearch = (value) => {
    const filtered = pages
      .filter(page => page.toLowerCase().includes(value.toLowerCase()))
      .map(page => ({ label: page, value: page }));
      setOptions(filtered);
  };
  const handleSelect = (value) => {
    const query = value.toLowerCase();
    if(query === "today") navigate("/today");
    else if(query === "upcoming") navigate("/upcoming");
    else if(query === "calendar") navigate("/calendar");
  };

  /* for settings */
   const settingsMenu = [
  { key: "1", label:( <div className="flex items-center gap-2 text-sm"> <MdLogin /> Login </div> ), onClick: () => navigate("/signin") },
  { key: "2", label:(<div className="flex items-center gap-2 text-sm"><FaUserPlus /> Sign Up</div> ), onClick: () => navigate("/signup") },
  ];

  /* to get username from localStorage */
  const [username, setUsername] = useState("");
  useEffect(() => {
    const storedName = localStorage.getItem("username");
    if (storedName) {
      setUsername(storedName);
    }
  }, []);

  /* this is for removing hello, user when clicking sign out */
  const [messageApi, contextHolder] = message.useMessage();
  const info = () => {
    messageApi.success('Signing out...');
    setTimeout(() => {
    localStorage.removeItem("username");
    setUsername("");
    navigate("/signin", { replace: true });
  }, 3000);
  };

  /* to make it responsive on mobile */
  const [openDrawer, setOpenDrawer] = useState(false);


  const SideBarContent = (
    <div className="w-80 bg-lightGray2 shadow-md rounded-40 p-10 flex flex-col justify-between">
      <div>
        <p className="font-bold">
        {username && (
          <>
          Hello, <span className="text-green">{username}</span>
          </>
        )}
        </p>
        <div className="flex justify-between items-center">
          <h2 className="text-3xl lg:text-4xl font-bold font-oswald">Menu</h2>
          <MenuOutlined className="text-xl" />
        </div>
        <AutoComplete options={options} onSearch={handleSearch} onSelect={handleSelect} className="!mb-6" >
        <Input prefix={<SearchOutlined />} placeholder="Search..."
        className="!bg-lightGray !rounded-full !border-0 "
        />
        </AutoComplete>
        <div className="mb-6 text-sm">
          <h3 className="font-semibold mb-3 font-oswald">Tasks</h3>
          <ul className="space-y-3 justify-end space-x-4">                    {/* for space between children */}
            <li className="flex justify-between pl-6">
              <Link to="/upcoming" className="flex justify-between w-full">
              <div className="flex gap-2"> <MdKeyboardDoubleArrowRight /> <span>Upcoming</span></div>
              <span className="bg-lightGray text-xs p-2 rounded-full">15+</span>
             </Link>
            </li>
            <li className="flex justify-between pl-6">
              <Link to="/today" className="flex justify-between w-full">
              <div className="flex gap-2"><TfiMenuAlt /><span>Today</span></div>
              <span className="bg-lightGray text-xs p-2 rounded-full">8</span>
             </Link>
            </li>
            <li className="pl-6">
              <Link to="/calendar" className="flex gap-2">
              <LuCalendar /><span>Calendar</span>
              </Link>
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

      <div className="space-y-3 mt-12 text-black/70">
        <Dropdown menu={{ items: settingsMenu }} placement="topRight" trigger={['hover']}>
          <div className="flex gap-2 cursor-pointer items-center">
            <RiMenu5Fill /> Settings
          </div>
        </Dropdown>

        {contextHolder}
        <div className="flex gap-2 cursor-pointer" onClick={info}><FiLogOut /> Sign Out</div>
      </div>
    </div>
  );

    return (
    <>
      {/* Desktop */}
      <div className="hidden lg:block">{SideBarContent}</div>

      {/* Mobile */}
      <div className="lg:hidden fixed top-4 left-4 z-50">
        <Button
          type="primary"
          className="!bg-green !text-black"
          onClick={() => setOpenDrawer(true)}
          icon={<MenuOutlined />}
        />
      </div>

      {/* Mobile Drawer */}
      <Drawer
        placement="left"
        closable={true}
        onClose={() => setOpenDrawer(false)}
        open={openDrawer}
        width={370}
      >
        {SideBarContent}
      </Drawer>
    </>
  );
};

export default SidebarMenu;
