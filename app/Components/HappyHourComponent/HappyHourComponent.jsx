import React, { useState } from 'react';
import { FaCheckCircle, FaExclamationCircle } from 'react-icons/fa';
import { Table, Button, Select, Input, Form, Alert } from 'antd';

const { Option } = Select;

const HappyHourComponent = () => {
  // Array of days of the week
  const daysOfWeek = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ];

  // State for form data and statuses of days
  const [formData, setFormData] = useState({
    category: '',
    discountType: '',
    discount: 0,
  });

  const [formStatus, setFormStatus] = useState({
    message: '',
    success: false,
  });

  const [loading, setLoading] = useState(false);

  // State to track the status (Active/Inactive) of each day
  const [statuses, setStatuses] = useState(
    daysOfWeek.reduce((acc, day) => {
      acc[day] = 'Inactive'; // Initially all days are inactive
      return acc;
    }, {})
  );

  // Function to handle form input changes
  const handleInputChange = (value, field) => {
    setFormData({
      ...formData,
      [field]: value,
    });
  };

  // Function to handle form submission
  const handleSubmit = () => {
    setLoading(true);

    // Basic validation
    if (!formData.category || !formData.discountType || formData.discount <= 0) {
      setFormStatus({
        message: 'Please fill out all fields and ensure discount is greater than 0',
        success: false,
      });
      setLoading(false);
      return;
    }

    // Check if any day is active
    const activeDays = Object.keys(statuses).filter((day) => statuses[day] === 'Active');

    if (activeDays.length === 0) {
      setFormStatus({
        message: 'Cannot Approve Discount. Please Select Active day(s).',
        success: false,
      });
      setLoading(false);
      return;
    }

    // Check if it's past the set time (21:30)
    const currentTime = new Date().toLocaleTimeString('en-US', { hour12: false });
    const isPastTime = activeDays.some((day) => {
      return currentTime > '21:30' && statuses[day] === 'Active';
    });

    if (isPastTime) {
      setFormStatus({
        message: 'Cannot Approve Discount. It is past the allowed time.',
        success: false,
      });
      setLoading(false);
      return;
    }

    // Simulate an API call
    setTimeout(() => {
      setFormStatus({
        message: 'Discount Approved!',
        success: true,
      });
      setLoading(false);

      // Reset form data
      setFormData({
        category: '',
        discountType: '',
        discount: 0,
      });

      // Clear the message after 3 seconds (3000 milliseconds)
      setTimeout(() => {
        setFormStatus({
          message: '',
          success: false,
        });
      }, 3000);
    }, 2000);
  };

  // Function to toggle the status (Active/Inactive) of a day
  const toggleStatus = (day) => {
    setStatuses((prevStatuses) => ({
      ...prevStatuses,
      [day]: prevStatuses[day] === 'Inactive' ? 'Active' : 'Inactive',
    }));
  };

  // Columns configuration for the Ant Design Table component
  const columns = [
    {
      title: 'S/N',
      dataIndex: 'index',
      key: 'index',
      align: 'center',
    },
    {
      title: 'Day',
      dataIndex: 'day',
      key: 'day',
      align: 'center',
    },
    {
      title: 'From (Time)',
      dataIndex: 'fromTime',
      key: 'fromTime',
      align: 'center',
      render: (_, record) => (
        <Input
          type="time"
          defaultValue="08:00"
          disabled={statuses[record.day] === 'Inactive'}
        />
      ),
    },
    {
      title: 'To (Time)',
      dataIndex: 'toTime',
      key: 'toTime',
      align: 'center',
      render: (_, record) => (
        <Input
          type="time"
          defaultValue="21:30"
          disabled={statuses[record.day] === 'Inactive'}
        />
      ),
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      align: 'center',
      render: (_, record) => (
        <Button
          type={statuses[record.day] === 'Inactive' ? 'danger' : 'primary'}
          onClick={() => toggleStatus(record.day)}
        >
          {statuses[record.day]}
        </Button>
      ),
    },
  ];

  // Data source for the Ant Design Table component
  const dataSource = daysOfWeek.map((day, index) => ({
    key: index,
    index: index + 1,
    day, // Display the day of the week
    fromTime: '08:00',
    toTime: '21:30',
    status: statuses[day],
  }));

  return (
    <div className="p-6 bg-white shadow-md rounded-lg">
      <div className="bg-yellow-100 p-4 mb-6 rounded-lg">
        <h2 className="text-sm font-bold text-gray-800">Happy Hour</h2>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-3">
          <div className="mb-6">
            <Table
              dataSource={dataSource}
              columns={columns}
              pagination={false}
              bordered
              className="shadow-sm"
            />
          </div>
        </div>
        <div className="bg-gray-50 p-6 rounded-lg shadow-lg lg:col-span-1">
          <h3 className="text-sm font-bold text-gray-700 mb-4">Happy Hour on Assorted Items</h3>
          <Form layout="vertical" onFinish={handleSubmit}>
            <Form.Item label="Select Category *">
              <Select
                value={formData.category}
                onChange={(value) => handleInputChange(value, 'category')}
              >
                <Option value="">Select Product | Item</Option>
                <Option value="Snack">Bulb Velmax 5W</Option>
                {/* Add other options as needed from DB */}
              </Select>
            </Form.Item>
            <Form.Item label="Discount Type *">
              <Select
                value={formData.discountType}
                onChange={(value) => handleInputChange(value, 'discountType')}
              >
                <Option value="">Select Discount Type</Option>
                <Option value="Percentage">Percentage (%)</Option>
                <Option value="Flat">Flat</Option>
              </Select>
            </Form.Item>
            <Form.Item label="Discount *">
              <Input
                type="number"
                value={formData.discount}
                onChange={(e) => handleInputChange(e.target.value, 'discount')}
              />
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="w-full"
                loading={loading}
              >
                Submit
              </Button>
            </Form.Item>
          </Form>
          {formStatus.message && (
            <Alert
              className="mt-4"
              message={formStatus.message}
              type={formStatus.success ? 'success' : 'error'}
              showIcon
              icon={formStatus.success ? <FaCheckCircle /> : <FaExclamationCircle />}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default HappyHourComponent;
