import { Link } from "react-router-dom";
function NoTasks() {
  return (
    <div className="container mx-auto">


    <div className="flex flex-col-reverse md:flex-row items-center justify-around p-14">

        <div className="flex flex-col">

        <h1 className="font-mono text-3xl md:text-4xl lg:5xl font-semibold">No tasks yet</h1>
<Link to="/new" className="mt-3  text-center md:text-start  text-xl bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text hover:from-pink-400 hover:to-purple-400 font-semibold" >Create new task</Link>
        </div>

      <img className=" h-60  sm:h-72 mb-10  md:mb-0 md:h-80 lg:96" src="https://cdn-icons-png.flaticon.com/512/595/595067.png" alt="" />
    </div>


  </div>


  )
}

export default NoTasks