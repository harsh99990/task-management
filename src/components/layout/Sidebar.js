// import React from "react";
// import { NavLink } from "react-router-dom";
// import { FaHome, FaTasks, FaPlus } from "react-icons/fa";

// const Sidebar = () => {
//   return (
//     <div className="sidebar">
//       <h2 className="logo">TaskManager</h2>
//       <nav>
//         <NavLink to="/" className="nav-item">
//           <FaHome className="icon" /> Dashboard
//         </NavLink>
//         <NavLink to="/add" className="nav-item">
//           <FaPlus className="icon" /> Add Task
//         </NavLink>
//       </nav>
//     </div>
//   );
// };

// export default Sidebar;
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  FaHome,
  FaTasks,
  FaPlus,
  FaAngleDoubleLeft,
  FaAngleDoubleRight,
} from "react-icons/fa";

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className={`sidebar ${isCollapsed ? "collapsed" : ""}`}>
      <button className="toggle-btn" onClick={toggleSidebar}>
        {isCollapsed ? <FaAngleDoubleRight /> : <FaAngleDoubleLeft />}
      </button>
      <h2 className="logo">{isCollapsed ? "T" : "TaskManager"}</h2>
      <nav>
        <NavLink to="/" className="nav-item">
          <FaHome className="icon" />
          <span className="text">Dashboard</span>
        </NavLink>
        <NavLink to="/add" className="nav-item">
          <FaPlus className="icon" />
          <span className="text">Add Task</span>
        </NavLink>
      </nav>
    </div>
  );
};

export default Sidebar;
