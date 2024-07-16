import React, { useState } from "react";
import { Table, Tag, Select, Button, Input, message } from "antd";
import moment from "moment";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const { Option } = Select;
const { Search } = Input;

const PaymentSummaryComponent = () => {
  const [selectedPaymentMode, setSelectedPaymentMode] = useState("All");
  const [searchText, setSearchText] = useState("");
  const [data] = useState([
    {
      key: "1",
      sn: "1",
      customerName: "John Doe",
      receivedDate: "2024-07-07",
      receivedTime: "10:30 AM",
      receivedBy: "Alice",
      paymentMode: "Cash",
      transactionId: "TRX12345",
      invoiceReceiptNo: "INV123",
      advanceAmount: 500,
      phoneNumber: "123-456-7890",
    },
    {
      key: "2",
      sn: "2",
      customerName: "Jane Smith",
      receivedDate: "2024-07-06",
      receivedTime: "02:15 PM",
      receivedBy: "Bob",
      paymentMode: "Cheque",
      transactionId: "TRX67890",
      invoiceReceiptNo: "RCP456",
      advanceAmount: 26800,
      phoneNumber: "987-654-3210",
    },
  ]);

  const columns = [
    {
      title: "SN",
      dataIndex: "sn",
      key: "sn",
      width: "3%",
    },
    {
      title: "Client Name",
      dataIndex: "customerName",
      key: "customerName",
      width: "12%",
    },
    {
      title: "Date",
      dataIndex: "receivedDate",
      key: "receivedDate",
      width: "12%",
    },
    {
      title: "Time",
      dataIndex: "receivedTime",
      key: "receivedTime",
      width: "10%",
    },
    {
      title: "Received By",
      dataIndex: "receivedBy",
      key: "receivedBy",
      width: "12%",
    },
    {
      title: "Pay Mode",
      dataIndex: "paymentMode",
      key: "paymentMode",
      width: "10%",
      render: (mode) => {
        let color =
          mode === "Cash"
            ? "cyan"
            : mode === "Cheque"
            ? "blue"
            : mode === "Mpesa"
            ? "green"
            : mode === "PDQ"
            ? "purple"
            : "geekblue";
        return <Tag color={color}>{mode}</Tag>;
      },
    },
    {
      title: "Invoice Number",
      dataIndex: "invoiceReceiptNo",
      key: "invoiceReceiptNo",
      width: "15%",
    },
    {
      title: "Transaction ID",
      dataIndex: "transactionId",
      key: "transactionId",
      width: "12%",
    },
    {
      title: "Phone Number",
      dataIndex: "phoneNumber",
      key: "phoneNumber",
      width: "18%",
      align: "left",
    },
    {
      title: "Amount(Kshs)",
      dataIndex: "advanceAmount",
      key: "advanceAmount",
      width: "15%",
      align: "right",
      render: (number) => <span>{number}</span>,
    },
  ];

  const filteredData = data.filter((item) => {
    const matchesPaymentMode = selectedPaymentMode === "All" || item.paymentMode === selectedPaymentMode;
    const matchesSearchText = 
      item.customerName.toLowerCase().includes(searchText.toLowerCase()) ||
      item.transactionId.toLowerCase().includes(searchText.toLowerCase()) ||
      item.phoneNumber.includes(searchText);

    return matchesPaymentMode && matchesSearchText;
  });

  const totalAdvanceAmount = filteredData.reduce(
    (acc, current) => acc + current.advanceAmount,
    0
  );

  const handleModeFilterChange = (value) => {
    setSelectedPaymentMode(value);
  };

  const handleSearch = (value) => {
    setSearchText(value);
  };

  const generatePDF = async () => {
    try {
      const canvas = await html2canvas(document.getElementById("pdf-table"));
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      pdf.addImage(imgData, "PNG", 0, 0);
      pdf.save("payment_summary.pdf");
    } catch (error) {
      message.error("Failed to generate PDF. Please try again later.");
      console.error("Error generating PDF:", error);
    }
  };

  return (
    <div className="p-4">
      <div className="mb-4 flex justify-between items-center">
        <Select
          defaultValue="All Payments Mode"
          style={{ width: 180 }}
          onChange={handleModeFilterChange}
        >
          <Option value="All">All Payments Mode</Option>
          <Option value="Cash">Cash</Option>
          <Option value="Mpesa">Mpesa</Option>
          <Option value="Cheque">Cheque</Option>
          <Option value="PDQ">PDQ</Option>
          <Option value="Bank Transfer">Bank Transfer</Option>
        </Select>
        <Search
          placeholder="Search by Client name, ID, or Phone"
          onSearch={handleSearch}
          style={{ width: 300, marginRight: 520 }}
        />
        <Button type="primary" className="ml-2" onClick={generatePDF}>
          Export PDF
        </Button>
      </div>
      <div id="pdf-table">
        <Table
          columns={columns}
          dataSource={filteredData}
          pagination={false}
          footer={() => (
            <div style={{ textAlign: "right", fontWeight: "bold" }}>
              Total: Kshs {totalAdvanceAmount}
            </div>
          )}
        />
      </div>
    </div>
  );
};

export default PaymentSummaryComponent;
