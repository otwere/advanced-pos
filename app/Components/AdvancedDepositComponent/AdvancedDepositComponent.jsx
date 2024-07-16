import React, { useState, useEffect } from "react";
import {
  Table,
  Tag,
  Select,
  Form,
  Input,
  Button,
  DatePicker,
  Modal,
  Space,
  Popconfirm,
} from "antd";
import { PlusOutlined, EditOutlined, DeleteOutlined } from "@ant-design/icons";
import moment from "moment";
import jsPDF from "jspdf";
import "jspdf-autotable";
import 'tailwindcss/tailwind.css';

const { Option } = Select;

const AdvanceDepositComponent = () => {
  const [modeFilter, setModeFilter] = useState("All");
  const [data, setData] = useState([
    {
      key: "1",
      sn: "1",
      customerName: "John Doe",
      receivedDate: "05-07-2024",
      receivedBy: "Alice",
      paymentMode: "Cash",
      transactionId: "TRX12345",
      advanceAmount: 500,
      balance: 500,
    },
    {
      key: "2",
      sn: "2",
      customerName: "Jane Smith",
      receivedDate: "06-07-2024",
      receivedBy: "Bob",
      paymentMode: "Cheque",
      transactionId: "TRX67890",
      advanceAmount: 26800,
      balance: 27300,
    },
    // Add more sample data connected to DB
  ]);
  const [customers] = useState([
    "Phenabo Enterprises Limited",
    "Beata Enterprises",
    "Majanja Suppliers Ltd",
    "Sizonje Mjomba",
    "Charlie Paul",
    "David Okello",
    "High Kings School",
  ]);
  const [receivers] = useState([
    "Alice Bobonda",
    "Bob",
    "Charlie",
    "David",
  ]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingRecord, setEditingRecord] = useState(null);
  const [form] = Form.useForm();
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [searchText, setSearchText] = useState('');
  const [filteredData, setFilteredData] = useState(data);
  const [grandTotal, setGrandTotal] = useState(0); // State for grand total

  useEffect(() => {
    // Calculate grand total whenever filteredData changes
    const total = filteredData.reduce((acc, item) => acc + item.balance, 0);
    setGrandTotal(total);
  }, [filteredData]);

  useEffect(() => {
    filterData(modeFilter, searchText);
  }, [data, modeFilter, searchText]);

  const columns = [
    {
      title: "SN",
      dataIndex: "sn",
      key: "sn",
      width: 40,
    },
    {
      title: "Customer Name",
      dataIndex: "customerName",
      key: "customerName",
      width: 210,
    },
    {
      title: "Received Date",
      dataIndex: "receivedDate",
      key: "receivedDate",
      width: 130,
    },
    {
      title: "Received By",
      dataIndex: "receivedBy",
      key: "receivedBy",
      width: 120,
    },
    {
      title: "Pay Mode",
      dataIndex: "paymentMode",
      key: "paymentMode",
      width: 130,
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
        return <Tag color={color} style={{ whiteSpace: 'nowrap' }}>{mode}</Tag>;
      },
    },
    {
      title: "Transaction ID",
      dataIndex: "transactionId",
      key: "transactionId",
      width: 130,
    },
    {
      title: "Advance Paid",
      dataIndex: "advanceAmount",
      key: "advanceAmount",
      width: 150,
      align: "right",
      render: (text) => <span>{text}</span>,
    },
    {
      title: "Account Balance",
      dataIndex: "balance",
      key: "balance",
      width: 150,
      align: "right",
      render: (text) => <span>{text}</span>,
    },
    {
      title: "Actions",
      key: "actions",
      width: 120,
      render: (text, record) => (
        <Space>
          <Button
            icon={<EditOutlined />}
            onClick={() => showEditModal(record)}
          />
          <Popconfirm
            title="Are you sure to delete this record?"
            onConfirm={() => handleDelete(record.key)}
          >
            <Button icon={<DeleteOutlined />} />
          </Popconfirm>
        </Space>
      ),
    },
  ];

  const handleModeFilterChange = (value) => {
    setModeFilter(value);
  };

  const handleSearch = (value) => {
    setSearchText(value);
  };

  const filterData = (mode, searchText) => {
    let filteredItems = [...data];

    if (mode !== "All") {
      filteredItems = filteredItems.filter(item => item.paymentMode === mode);
    }

    if (searchText) {
      const lowercasedValue = searchText.toLowerCase().trim();
      filteredItems = filteredItems.filter(item =>
        item.customerName.toLowerCase().includes(lowercasedValue)
      );
    }

    setFilteredData(filteredItems);
  };

  const showModal = () => {
    setEditingRecord(null);
    setIsModalOpen(true);
  };

  const showEditModal = (record) => {
    setEditingRecord(record);
    setIsModalOpen(true);
    form.setFieldsValue({
      customerName: record.customerName,
      receivedDate: moment(record.receivedDate, "DD-MM-YYYY"),
      receivedBy: record.receivedBy,
      paymentMode: record.paymentMode,
      transactionId: record.transactionId,
      advanceAmount: record.advanceAmount.toString(),
    });
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    form.resetFields();
  };

  const handleFormSubmit = (values) => {
    const newPayment = {
      key: editingRecord ? editingRecord.key : (data.length + 1).toString(),
      sn: editingRecord ? editingRecord.sn : (data.length + 1).toString(),
      customerName: values.customerName,
      receivedDate: values.receivedDate.format("DD-MM-YYYY"),
      receivedBy: values.receivedBy,
      paymentMode: values.paymentMode,
      transactionId: values.transactionId,
      advanceAmount: parseFloat(values.advanceAmount),
      balance: editingRecord
        ? editingRecord.balance
        : (data[data.length - 1]?.balance || 0) +
          parseFloat(values.advanceAmount),
    };

    if (editingRecord) {
      setData(
        data.map((item) => (item.key === editingRecord.key ? newPayment : item))
      );
    } else {
      setData([...data, newPayment]);
    }

    form.resetFields();
    setIsModalOpen(false);
  };

  const handleDelete = (key) => {
    setData(data.filter((item) => item.key !== key));
  };

  const handlePageChange = (page, pageSize) => {
    setCurrentPage(page);
    setPageSize(pageSize);
  };

  const disabledDate = (current) => {
    return current && current > moment().endOf("day");
  };

  const exportPDF = () => {
    const doc = new jsPDF();

    // Set document properties
    doc.setProperties({
      title: "Advance Deposit Report",
      subject: "Detailed report of advance deposits",
      author: "Your Company Name",
      keywords: "advance, deposit, report",
      creator: "Your Company Name",
    });

    // Add header
    const addHeader = () => {
      doc.setFontSize(18);
      doc.setTextColor(40);
      doc.setFont("helvetica", "normal"); // Set font here
      doc.text(
        "Advance Deposit Report",
        doc.internal.pageSize.getWidth() / 2,
        20,
        {
          align: "center",
        }
      );
    };

    // Add footer
    const addFooter = (pageNumber, totalPages) => {
      const pageHeight = doc.internal.pageSize.getHeight();
      doc.setFontSize(10);
      doc.text(
        `Page ${pageNumber} of ${totalPages}`,
        doc.internal.pageSize.getWidth() / 2,
        pageHeight - 10,
        {
          align: "center",
        }
      );
    };

    // Define table columns and rows
    const tableColumn = [
      "SN",
      "Customer Name",
      "Received Date",
      "Received By",
      "Payment Mode",
      "Transaction ID",
      "Advance Paid",
      "Balance",
    ];
    const tableRows = [];

    filteredData.forEach((item) => {
      const itemData = [
        item.sn,
        item.customerName,
        item.receivedDate,
        item.receivedBy,
        item.paymentMode,
        item.transactionId,
        item.advanceAmount.toFixed(2),
        item.balance.toFixed(2),
      ];
      tableRows.push(itemData);
    });

    // Add header to each page
    addHeader();

    // Auto-table options
    doc.autoTable({
      head: [tableColumn],
      body: tableRows,
      startY: 30,
      theme: "grid",
      headStyles: {
        fillColor: [22, 160, 133], // Your custom color
        textColor: [255, 255, 255],
        fontSize: 12,
      },
      footStyles: {
        fillColor: [22, 160, 133],
        textColor: [255, 255, 255],
        fontSize: 12,
      },
      didDrawPage: (data) => {
        // Calculate and add footer to each page
        const pageNumber = doc.internal.getNumberOfPages();
        const totalPages = doc.internal.pages.length - 1; // Total pages (excluding empty last page)
        addFooter(pageNumber, totalPages);
      },
    });

    // Save the PDF
    doc.save("advance_deposit_report.pdf");
  };

  return (
    <div className="p-4">
      <div className="flex flex-col lg:flex-row justify-between mb-4">
        <div className="flex items-center mb-2 lg:mb-0">
          <Select
            value={modeFilter}
            onChange={handleModeFilterChange}
            className="w-32 lg:w-40 mr-2"
          >
            <Option value="All">All</Option>
            <Option value="Cash">Cash</Option>
            <Option value="Cheque">Cheque</Option>
            <Option value="Mpesa">Mpesa</Option>
            <Option value="PDQ">PDQ</Option>
          </Select>
          <Input.Search
            placeholder="Search by customer name"
            onSearch={handleSearch}
            className="w-40 lg:w-60"
            allowClear
          />
        </div>
        <div className="flex items-center">
          <Button
            type="primary"
            icon={<PlusOutlined />}
            onClick={showModal}
            className="mr-2"
          >
            Add Advance
          </Button>
          <Button onClick={exportPDF}>Export to PDF</Button>
        </div>
      </div>
      <Table
        dataSource={filteredData}
        columns={columns}
        pagination={{
          current: currentPage,
          pageSize: pageSize,
          onChange: handlePageChange,
        }}
        summary={() => (
          <Table.Summary.Row>
            <Table.Summary.Cell index={0} colSpan={7}>
              Grand Total
            </Table.Summary.Cell>
            <Table.Summary.Cell index={1} align="right">
              {grandTotal.toFixed(2)}
            </Table.Summary.Cell>
          </Table.Summary.Row>
        )}
        className="border border-gray-200 rounded"
      />
      <Modal
        title={editingRecord ? "Edit Advance Payment" : "Add Advance Payment"}
        visible={isModalOpen}
        onCancel={handleCancel}
        footer={null}
      >
        <Form
          form={form}
          layout="vertical"
          onFinish={handleFormSubmit}
          initialValues={{
            receivedDate: moment(),
          }}
        >
          <Form.Item
            name="customerName"
            label="Customer Name"
            rules={[{ required: true, message: "Please select a customer" }]}
          >
            <Select placeholder="Select Customer" allowClear>
              {customers.map((customer) => (
                <Option key={customer} value={customer}>
                  {customer}
                </Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item
            name="receivedDate"
            label="Received Date"
            rules={[{ required: true, message: "Please select a date" }]}
          >
            <DatePicker
              format="DD-MM-YYYY"
              disabledDate={disabledDate}
              className="w-full"
            />
          </Form.Item>
          <Form.Item
            name="receivedBy"
            label="Received By"
            rules={[{ required: true, message: "Please select a receiver" }]}
          >
            <Select placeholder="Select Receiver" allowClear>
              {receivers.map((receiver) => (
                <Option key={receiver} value={receiver}>
                  {receiver}
                </Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item
            name="paymentMode"
            label="Payment Mode"
            rules={[{ required: true, message: "Please select a payment mode" }]}
          >
            <Select placeholder="Select Payment Mode" allowClear>
              <Option value="Cash">Cash</Option>
              <Option value="Cheque">Cheque</Option>
              <Option value="Mpesa">Mpesa</Option>
              <Option value="PDQ">PDQ</Option>
            </Select>
          </Form.Item>
          <Form.Item
            name="transactionId"
            label="Transaction ID"
            rules={[
              { required: true, message: "Please enter the transaction ID" },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="advanceAmount"
            label="Advance Amount"
            rules={[
              { required: true, message: "Please enter the advance amount" },
              { pattern: /^[0-9]+(\.[0-9]{1,2})?$/, message: "Please enter a valid amount" },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item>
            <div className="flex justify-end">
              <Button onClick={handleCancel} className="mr-2">
                Cancel
              </Button>
              <Button type="primary" htmlType="submit">
                {editingRecord ? "Update" : "Add"}
              </Button>
            </div>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default AdvanceDepositComponent;
