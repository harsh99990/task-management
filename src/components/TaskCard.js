import React from "react";
import { Link } from "react-router-dom";
import { FaUser, FaCalendarAlt, FaTrashAlt } from "react-icons/fa";

const TaskCard = ({ task, handleDelete }) => {
  return (
    <div className="task-card">
      <h4>{task.title}</h4>
      <p>
        <FaUser className="icon" /> {task.assignedUser || "Unassigned"}
      </p>
      <p>
        <FaCalendarAlt className="icon" /> {task.dueDate}
      </p>
      <div className="actions">
        <Link to={`/task/${task.id}`} className="view-task">
          View Task
        </Link>
        <FaTrashAlt
          className="delete-icon"
          onClick={() => handleDelete(task.id)}
          title="Delete Task"
        />
      </div>
    </div>
  );
};

export default TaskCard;
