import { Routes, Route } from "react-router-dom";
import TaskPage from "./Pages/TaskPage";
import TaskForm from "./Pages/TaskForm";
import Not404 from "./Pages/Not404";
import Navbar from "./Components/Navbar";
import {TaskContextProvider} from "./context/TaskContext";
function App() {
  return (

<div className="bg-white h-screen">
      <Navbar/>
<div className="container mx-auto py-4">
<TaskContextProvider>

      <Routes>
        <Route path="/" element={<TaskPage />} />
        <Route path="/new" element={<TaskForm />} />
        <Route path="/edit/:id" element={<TaskForm />} />
        <Route path="*" element={<Not404 />} />
      </Routes>
    </TaskContextProvider>
</div>
</div>
  );
}

export default App;
