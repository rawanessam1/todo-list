import { StrictMode } from 'react'
import './index.css';
import "antd/dist/reset.css"; // Ant Design styles

import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import Landing from "./pages/landing/Landing.jsx";
import SignIn from "./pages/authentication/SignIn.jsx";
import SignUp from "./pages/authentication/SignUp.jsx";
import Dashboard from "./pages/dashboard/Dashboard.jsx";
import Today from "./pages/Today.jsx";
import Upcoming from "./pages/Upcoming.jsx";
import Calender from "./pages/Calender.jsx";

const root = document.getElementById("root");
ReactDOM.createRoot(root).render(
   <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />

        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />

        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/today" element={<Today />} />
        <Route path="/upcoming" element={<Upcoming />} />
        <Route path="/calendar" element={<Calender />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
