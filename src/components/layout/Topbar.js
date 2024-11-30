import React from "react";
import { FaUserCircle } from "react-icons/fa";

const Topbar = () => {
  return (
    <div className="topbar">
      <div className="search-bar">
        <input type="text" placeholder="Search tasks..." />
      </div>
      <div className="user-info">
        <FaUserCircle size={24} />
        <span>Welcome, User</span>
      </div>
    </div>
  );
};

export default Topbar;
