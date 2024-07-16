import React, { useEffect, useRef, useState } from "react";
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
  LinkOutlined,
  PlusCircleOutlined,
  DiffOutlined,
  FieldTimeOutlined,
  UsergroupAddOutlined,
  RotateRightOutlined,
  RotateLeftOutlined,
  SwapOutlined,
  TagsOutlined,
  FileExcelOutlined,
  CalculatorOutlined,
  GoldOutlined,
  DotChartOutlined,
  ApartmentOutlined,
  BlockOutlined,
  AuditOutlined,
  HddOutlined,
  PercentageOutlined,
  SolutionOutlined,
  LockOutlined,
  SecurityScanOutlined,
  BankOutlined,
  CloseCircleOutlined,
  FileDoneOutlined,
  ReconciliationOutlined,
  FilePdfOutlined,
  HddFilled,
  ProductOutlined,
  FileProtectOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import Logo from "../LogoComponent/Logo";
import "../SidebarComponent/Siderbar.css";

const { SubMenu } = Menu;

const Sidebar = ({ collapsed }) => {
  const [hovered, setHovered] = useState(false);
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
      icon: <ProductOutlined />,
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
        { key: "2-10", icon: <CloseCircleOutlined />, title: "Damaged Items | Products" },
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
        { key: "5-1", icon: <ShoppingCartOutlined />, title: "Make New Sale - POS" },
        { key: "5-2", icon: <UnorderedListOutlined />, title: "Sales List" },
        { key: "5-3", icon: <RotateRightOutlined />, title: "Sales Returns" },
        { key: "5-3", icon: <RotateRightOutlined />, title: "Sales Credit Note" },
        { key: "5-4", icon: <SolutionOutlined />, title: "Invoice Sales" },
        { key: "5-5", icon: <DeleteRowOutlined />, title: "Cancelled Sales" },
        { key: "5-6", icon: <FieldTimeOutlined />, title: "Sales Clearance" },
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
      icon: <UsergroupAddOutlined />,
      title: "Customers | Clients",
      subItems: [
        { key: "8-1", icon: <UserAddOutlined />, title: "Register New Customer | Client" },
        { key: "8-2", icon: <UnorderedListOutlined />, title: "Customers List" },
        { key: "8-3", icon: <FileZipOutlined />, title: "Archived Customers" },
      ],
    },
    {
      key: "9",
      icon: <SnippetsOutlined />,
      title: "Documents | Files",
      subItems: [
        { key: "9-1", icon: <DiffOutlined />, title: "Add New Document File" },
        { key: "9-2", icon: <UnorderedListOutlined />, title: "File Category" },
        { key: "9-3", icon: <UnorderedListOutlined />, title: "Document File List" },
      ],
    },
    {
      key: "10",
      icon: <DollarOutlined />,
      title: "Expenses",
      subItems: [
        { key: "10-1", icon: <PlusOutlined />, title: "Add New Expenditure" },
        { key: "10-2", icon: <CalculatorOutlined />, title: "Expenditure Breakdown" },
      ],
    },
    {
      key: "11",
      icon: <DatabaseOutlined />,
      title: "Accounting",
      subItems: [
        { key: "11-1", icon: <HddFilled />, title: "Accounts Types" },
        { key: "11-2", icon: <BlockOutlined />, title: "Sub Accounts Types" },
        { key: "11-3", icon: <PlusCircleOutlined />, title: "Add New Chart of Account" },
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
      icon: <ReconciliationOutlined />,
      title: "Report Manager",
      subItems: [
        { key: "12-1", icon: <BarChartOutlined />, title: "Expense Report" },
        { key: "12-2", icon: <BlockOutlined />, title: " Profit Report" },
        { key: "12-3", icon: <TagsOutlined />, title: "Customers Report" },      
        { key: "12-5", icon: <UsergroupAddOutlined />, title: "Supplier  Report" },
        { key: "12-6", icon: <FileExcelOutlined />, title: "Customers Statement(PDF)" },
        { key: "12-7", icon: <FilePdfOutlined />, title: "Happy Hour Report" },
        { key: "12-8", icon: <UsergroupAddOutlined />, title: "User Logs Report" },
        { key: "12-9", icon: <AuditOutlined />, title: "Audit Trail Report" },
      ],
    },
    {
      key: "13",
      icon: <BarChartOutlined />,
      title: "Summary Reports",
      subItems: [
        { key: "13-1", icon: <BarChartOutlined />, title: "Summary Daily Report" },
        { key: "13-2", icon: <BlockOutlined />, title: "Z-Report" },
        { key: "13-3", icon: <TagsOutlined />, title: "Debtors Report" },
        { key: "13-4", icon: <UsergroupAddOutlined />, title: "Creditors Report" },
        
      ],
      },
      {
        key: "14",
        icon: <PercentageOutlined />,
        title: "Tax Reports",
        subItems: [
          { key: "14-1", icon: <BankOutlined />, title: "Income Company - Tax Report" },
          { key: "14-2", icon: <PercentageOutlined/>, title: "VAT Tax - Report" },     
          { key: "14-3", icon: <BlockOutlined />, title: "WithHolding Tax (WHT) - Report"},     
          
        ],
        },
        {
          key: "15",
          icon: <ShoppingCartOutlined />,
          title: "Sales Reports",
          subItems: [
            { key: "15-1", icon: <FileDoneOutlined />, title: "Clearance Report" },
            { key: "15-2", icon: <BlockOutlined />, title: "Sales Report" },     
            { key: "15-3", icon: <BlockOutlined />, title: "Sales Report Custom"},     
            { key: "15-4", icon: <BarChartOutlined />, title: "Sales Report (Employees)" },
            { key: "15-5", icon: <BlockOutlined />, title: "Item Sales Report" },     
            { key: "15-6", icon: <BlockOutlined />, title: "Sales Payments Report"},     
            { key: "15-7", icon: <RotateRightOutlined />, title: "Sales Return Report" },
            { key: "15-8", icon: <BlockOutlined />, title: "Sales Cancel Report" },             
            
          ],
          },
          {
            key: "16",
            icon: <ShoppingOutlined />,
            title: "Purchase Reports",
            subItems: [
              { key: "16-1", icon: <FilePdfOutlined />, title: "Purchase Report" },
              { key: "16-2", icon: <FilePdfOutlined />, title: "Items Purchase Report" },     
              { key: "16-3", icon: <FilePdfOutlined />, title: "Purchase Payments Report"},     
              { key: "16-4", icon: <FilePdfOutlined />, title: "Purchase Analysis Report"},     
              
            ],
            },
            {
              key: "17",
              icon: <ReconciliationOutlined />,
              title: "Stock | Inventory Reports",
              subItems: [
                { key: "17-1", icon: <TagsOutlined />, title: "Price List" },
                { key: "17-2", icon: <FilePdfOutlined />, title: "Stock | Inventory Report" },                     
                { key: "17-3", icon: <BlockOutlined />, title: "Items Ledger Report"},                                   
                { key: "17-5", icon: <FileExcelOutlined />, title: "Stock Template"},     
                { key: "17-6", icon: <SwapOutlined />, title: "Stock Transfer"},     
                { key: "17-7", icon: <StockOutlined />, title: "Stock Adjust Report"},     
                { key: "17-8", icon: <WarningOutlined />, title: "Stock Alert Report" },
                { key: "17-9", icon: <DiffOutlined />, title: "Items Valuation Report" },     
                { key: "17-10", icon: <FileProtectOutlined />, title: "Verified Stock | Inventory" },     
                { key: "17-11", icon: <CloseCircleOutlined />, title: "Damaged Items Report"},     
                { key: "17-12", icon: <BlockOutlined />, title: "Issued Items Report"},     
                
              ],
              },
              {
                key: "18",
                icon: <UsergroupAddOutlined />,
                title: "Users Management",
                subItems: [
                  { key: "18-1", icon: <UsergroupAddOutlined />, title: "Add New User" },
                  { key: "18-2", icon: <UnorderedListOutlined />, title: "User List" },     
                  { key: "18-3", icon: <LinkOutlined />, title: "Users Logs"},     
                  { key: "18-4", icon: <UnorderedListOutlined />, title: "Roles List"},     
                  
                ],
                },
                {
                  key: "19",
                  icon: <SettingOutlined/>,
                  title: "Settings",
                  subItems: [                
                    { key: "19-1", icon: < BankOutlined />, title: "Company Profile" },
                    { key: "19-2", icon: <SecurityScanOutlined />, title: "Site Settings"},     
                    { key: "19-3", icon: < BankOutlined />, title: "Manage Branch" },     
                    { key: "19-4", icon: <PercentageOutlined />, title: "Tax List"},     
                    { key: "19-5", icon: <LinkOutlined />, title: "Salutation" },
                    { key: "19-6", icon: <LinkOutlined />, title: "Progress Status"},     
                    { key: "19-7", icon: <LinkOutlined />, title: "New Country"},     
                    { key: "19-8", icon: <UnorderedListOutlined />, title: "Country List" },
                    { key: "19-9", icon: <UnorderedListOutlined />, title: "Currency List" },     
                    { key: "19-10", icon: <LockOutlined />, title: "Change Password"},     
                    { key: "19-11", icon: <AuditOutlined />, title: "Audit Trail"},     
                    { key: "19-12", icon: <HddOutlined />, title: "Database Backup"},     
                    
                  ],
                },
              
              { key: "20", icon: <LogoutOutlined />, title: "Logout" },
              ];

  return (
    <div
      className={`sidebar ${collapsed ? "collapsed" : ""}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      ref={sidebarRef}
    >
      <div className="logo-container">
        <Logo />
      </div>
      <Menu
        mode="inline"
        defaultSelectedKeys={["1"]}
        className="menu"
        inlineCollapsed={collapsed}
      >
        {menuItems.map((item) => (
          item.subItems ? (
            <SubMenu
              key={item.key}
              icon={item.icon}
              title={item.title}
              popupClassName={hovered ? "submenu-hovered" : ""}
            >
              {item.subItems.map((subItem) => (
                <Menu.Item key={subItem.key} icon={subItem.icon}>
                  {subItem.title}
                </Menu.Item>
              ))}
            </SubMenu>
          ) : (
            <Menu.Item key={item.key} icon={item.icon}>
              {item.title}
            </Menu.Item>
          )
        ))}
      </Menu>
    </div>
  );
};

export default Sidebar;
