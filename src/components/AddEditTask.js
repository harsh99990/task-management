import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const AddEditTask = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const initialValues = {
    title: "",
    description: "",
    assignedUser: "",
    status: "todo",
    dueDate: "",
  };

  const validationSchema = Yup.object().shape({
    title: Yup.string()
      .required("Title is required")
      .min(3, "Title must be at least 3 characters"),
    description: Yup.string()
      .required("Description is required")
      .min(10, "Description must be at least 10 characters"),
    assignedUser: Yup.string().required("Assigned user is required"),
    status: Yup.string().required("Status is required"),
    dueDate: Yup.date()
      .required("Due date is required")
      .min(new Date(), "Due date cannot be in the past"),
  });

  const handleSubmit = (values) => {
    console.log("Task Submitted:", values);
    navigate("/");
  };

  return (
    <div className="add-edit-task">
      <h1>{id ? "Edit Task" : "Add Task"}</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="task-form">
            <label htmlFor="title">Title:</label>
            <Field type="text" name="title" id="title" />
            <ErrorMessage name="title" component="div" className="error" />

            <label htmlFor="description">Description:</label>
            <Field as="textarea" name="description" id="description" />
            <ErrorMessage
              name="description"
              component="div"
              className="error"
            />

            <label htmlFor="assignedUser">Assigned User:</label>
            <Field as="select" name="assignedUser" id="assignedUser">
              <option value="">Select User</option>
              <option value="Alice">Alice</option>
              <option value="Bob">Bob</option>
              <option value="Charlie">Charlie</option>
            </Field>
            <ErrorMessage
              name="assignedUser"
              component="div"
              className="error"
            />

            <label htmlFor="status">Status:</label>
            <Field as="select" name="status" id="status">
              <option value="todo">To Do</option>
              <option value="inProgress">In Progress</option>
              <option value="completed">Completed</option>
            </Field>
            <ErrorMessage name="status" component="div" className="error" />

            <label htmlFor="dueDate">Due Date:</label>
            <Field type="date" name="dueDate" id="dueDate" />
            <ErrorMessage name="dueDate" component="div" className="error" />

            <button type="submit" disabled={isSubmitting}>
              {id ? "Update Task" : "Add Task"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AddEditTask;
