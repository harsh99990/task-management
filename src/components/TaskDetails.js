import React from "react";
import { useParams, Link } from "react-router-dom";
import CommentSection from "./CommentSection";

const TaskDetails = () => {
  const { id } = useParams();

  const task = {
    id,
    title: `Task ${id}`,
    description: `This is the detailed description of Task ${id}.`,
    assignedUser: "Alice",
    status: "To Do",
    dueDate: "2024-12-01",
  };

  return (
    <div className="task-details">
      <h1>{task.title}</h1>
      <div className="task-info">
        <p>
          <strong>Description:</strong> {task.description}
        </p>
        <p>
          <strong>Assigned to:</strong> {task.assignedUser || "Unassigned"}
        </p>
        <p>
          <strong>Status:</strong> {task.status}
        </p>
        <p>
          <strong>Due Date:</strong> {task.dueDate}
        </p>
      </div>
      <div className="task-actions">
        <Link to={`/edit/${task.id}`} className="edit-button">
          Edit Task
        </Link>
      </div>
      <CommentSection taskId={task.id} />
    </div>
  );
};

export default TaskDetails;
