import React from "react";
import { Dropdown, Avatar, Menu } from "antd";
import { 
  UserOutlined, 
  SettingOutlined, 
  QuestionCircleOutlined, 
  LogoutOutlined, 
  DownOutlined 
} from "@ant-design/icons";

const HeaderProfile = () => {
  const menu = (
    <Menu>
      <Menu.Item key="1">
        <div className="flex flex-col items-start p-1">
          <h6 className="font-semibold text-[15px] text-blue-700">Snave Webhub Africa (K) Limited</h6>
          <span className="flex justify-center text-xs text-gray-600">Login By: Fadhili Achieng - Manager</span>
        </div>
        <hr className="my-0" />
      </Menu.Item>
      <Menu.Item key="2" icon={<UserOutlined />}>
        <a href="/" className="text-xs">My Profile</a>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="3" icon={<SettingOutlined />}>
        <a href="users-profile.html" className="text-xs">Account Settings</a>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="4" icon={<QuestionCircleOutlined />}>
        <a href="/" className="text-xs">Need Help?</a>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="5" icon={<LogoutOutlined />}>
        <a href="pages-login.html" className="text-xs">Sign Out</a>
      </Menu.Item>
    </Menu>
  );

  return (
    <Dropdown overlay={menu} trigger={['click']} placement="bottomRight" className="text-xs">
      <div className="flex items-center">
        <Avatar 
          src="/snavelogo.png" 
          size="large" 
          className="rounded-full h-10 w-10" // Set fixed height and width
        />
        <span className="ml-2 text-black text-sm font-medium truncate">Fadhili Achieng</span>
        <DownOutlined className="ml-2 text-gray-700 text-xs" /> {/* Set fixed font size */}
      </div>
    </Dropdown>
  );
};

export default HeaderProfile;
