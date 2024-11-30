import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Dashboard from "./components/Dashboard";
import TaskDetails from "./components/TaskDetails";
import AddEditTask from "./components/AddEditTask";

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/task/:id" element={<TaskDetails />} />
          <Route path="/add" element={<AddEditTask />} />
          <Route path="/edit/:id" element={<AddEditTask />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
