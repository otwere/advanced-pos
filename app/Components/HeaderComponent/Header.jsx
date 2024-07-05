import React from "react";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Button } from "antd";
import SearchBar from "../SearchComponent/SearchBar";
import HeaderProfile from "../HeaderProfileComponent/HeaderProfile";
import NotificationIcon from "../NotificationIconComponent/NotificationIcon";
import DesktopIconComponent from "../DesktopIconComponent/DesktopIconComponent";
import PosIcon from "../PosIconComponet/PosIcon";

const Header = ({ collapsed, setCollapsed }) => {
  return (
    <header
      className={`fixed top-0 h-16 flex justify-between items-center p-0 bg-white shadow-md transition-all duration-300 ${
        collapsed
          ? "w-[calc(100%-80px)] ml-[8px]"
          : "w-[calc(100%-250px)] ml-[15px]"
      }`}
    >
      <Button
        type="text"
        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        onClick={() => setCollapsed(!collapsed)}
        className="text-lg w-16 h-16"
      />
      <div className="flex items-center ml-[50rem] space-x-10 ">
        <PosIcon /> 
        <DesktopIconComponent />
        <NotificationIcon  />        
       
      </div>
      <div className="mr-10">
         <HeaderProfile /> 
      </div>
    </header>
  );
};

export default Header;
