import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../HomePage/HomePage";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Profile from "../Profile/Profile";
import Story from "../Story/Story";

const Router = () => {
  return (
    <div className="flex"> {/* Added the missing className */}
      <div className="w-[20%] border border-1-slate-500">
        <Sidebar />
      </div>
      <div className="w-full">
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/username" element={<Profile />}></Route>
          <Route path="/story" element={<Story/>}></Route>
        </Routes>

      </div>
    </div>
  );
};

export default Router;
