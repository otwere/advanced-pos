import React, { useReducer, useState } from "react";
import { Badge, Dropdown, Menu, Button, Modal, Input } from "antd";
import { MailOutlined, SearchOutlined } from "@ant-design/icons";

const generateUniqueMessages = (numMessages) => {
  const messages = [];
  for (let i = 0; i < numMessages; i++) {
    const date = new Date();
    date.setMinutes(date.getMinutes() + i); // Increment each message time by a minute
    messages.push({
      id: i + 1, // from Mpesa Integration
      title: "MPESA (Till No : 000721)",
      content: `FDE2284E3 Confirmed you Received kshs.3000 from 0712345678 Client's Name ${date.toLocaleString()}. Mpesa Balance Kshs.230,000.00`,
      read: false,
      datetime: date.toISOString(),
    });
  }
  return messages;
};

const initialMessages = generateUniqueMessages(25);

const initialState = {
  messages: initialMessages,
  unreadCount: initialMessages.filter((message) => !message.read).length,
  selectedMessage: null,
  isModalVisible: false,
  collapsed: true,
  showAllMessages: false,
  searchInput: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "MARK_AS_READ":
      const updatedMessages = state.messages.map((message) =>
        message.id === action.payload && !message.read
          ? { ...message, read: true }
          : message
      );
      const unreadCount = updatedMessages.filter(
        (message) => !message.read
      ).length;
      return {
        ...state,
        messages: updatedMessages,
        unreadCount: unreadCount,
      };
    case "SHOW_MESSAGE":
      const selectedMessage = state.messages.find(
        (message) => message.id === action.payload
      );
      return {
        ...state,
        selectedMessage: selectedMessage,
        isModalVisible: true,
      };
    case "HIDE_MODAL":
      return {
        ...state,
        isModalVisible: false,
      };
    case "TOGGLE_COLLAPSE":
      return {
        ...state,
        collapsed: !state.collapsed,
      };
    case "SHOW_ALL_MESSAGES":
      return {
        ...state,
        showAllMessages: true,
      };
    case "UPDATE_SEARCH_INPUT":
      return {
        ...state,
        searchInput: action.payload,
      };
    default:
      return state;
  }
};

const NotificationIcon = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const markAsRead = (messageId) => {
    dispatch({ type: "MARK_AS_READ", payload: messageId });
  };

  const showMessage = (messageId) => {
    dispatch({ type: "SHOW_MESSAGE", payload: messageId });
    markAsRead(messageId);
  };

  const toggleCollapse = () => {
    dispatch({ type: "TOGGLE_COLLAPSE" });
  };

  const handleSearchInputChange = (e) => {
    dispatch({ type: "UPDATE_SEARCH_INPUT", payload: e.target.value });
  };

  const handleShowAllMessages = () => {
    dispatch({ type: "SHOW_ALL_MESSAGES" });
  };

  let messagesToDisplay = state.messages;
  if (!state.showAllMessages) {
    messagesToDisplay = state.messages.slice(0, 9); // Display only first 5 messages by default
  }

  const filteredMessages = messagesToDisplay.filter(
    (message) =>
      message.title.toLowerCase().includes(state.searchInput.toLowerCase()) ||
      message.content.toLowerCase().includes(state.searchInput.toLowerCase())
  );

  const messageMenu = (
    <Menu
      style={{
        minWidth: 300,
        maxHeight: state.collapsed ? 300 : "auto",
        overflow: "auto",
        borderRadius: 4,
      }}
      overlayStyle={{ zIndex: 999 }} // Ensure the dropdown stays open when interacting with input
    >
      <Menu.Item key="search">
        <Input
          prefix={<SearchOutlined style={{ color: "#1890ff" }} />}
          placeholder="Search messages"
          value={state.searchInput}
          onChange={handleSearchInputChange}
          onClick={(e) => e.stopPropagation()} // Prevent dropdown from closing on input click
          style={{ width: "100%", marginBottom: 10 }}
        />
      </Menu.Item>
      {filteredMessages.map((message) => (
        <Menu.Item
          key={message.id}
          onClick={() => showMessage(message.id)}
          style={{
            opacity: message.read ? 0.7 : 1,
            padding: "10px 20px",
            borderBottom: "1px solid #f0f0f0",
          }}
         >
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <strong style={{ color: message.read ? "#aaa" : "#000" }}>
              {message.title}
            </strong>
            <span style={{ fontSize: 12, color: "#999" }}>
              {message.read ? "Read" : "Unread"}
            </span>
          </div>
          <p style={{ margin: "5px 0 0", fontSize: 14 }}>{message.content}</p>
          <p style={{ margin: "5px 0 0", fontSize: 12, color: "#999" }}>
            {new Date(message.datetime).toLocaleString()}
          </p>
        </Menu.Item>
      ))}
      {!state.showAllMessages && (
        <Menu.Item>
          <Button type="link" block onClick={handleShowAllMessages}>
            Show More Messages
          </Button>
        </Menu.Item>
      )}
      {state.showAllMessages && (
        <Menu.Item>
          <Button type="link" block>
            View All Messages
          </Button>
        </Menu.Item>
      )}
    </Menu>
  );

  const getCurrentDateTime = () => {
    const now = new Date();
    return now.toLocaleString();
  };

  return (
    <>
      <Dropdown
        overlay={messageMenu}
        placement="bottomRight"
        trigger={["click"]}
      >
        <Badge count={state.unreadCount} overflowCount={99} offset={[10, 0]}>
          <MailOutlined
            style={{ fontSize: 24, color: "#1890ff", marginLeft: "-4px" }}
          />
        </Badge>
      </Dropdown>
      <Modal
        title={state.selectedMessage ? state.selectedMessage.title : ""}
        visible={state.isModalVisible}
        onOk={() => dispatch({ type: "HIDE_MODAL" })}
        onCancel={() => dispatch({ type: "HIDE_MODAL" })}
        footer={[
          <Button className="bg-blue-700 text-white" key="back" onClick={() => dispatch({ type: "HIDE_MODAL" })}>
            OK
          </Button>,
        ]}
      >
        <p>{state.selectedMessage ? state.selectedMessage.content : ""}</p>
        <p style={{ fontSize: 12, color: "#999" }}>
          {state.selectedMessage
            ? new Date(state.selectedMessage.datetime).toLocaleString()
            : ""}
        </p>
        <p style={{ fontSize: 12, color: "#999" }}>
          Read on : {getCurrentDateTime()}
        </p>
      </Modal>
    </>
  );
};

export default NotificationIcon;
