import { useTasks } from "../context/TaskContext";
import { useNavigate } from "react-router-dom";
function TaskCard({ task }) {
  const { deleteTask, toggleTaskDone } = useTasks();
  const navigate = useNavigate();
  const handleDone = async () => {
    //console.log(task.id +" "+ task.done)
   await toggleTaskDone(task.id);
  };
  return (
    <div className="">

    <div className="bg-[#fff] border-[1px] border-[#dbdce0] hover:-translate-y-1 transition duration-500 rounded-lg p-10 relative  flex flex-col w-full h-full shadow-sm hover:shadow-xl">
   <div className="flex justify-center items-center gap-2">      <button className="group flex self-center bg-slate-100 px-3 py-2 rounded-xl text-black  border-[1px] border-indigo-400 tracking-wider hover:bg-gray-400 hover:text-white    transition duration-500 "
        onClick={() => {
          handleDone(task.done);
        }}
      >
        Toggle task
<span>
{task.done === 1?<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-green-500 stroke-2">
  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
</svg>
 :<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-red-600 stroke-2">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
</svg>}



</span>

      </button> </div>   

<div className="my-16 flex flex-col gap-4 ">
<h1 className="text-center">{task.title}</h1>
      <p className="text-center break-all">{task.description}</p>


</div>


{/*       <span>{task.createAt}</span>


 */}   
 <div className="flex justify-center gap-3">
    <button className="self-center bg-rose-500 px-3 py-2 rounded-md shadow-xl text-white tracking-wider hover:bg-gray-100 hover:text-rose-500 border-[1px] border-transparent hover:border-gray-400 transition duration-500 w-1/2"
        onClick={() => {
          deleteTask(task.id);
        }}
      >
        Delete
      </button>
      <button className="self-center bg-teal-500 px-3 py-2 rounded-md shadow-xl text-white tracking-wider hover:bg-gray-100 hover:text-teal-500 border-[1px] border-transparent hover:border-gray-400 transition duration-500 w-1/2"
        onClick={() => {
          navigate(`/edit/${task.id}`);
        }}
      >
        Edit
      </button>

      </div>
    </div>
    </div>
  );
}

export default TaskCard;
