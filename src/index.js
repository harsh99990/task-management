import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/Layout.css";
import "./styles/Sidebar.css";
import "./styles/Topbar.css";
import "./styles/Dashboard.css";
import "./styles/TaskDetails.css";
import "./styles/AddEditTask.css";
import "./styles/TaskCard.css";
import "./styles/CommentSection.css";
import "./styles/Loader.css";
import "react-toastify/dist/ReactToastify.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
