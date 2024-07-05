import React from 'react';
import Link from 'next/link';
import { ShoppingCartOutlined } from '@ant-design/icons';
import { Tooltip } from 'antd';

const PosIcon = () => {
  return (
    <Link href="/" passHref>
      <Tooltip title="Make Sales - POS">
        <ShoppingCartOutlined className=" text-blue-500 text-3xl ml-[-6rem]" />
      </Tooltip>
    </Link>
  );
};

export default PosIcon;
