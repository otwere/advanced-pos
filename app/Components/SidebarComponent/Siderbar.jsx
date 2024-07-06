import React, { useEffect, useRef } from "react";
import {
  DashboardOutlined,
  LogoutOutlined,
  ShoppingCartOutlined,
  BarChartOutlined,
  TruckOutlined,
  FileTextOutlined,
  ShoppingOutlined,
  DeliveredProcedureOutlined,
  UserAddOutlined,
  SettingOutlined,
  UnorderedListOutlined,
  DollarOutlined,
  PlusOutlined,
  WarningOutlined,
  BarcodeOutlined,
  DeleteRowOutlined,
  StockOutlined,
  SnippetsOutlined,
  FileZipOutlined,
  DatabaseOutlined,
  CloseOutlined,
  LinkOutlined,
  PlusCircleOutlined,
  DiffOutlined,
  FieldTimeOutlined,
  UsergroupAddOutlined,
  RotateRightOutlined,
  RotateLeftOutlined,
  ExclamationCircleOutlined,
  SwapOutlined,
  TagsOutlined,
  FileExcelOutlined,
  CalculatorOutlined,
  GoldOutlined,
  DotChartOutlined,
  ApartmentOutlined,
  BlockOutlined,
  AuditOutlined,
  HddOutlined ,
  PercentageOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import Logo from "../LogoComponent/Logo";
import "../SidebarComponent/Siderbar.css"; // Ensure Tailwind CSS is included in your build process

const { SubMenu } = Menu;

const Sidebar = ({ collapsed }) => {
  const sidebarRef = useRef(null);

  useEffect(() => {
    if (sidebarRef.current) {
      sidebarRef.current.scrollTop = 0;
    }
  }, [collapsed]);

  const menuItems = [
    { key: "1", icon: <DashboardOutlined />, title: "Dashboard" },
    {
      key: "2",
      icon: <ShoppingCartOutlined />,
      title: "Items | Products",
      subItems: [
        { key: "2-1", icon: <PlusOutlined />, title: "Add New Items" },
        { key: "2-2", icon: <UnorderedListOutlined />, title: "Item List" },
        { key: "2-3", icon: <UnorderedListOutlined />, title: "Stock Manager" },
        { key: "2-4", icon: <UnorderedListOutlined />, title: "Categories List" },
        { key: "2-5", icon: <UnorderedListOutlined />, title: "Brand List" },
        { key: "2-6", icon: <UnorderedListOutlined />, title: "Unit List (UoM)" },
        { key: "2-7", icon: <BarcodeOutlined />, title: "Print Labels Codes" },
        { key: "2-8", icon: <LinkOutlined />, title: "Issued Products" },
        { key: "2-9", icon: <LinkOutlined />, title: "Manage Dispatch" },
        { key: "2-10", icon: <CloseOutlined />, title: "Damaged Products" },
        { key: "2-11", icon: <WarningOutlined />, title: "Stock Alert" },
      ],
    },
    {
      key: "3",
      icon: <ShoppingOutlined />,
      title: "Purchases",
      subItems: [
        { key: "3-1", icon: <PlusOutlined />, title: "Add New Purchase" },
        { key: "3-2", icon: <UnorderedListOutlined />, title: "Purchase List" },
        { key: "3-3", icon: <RotateLeftOutlined />, title: "Purchase Return" },
        { key: "3-4", icon: <UnorderedListOutlined />, title: "Purchase Analysis List" },
      ],
    },
    {
      key: "4",
      icon: <FileTextOutlined />,
      title: "Quotation",
      subItems: [
        { key: "4-1", icon: <PlusOutlined />, title: "Create New Quotation" },
        { key: "4-2", icon: <UnorderedListOutlined />, title: "Quotation List" },
      ],
    },
    {
      key: "5",
      icon: <ShoppingCartOutlined />,
      title: "Sales",
      subItems: [
        { key: "5-1", icon: <ShoppingCartOutlined />, title: "Make Sale - POS" },
        { key: "5-2", icon: <UnorderedListOutlined />, title: "Sales List" },
        { key: "5-3", icon: <RotateRightOutlined />, title: "Sales Returns" },
        { key: "5-4", icon: <DeleteRowOutlined />, title: "Cancelled Sales" },
        { key: "5-5", icon: <FieldTimeOutlined />, title: "Sales Clearance" },
      ],
    },
    {
      key: "6",
      icon: <DeliveredProcedureOutlined />,
      title: "Delivery Note",
      subItems: [
        { key: "6-1", icon: <PlusOutlined />, title: "Create New Delivery" },
        { key: "6-2", icon: <UnorderedListOutlined />, title: "Delivery List" },
      ],
    },
    {
      key: "7",
      icon: <TruckOutlined />,
      title: "Suppliers",
      subItems: [
        { key: "7-1", icon: <UserAddOutlined />, title: "Create New Supplier" },
        { key: "7-2", icon: <UnorderedListOutlined />, title: "Suppliers List" },
      ],
    },
    {
      key: "8",
      icon: <UserAddOutlined />,
      title: "Customers | Clients",
      subItems: [
        { key: "8-1", icon: <UserAddOutlined />, title: "Create New Customer" },
        { key: "8-2", icon: <UnorderedListOutlined />, title: "Customers List" },
        { key: "8-3", icon: <FileZipOutlined />, title: "Archived Customers" },
      ],
    },
    {
      key: "9",
      icon: <SnippetsOutlined />,
      title: "Documents | Files",
      subItems: [
        { key: "9-2", icon: <DiffOutlined />, title: "Add New Doc File" },
        { key: "9-3", icon: <UnorderedListOutlined />, title: "File Category" },
        { key: "9-4", icon: <UnorderedListOutlined />, title: "Document File List" },
      ],
    },
    {
      key: "10",
      icon: <DollarOutlined />,
      title: "Expenses",
      subItems: [
        { key: "10-1", icon: <PlusOutlined />, title: "Add New Expense" },
        { key: "10-2", icon: <UnorderedListOutlined />, title: "Expense List" },
      ],
    },
    {
      key: "11",
      icon: <CalculatorOutlined />,
      title: "Accounting",
      subItems: [
        { key: "11-1", icon: <DatabaseOutlined />, title: "Accounts Types" },
        { key: "11-2", icon: <BlockOutlined />, title: "Sub Accounts Types" },
        { key: "11-3", icon: <PlusCircleOutlined />, title: "Add Chart of Account" },
        { key: "11-4", icon: <DotChartOutlined />, title: "Chart of Accounts List" },
        { key: "11-5", icon: <DollarOutlined />, title: "Account Balances" },
        { key: "11-6", icon: <DollarOutlined />, title: "Money | Payments" },
        { key: "11-7", icon: <DollarOutlined />, title: "Journal Entry" },
        { key: "11-8", icon: <DollarOutlined />, title: "Profit & Loss (P & L)" },
        { key: "11-9", icon: <ApartmentOutlined />, title: "Balance Sheet" },
        { key: "11-10", icon: <GoldOutlined />, title: "Cash Flow Report" },
        { key: "11-11", icon: <UsergroupAddOutlined />, title: "Customers Balances" },
        { key: "11-12", icon: <UsergroupAddOutlined />, title: "Suppliers Balances" },
      ],
    },
    {
      key: "12",
      icon: <BarChartOutlined />,
      title: "Report Manager",
      subItems: [
        { key: "12-1", icon: <BarChartOutlined />, title: "Summary Daily Report" },
        { key: "12-2", icon: <BlockOutlined />, title: "Z-Report" },
        { key: "12-3", icon: <UsergroupAddOutlined />, title: "Debtors Reports" },
        { key: "12-4", icon: <UsergroupAddOutlined />, title: "Creditors Reports" },
        { key: "12-5", icon: <HddOutlined />, title: "Stock Reports" },
        { key: "12-6", icon: <PercentageOutlined />, title: "Tax Reports" },
        { key: "12-7", icon: <PercentageOutlined />, title: "VAT Reports" },
        { key: "12-8", icon: <ShoppingCartOutlined />, title: "Sales Report" },
        { key: "12-9", icon: <UsergroupAddOutlined />, title: "Sales Customers Report" },
        { key: "12-10", icon: <UsergroupAddOutlined />, title: "Sales Report (Employee)" },
        { key: "12-11", icon: <UnorderedListOutlined />, title: "Sales Report Custom" },
        { key: "12-12", icon: <UnorderedListOutlined />, title: "Sales Customers Report" },
        { key: "12-13", icon: <UnorderedListOutlined />, title: "Customers Statements" },
        { key: "12-14", icon: <UnorderedListOutlined />, title: "General Inventory Report" },
        { key: "12-15", icon: <UnorderedListOutlined />, title: "Damaged Items Report" },
        { key: "12-16", icon: <UnorderedListOutlined />, title: "Cash Flow Statement" },
        { key: "12-17", icon: <UnorderedListOutlined />, title: "Dispatch Analysis Report" },
        { key: "12-18", icon: <UnorderedListOutlined />, title: "Inventory Aging Report" },
        { key: "12-19", icon: <UnorderedListOutlined />, title: "Cost Analysis Report" },
        { key: "12-20", icon: <UnorderedListOutlined />, title: "Tax Analysis Report" },
        { key: "12-21", icon: <UnorderedListOutlined />, title: "Happy hour Report" },
        { key: "12-22", icon: <UnorderedListOutlined />, title: "Purchase Payment Report" }, 
      ],
    },
    {
      key: "13",
      icon: <SettingOutlined />,
      title: "Settings | Admin",
      subItems: [
        { key: "13-1", icon: <UnorderedListOutlined />, title: "System Settings" },
        { key: "13-2", icon: <UserAddOutlined />, title: "Users List" },
        { key: "13-3", icon: <UserAddOutlined />, title: "User Roles" },
        { key: "13-4", icon: <UserAddOutlined />, title: "User Permissions" },
      ],
    },
    { key: "14", icon: <LogoutOutlined />, title: "Logout" },
  ];

  const renderMenuItems = (items) =>
  items.map((item) =>
    item.subItems ? (
      <SubMenu key={item.key} icon={item.icon} title={item.title}>
        {renderMenuItems(item.subItems)}
      </SubMenu>
    ) : (
      <Menu.Item key={item.key} icon={item.icon} className={item.key === "14" ? "mt-10" : ""}>
        {item.title}
      </Menu.Item>
    )
  );


  return (
    <div
      className={`sidebar h-100% mt-2 overflow-y-auto flex flex-col ${collapsed ? "w-20" : "w-64"} transition-all duration-300 bg-gray-800 text-white`}
      ref={sidebarRef}
    >
      <Logo collapsed={collapsed} />
      <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
        {renderMenuItems(menuItems)}
      </Menu>
    </div>
  );
};

export default Sidebar;
