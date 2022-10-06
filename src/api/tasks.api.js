import axios from "axios";
export const getTasksRequest = async () => 
   await axios.get("https://albert-react.herokuapp.com/task");


export const createTaskRequest = async (task) =>
  await axios.post("https://albert-react.herokuapp.com/task", task);

export const deleteTasksRequest = async (id) =>
  await axios.delete(`https://albert-react.herokuapp.com/task/${id}`);

  export const getTaskRequest = async (id) => 
   await axios.get(`https://albert-react.herokuapp.com/task/${id}`);

   export const updateTaskRequest = async (id, newFields) => 
   await axios.put(`https://albert-react.herokuapp.com/task/${id}`, newFields);

   export const toggleTaskDoneRequest = async (id, done) => 
   await axios.put(`https://albert-react.herokuapp.com/task/${id}`, {done});

