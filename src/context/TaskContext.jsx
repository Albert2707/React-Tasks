import { createContext, useContext, useState } from "react";
import {
  getTasksRequest,
  deleteTasksRequest,
  getTaskRequest,
  updateTaskRequest,
  toggleTaskDoneRequest,
} from "../api/tasks.api";
import { createTaskRequest } from "../api/tasks.api";

export const TaskContext = createContext();

export const useTasks = () => {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error("useTasks must be used within a TaskContextProvider");
  }
  return context;
};

export const TaskContextProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  async function loadTask() {
    const res = await getTasksRequest();

    setTasks(res.data);
  }

  const deleteTask = async (id) => {
    try {
      const res = await deleteTasksRequest(id);
      setTasks(tasks.filter((task) => task.id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  //crear

  const createTask = async (task) => {
    try {
      const res = await createTaskRequest(task);
      //opcional
      setTasks(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const getTask = async (id) => {
    try {
      const res = await getTaskRequest(id);
      return res.data;
    } catch (error) {
      console.error(error);
    }
  };

  const updateTask = async (id, newFields) => {
    try {
      const res = await updateTaskRequest(id, newFields);
      //return res.data
    } catch (error) {
      console.error(error);
    }
  };


  const toggleTaskDone = async (id) => {
    try {
      const taskFound = tasks.find((task) => task.id === id);
      await toggleTaskDoneRequest(id, taskFound.done === 0 ? 1 : 0);

     tasks.map(task => task.id === id? task.done = task.done === 0?1:0: task.done)
     setTasks([...tasks])
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <TaskContext.Provider
      value={{
        tasks,
        loadTask,
        deleteTask,
        createTask,
        getTask,
        updateTask,
        toggleTaskDone,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};
