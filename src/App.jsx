import { Routes, Route } from "react-router-dom";
import TaskPage from "./Pages/TaskPage";
import TaskForm from "./Pages/TaskForm";
import Not404 from "./Pages/Not404";
import Navbar from "./Components/Navbar";
import {TaskContextProvider} from "./context/TaskContext";
import Footer from "./Components/Footer/Footer";

function App() {

  return (

<div className="bg-white h-screen flex flex-col ">
      <Navbar/>
<div className="container mx-auto py-4 flex-1">
<TaskContextProvider>

      <Routes>
        <Route index element={<TaskPage/>} />
        <Route path="/new" element={<TaskForm />} />
        <Route path="/edit/:id" element={<TaskForm />} />
        <Route path="*" element={<Not404 />} />
      </Routes>
    </TaskContextProvider>
</div>
<Footer/>

</div>
  );
}

export default App;
