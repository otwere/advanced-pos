'use client';
import React, { useState } from "react";
import { Layout } from "antd";
import Header from "./Components/HeaderComponent/Header";
import Siderbar from "./Components/SidebarComponent/Siderbar";
import Content from "./Components/ContentComponent/Content";
import Footer from "./Components/FooterComponent/Footer";
import CardsDashboard from "./Components/CardsDashboardComponents/CardsDashboard";
import StockAlertComponent from "./Components/StockAlertComponent/StockAlertComponent";
import BarChartComponent from "./Components/BarChartComponent/BarChartComponent";
import SalesSummaryBoardComponent from "./Components/SalesSummaryBoardComponent/SalesSummaryBoardComponent";

const App = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex flex-1">
        <Siderbar collapsed={collapsed} />
        <div className="flex flex-col flex-1">
          <Header collapsed={collapsed} setCollapsed={setCollapsed} />
          <Content style={{ margin: "0 10px" }}>
            <CardsDashboard collapsed={collapsed} setCollapsed={setCollapsed} />
          </Content>
          <Layout />
          <StockAlertComponent collapsed={collapsed} setCollapsed={setCollapsed} />
          <div className="flex flex-col items-center p-4 bg-gray-100">
            <div className="w-full max-w-8xl flex flex-col lg:flex-row gap-6">
              <div className="w-full lg:w-2/3">
                <BarChartComponent />
              </div>
              <div className="w-full lg:w-1/3">
                <SalesSummaryBoardComponent />
              </div>
            </div>
          </div>
          <Footer collapsed={collapsed} setCollapsed={setCollapsed} />
        </div>
      </div>
    </div>
  );
};

export default App;
