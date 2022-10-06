import { Form, Formik } from "formik";
import { useTasks } from "../context/TaskContext";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
function TaskForm() {
  const { createTask, getTask, updateTask } = useTasks();
  const [task, setTask] = useState({
    title: "",
    description: "",
  });
  const params = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    const loadTask = async () => {
      if (params.id) {
        const task = await getTask(params.id);
        setTask({
          title: task.title,
          description: task.description,
        });
      }
    };
    loadTask();
  }, []);

  return (
    <div className="bg-white border-[1px] border-gray-200 shadow-md rounded-md  max-w-xs sm:max-w-sm md:max-w-md  mx-auto  p-10  ">
      <h1 className="text-center tracking-wide font-semibold text-xl">{params.id ? "Edit Tasks" : "New Tasks"}</h1>

      <Formik
        initialValues={task}
        enableReinitialize={true}
        onSubmit={async (values, actions) => {
          if (params.id) {
            await updateTask(params.id, values);
            navigate("/");
          } else {
            await createTask(values);
            navigate("/");

          }
          setTask({
            title: "",
            description: "",
          });
        }}
      >
        {({ handleChange, handleSubmit, values, isSubmitting }) => (
          <Form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-5">
            <div className="">
              <input
                className=" w-full text-sm  px-4 py-3 bg-gray-100 focus:bg-gray-50 border  border-gray-300 rounded-lg focus:outline-none focus:border-purple-400 caret-pink-400"
                type="text"
                name="title"
                placeholder="Write a title"
                onChange={handleChange}
                value={values.title}
              />
            </div>
            <div>

              <textarea
                className=" w-full text-sm  px-4 py-3 bg-gray-100 focus:bg-gray-50 border  border-gray-300 rounded-lg focus:outline-none focus:border-purple-400"
                name="description"
                rows="3"
                placeholder="write a description"
                onChange={handleChange}
                value={values.description}
              ></textarea>
            </div>

            <button  className="bg-purple-500 text-white font-semibold w-full text-center py-2 rounded  hover:bg-white border-[1px] border-transparent hover:text-black hover:border-purple-400 transition duration-300" type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Saving..." : "Save"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default TaskForm;
