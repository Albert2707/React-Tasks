import { useEffect, useState } from "react";
import TaskCard from "../Components/TaskCard";
import {useTasks} from"../context/TaskContext"
import NoTasks from '../Components/NoTasks';
function TaskPage() {
  const {tasks, loadTask}= useTasks();
  useEffect(() => {
    loadTask();
  }, []);
  function renderMain() {
  
    if(tasks.length === 0) return   <div className=" p-10 md:p-8"><NoTasks/></div> 
    try {
        return tasks.map((task) => <TaskCard task={task} key={task.id} />);

    } catch (error) {
      console.log("ERROR: "+error)
    }
  }

  return (
    <div>
      <div className={tasks.length === 0?"":"grid grid-cols-1 p-5 sm:grid-cols-2  md:grid-cols-3 gap-8"}>
      {renderMain()}
      </div>
    </div>
  );
}

export default TaskPage;
