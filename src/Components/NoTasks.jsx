import { Link } from "react-router-dom";
function NoTasks() {
  return (
    <div className="container mx-auto m-10 border-[1px] border-gray-100 bg-white shadow-md transition hover:-translate-y-1">
    <div className="flex w-full items-center  space-x-2 md:space-x-1 bg-gray-50 p-4 border-b-[1px] border-gray-200 ">
      <div className="h-4 w-4 rounded-full bg-red-500"></div>
      <div className="h-4 w-4 rounded-full bg-amber-500"></div>
      <div className="h-4 w-4 rounded-full bg-green-500"></div>

      <div className="flex w-full items-center justify-center"><h1 className="text-3xl font-semibold tracking-wider">Task Manager</h1></div>
    </div>

    <div className="flex flex-col-reverse md:flex-row items-center justify-around p-14">

        <div className="flex flex-col">

        <h1 className="font-mono text-3xl md:text-5xl font-semibold">No tasks yet</h1>
<Link to="/new" className="mt-3  text-center md:text-start  text-xl bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text hover:from-pink-400 hover:to-purple-400 font-semibold" >Create new task</Link>
        </div>

      <img className=" h-72 mb-10  md:mb-0 md:h-96" src="https://cdn-icons-png.flaticon.com/512/595/595067.png" alt="" />
    </div>


  </div>


  )
}

export default NoTasks