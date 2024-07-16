import React, { useState, useEffect } from "react";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Button } from "antd";
import HeaderProfile from "../HeaderProfileComponent/HeaderProfile";
import NotificationIcon from "../NotificationIconComponent/NotificationIcon";
import DesktopIconComponent from "../DesktopIconComponent/DesktopIconComponent";
import PosIcon from "../PosIconComponet/PosIcon";

const Header = ({ collapsed, setCollapsed }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    if (window.scrollY > lastScrollY) {
      // Scrolling down
      setIsOpen(false);
    } else {
      // Scrolling up
      setIsOpen(true);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <header
      className={`fixed top-0 h-[62px] flex justify-between items-center p-0 bg-white shadow-md transition-all duration-300 ${
        collapsed ? "w-[calc(100%-50px)]" : "w-[calc(100%-220px)]"
      } ${isOpen ? "translate-y-0" : "-translate-y-full"}`}
    >
      <Button
        type="text"
        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        onClick={() => setCollapsed(!collapsed)}
        className="text-lg w-16 h-16"
      />
      <div className="flex items-center ml-[44rem] space-x-4 lg:space-x-10">
        <PosIcon />
        <DesktopIconComponent />
        <div className="hidden lg:block">
          <NotificationIcon />
        </div>
      </div>
      <div className="mr-3 lg:mr-14">
        <HeaderProfile collapsed={collapsed} setCollapsed={setCollapsed} />
      </div>
    </header>
  );
};

export default Header;
