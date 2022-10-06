import { Link } from "react-router-dom";
function NoTasks() {
  return (
    <div className="container mx-auto">


    <div className="flex flex-col-reverse md:flex-row items-center justify-around p-5 xs:p-8 sm:p-10  md:p-14">

        <div className="flex flex-col">

        <h1 className="font-mono text-center  md:text-start text-2xl sm:text-3xl md:text-4xl lg:text-6xl  font-semibold">No tasks yet</h1>
<Link to="/new" className="mt-3  text-center md:text-start  text-xl md:text-2xl bg-gradient-to-r from-purple-500 to-pink-500  hover:from-pink-400 hover:to-purple-400 font-semibold max-w-max text-transparent bg-clip-text" >Create new task</Link>
        </div>

{/* h-52 xs:h-60  sm:h-72 mb-10  md:mb-0 md:h-80 lg:h-96 */}

      <img className=" h-52 mb-10  xs:h-50  md:mb-0 sm:h-72 md:h-80 lg:h-96 " src="https://cdn-icons-png.flaticon.com/512/595/595067.png" alt="" />
    </div>


  </div>


  )
}

export default NoTasks