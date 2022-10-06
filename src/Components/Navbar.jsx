import { Link } from "react-router-dom";
import {useContext} from "react";
function Navbar() {
  return (
    <div className="bg-white shadow-sm border-b-[1px] border-gray-300 flex justify-between px-12 py-5">

<div className="flex items-center space-x-1">
<img src="https://i.ibb.co/10Q0r61/react-logo-24.png" alt="" />
<h1 className="text-2xl">React MySQL</h1>

</div>

      <ul className="flex space-x-5 items-center text-lg
      ">
        <li className="hover:text-blue-400 transition">
          {" "}
          <Link to="/">Home</Link>
        </li>
        <li className="hover:text-blue-400 transition">
          <Link to="/new">Create Task</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
