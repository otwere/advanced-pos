import React from "react";
import Link from "next/link";
import { DesktopOutlined } from "@ant-design/icons";
import { Tooltip } from "antd";

const DesktopIcon = () => {
  return (
    <Link href="/" passHref>
      <Tooltip title="Dashboard">
        <DesktopOutlined style={{ fontSize: "27px", color: "#08c" , marginLeft: '-50px'}} />
      </Tooltip>
    </Link>
  );
};

export default DesktopIcon;
