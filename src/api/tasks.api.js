import axios from "axios";
export const getTasksRequest = async () => 
   await axios.get("https://mernreact.up.railway.app/task");


export const createTaskRequest = async (task) =>
  await axios.post("https://mernreact.up.railway.app/task", task);

export const deleteTasksRequest = async (id) =>
  await axios.delete(`https://mernreact.up.railway.app/task/${id}`);

  export const getTaskRequest = async (id) => 
   await axios.get(`https://mernreact.up.railway.app/task/${id}`);

   export const updateTaskRequest = async (id, newFields) => 
   await axios.put(`https://mernreact.up.railway.app/task/${id}`, newFields);

   export const toggleTaskDoneRequest = async (id, done) => 
   await axios.put(`https://mernreact.up.railway.app/task/${id}`, {done});

