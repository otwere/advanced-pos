// App.js
"use client";
import React, { useState } from "react";
import { Layout } from "antd";
import Header from "./Components/HeaderComponent/Header";
import Siderbar from "./Components/SidebarComponent/Siderbar";
import Content from "./Components/ContentComponent/Content";
import Footer from "./Components/FooterComponent/Footer";

const App = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <>
    <div className="flex">
      <Siderbar collapsed={collapsed} />
      <div className="flex-1">
        <Header collapsed={collapsed} setCollapsed={setCollapsed} />
        <Content collapsed={collapsed} />        
        <Content collapsed={collapsed} />        
        <Content collapsed={collapsed} />        
                
                       
      </div>
    </div>
    <Footer collapsed={collapsed} setCollapsed={setCollapsed} /><Footer collapsed={collapsed} setCollapsed={setCollapsed} />
    </>
  );
};

export default App;
