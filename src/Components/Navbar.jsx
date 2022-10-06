import { Link } from "react-router-dom";
import {useContext, useState} from "react";
function Navbar() {
  const [show, setShow] = useState("hidden");

  const handleMobileMneu = () => {
setShow(show === "hidden"?"md:hidden":"hidden");
  }
  return (
    <nav className="sticky top-0 z-10 bg-white shadow-sm border-b-[1px] border-gray-300 flex justify-between px-12 py-5">

<div className="flex items-center space-x-1">
<img src="https://i.ibb.co/10Q0r61/react-logo-24.png" alt="" />
<h1 className="text-2xl">React MySQL</h1>

</div>

{/*Mobile menu*/}
<button className="block md:hidden" onClick={handleMobileMneu}>

<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg>


</button>


<div className={`absolute ${show}  z-10 bg-white inset-x-0 top-20 py-8`} >
<ul className="flex flex-col  items-center gap-8  ">
<li className=" ">
          <Link className="border-[1px] border-indigo-500  py-3 px-10 text-center rounded-full text-white bg-[#3363cb] focus:bg-[#3363cb]/20  focus:text-[#3a6ccd]  focus:border-transparent " to="/">Home</Link>
        </li>
        <li className="">
          <Link className="border-[1px] border-indigo-500  py-3 px-5 text-center focus:bg-[#3363cb]/20 focus:font-semibold focus:border-transparent  focus:text-[#3a6ccd] rounded-full text-white bg-[#3363cb]" to="/new">Create Task</Link>
        </li></ul>
</div>



      <ul className="hidden md:flex space-x-5 items-center text-lg
      ">
        <li className="hover:text-blue-400 transition">
          <Link className="border-[1px] border-indigo-500  py-3 px-8 text-center hover:bg-[#3363cb]/20 font-semibold hover:border-transparent  hover:text-[#3a6ccd] rounded-full  text-white bg-[#3363cb]" to="/">Home</Link>
        </li>
        <li className="hover:text-blue-400 transition">
          <Link className="border-[1px] border-indigo-500  py-3 px-5 text-center hover:bg-[#3363cb]/20 font-semibold hover:border-transparent  hover:text-[#3a6ccd] rounded-full text-white bg-[#3363cb]" to="/new">Create Task</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
