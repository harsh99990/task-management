import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import TaskCard from "./TaskCard";
import { initialTasks } from "../data";
import { toast, ToastContainer } from "react-toastify";
import Loader from "./Loader";

const Dashboard = () => {
  const [tasks, setTasks] = useState(initialTasks);
  const [loading, setLoading] = useState(false);

  const onDragEnd = (result) => {
    const { source, destination, draggableId } = result;

    if (!destination) return;

    if (
      source.droppableId === destination.droppableId &&
      source.index === destination.index
    ) {
      return;
    }

    const sourceColumn = tasks[source.droppableId];
    const destColumn = tasks[destination.droppableId];
    const draggedTask = sourceColumn[source.index];

    const newSource = Array.from(sourceColumn);
    newSource.splice(source.index, 1);

    const newDest = Array.from(destColumn);
    newDest.splice(destination.index, 0, {
      ...draggedTask,
      status: destination.droppableId,
    });

    setTasks({
      ...tasks,
      [source.droppableId]: newSource,
      [destination.droppableId]: newDest,
    });
  };

  const handleDelete = (taskId, status) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this task?"
    );
    if (!confirmed) return;

    setLoading(true);

    setTimeout(() => {
      const updatedColumn = tasks[status].filter((task) => task.id !== taskId);

      setTasks({
        ...tasks,
        [status]: updatedColumn,
      });

      setLoading(false);
      toast.success("Task deleted successfully!", {
        position: "top-right",
        autoClose: 3000,
        pauseOnHover: false,
      });
    }, 3000);
  };

  return (
    <React.Fragment>
      <div className="dashboard">
        <DragDropContext onDragEnd={onDragEnd}>
          {["todo", "inProgress", "completed"].map((status) => (
            <Droppable droppableId={status} key={status}>
              {(provided) => (
                <div
                  className="status-column"
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                >
                  <h3>
                    {status === "todo"
                      ? "To Do"
                      : status === "inProgress"
                      ? "In Progress"
                      : "Completed"}
                  </h3>
                  {tasks[status].map((task, index) => (
                    <Draggable
                      key={task.id}
                      draggableId={task.id}
                      index={index}
                    >
                      {(provided) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          <TaskCard
                            task={task}
                            handleDelete={() => handleDelete(task.id, status)}
                          />
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          ))}
        </DragDropContext>
      </div>
      {loading && <Loader />}
      <ToastContainer />
    </React.Fragment>
  );
};

export default Dashboard;
