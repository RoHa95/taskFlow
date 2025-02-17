import React, { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";
//icons
import { FaCircle } from "react-icons/fa";

//component
import Modal from "../components/Modal";

let todo = JSON.parse(localStorage.getItem("todo")) || [];
let inprogress = JSON.parse(localStorage.getItem("inprogress")) || [];
let done = JSON.parse(localStorage.getItem("done")) || [];

function Maincontext() {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [tags, setTags] = useState([
    { value: "شخصی", label: "شخصی" },
    { value: "کاری", label: "کاری" },
  ]);
  const [selectedTag, setSelectedTag] = useState(null);
  const [newTag, setNewTag] = useState("");
  const [title, setTitle] = useState("");
  const [description, setdescription] = useState("");
  const [dudate, setdudate] = useState("");
  const [priority, setPriority] = useState("Low");
  const [status, setStatus] = useState("Todo");
  const [tag, setTag] = useState("work");
  const [alert, setAlert] = useState({
    titleAlert: false,
    descriptionAlert: false,
    dudateAlert: false,
  });
  useEffect(() => {
    console.log(alert);
  }, [alert]);
  const addTask = () => {
    if (!title || !description || !dudate) {
      setAlert({
        titleAlert: Boolean(!title),
        descriptionAlert: Boolean(!description),
        dudateAlert: Boolean(!dudate),
      });
      return;
    }

    if (status === "Todo") {
      todo.push({
        id: uuid(),
        title: title,
        description: description,
        du_date: dudate,
        Priority: priority,
        status: status,
        tag: tag,
      });
      localStorage.setItem("todo", JSON.stringify(todo));
    } else if (status === "In Progress") {
      inprogress.push({
        id: uuid(),
        title: title,
        description: description,
        du_date: dudate,
        Priority: priority,
        status: status,
        tag: tag,
      });
      localStorage.setItem("inprogress", JSON.stringify(inprogress));
    } else if (status === "Done") {
      done.push({
        id: uuid(),
        title: title,
        description: description,
        du_date: dudate,
        Priority: priority,
        status: status,
        tag: tag,
      });
      localStorage.setItem("done", JSON.stringify(done));
    }
    setTitle("");
    setdescription("");
    setdudate("");
    setPriority("Low");
    setStatus("Todo");
    setTag("work");
    setAlert({
      titleAlert: false,
      descriptionAlert: false,
      dudateAlert: false,
    });
    setIsOpenModal(false);
  };
  const closeModalHandler = (e) => {
    e.stopPropagation();
    setIsOpenModal(false);
    setAlert({
      titleAlert: false,
      descriptionAlert: false,
      dudateAlert: false,
    });
  };
  const openModalHandler = () => {
    setIsOpenModal(true);
  };
  console.log(title, description, dudate);

  return (
    <>
      {/* top section */}
      <div className="flex items-center justify-between w-full h-8">
        <div className="flex gap-x-2 h-full">
          <select
            name="filter"
            id="filter"
            className="border rounded-md pb-1 border-gray-400 text-gray-500 dark:text-txdark dark:bg-gray-500/40 h-full"
          >
            <option value="option1" className="text-gray-400">
              option1
            </option>
          </select>
          <select
            name="time"
            id="time"
            className="border rounded-md pb-1 border-gray-400 text-gray-500 dark:text-txdark dark:bg-gray-500/40 h-full"
          >
            <option value="today" className="text-gray-400">
              today
            </option>
          </select>
        </div>
        <div className="h-full">
          <button className="border rounded-md pb-1 h-full border-gray-400 text-gray-500 dark:text-txdark dark:bg-gray-500/40 px-2">
            share
          </button>
        </div>
      </div>

      {/* bottom section */}
      <div className="flex flex-col w-full sm:flex-row mt-12 gap-x-3 gap-y-3 h-screen overflow-y-auto">
        {/* Todo column */}
        <div className=" w-full flex flex-col bg-gray-500/10 dark:bg-gray-500/40 p-3 rounded-md">
          <div className=" flex items-center justify-between border-b-3 border-indigo-500 pb-2">
            <div className="flex items-center dark:text-txdark">
              <FaCircle className=" text-indigo-500 mr-2 text-xs" />
              To Do
              <span className="bg-gray-500/20 dark:bg-dark-part w-4 h-4 rounded-full flex items-center justify-center ml-3 text-xs text-gray-600 dark:text-txdark">
                {todo.length}
              </span>
            </div>
            <div
              onClick={openModalHandler}
              className=" text-indigo-500 cursor-pointer bg-indigo-400/20 rounded-sm w-5 h-5 flex items-center justify-center pb-1"
            >
              +
            </div>
            <Modal isOpen={isOpenModal} onClose={closeModalHandler}>
              <div className="flex flex-col">
                <label
                  htmlFor="title"
                  className={alert.titleAlert && "text-red-500"}
                >
                  title
                </label>
                <input
                  type="text"
                  name="title"
                  placeholder="title"
                  className={alert.titleAlert && "border border-red-500 rounded-lg text-red-500 px-2 focus:outline-red-600"}
                  onChange={(e) => setTitle(e.target.value)}
                />

                <label className={alert.titleAlert && "text-red-500"} htmlFor="Description">Description</label>
                <input
                  onChange={(e) => setdescription(e.target.value)}
                  type="text"
                  className={alert.titleAlert && "border border-red-500 rounded-lg text-red-500 px-2 focus:outline-red-600"}
                  name="Description"
                  placeholder="Description"
                />

                <label className={alert.titleAlert && "text-red-500"} htmlFor="Due Date">Due Date</label>
                <input
                  type="date"
                  onChange={(e) => setdudate(e.target.value)}
                  name="Due Date"
                  className={alert.titleAlert && "border border-red-500 rounded-lg text-red-500 px-2 focus:outline-red-600"}
                  placeholder="Due Date"
                />

                <label htmlFor="Priority">Priority</label>
                <select
                  onChange={(e) => setPriority(e.target.value)}
                  name="Priority "
                  id="Priority "
                >
                  <option value="Low">Low</option>
                  <option value="Medium">Medium</option>
                  <option value="High">High</option>
                </select>

                <label htmlFor="Status">Status</label>
                <select
                  onChange={(e) => setStatus(e.target.value)}
                  name="Status"
                  id="Status"
                >
                  <option value="Todo">Todo</option>
                  <option value="In Progress">In Progress</option>
                  <option value="Done">Done</option>
                </select>

                <label htmlFor="Tags">Tags</label>
                <select
                  onChange={(e) => setTag(e.target.value)}
                  name="Tags"
                  id="Tags"
                >
                  <option value="work">work</option>
                  <option value="blog">blog</option>
                  <option value="personal">personal</option>
                </select>
                <button onClick={addTask}>ثبت</button>
              </div>
            </Modal>
          </div>
          <div className="py-3 flex flex-col gap-y-2 sm:overflow-y-auto">
            {console?.log(todo[0]?.title)}
            {todo?.map((item) => (
              <div className="bg-white dark:bg-dark rounded-md p-2 flex items-center justify-between cursor-pointer">
                <span className="text-gray-400 dark:text-txdark">
                  {item.title}
                </span>

                <div className="text-indigo-400 dark:text-black dark:bg-indigo-400 border rounded-md text-xs px-1 pb-0.5">
                  {item.tag}
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* In progress column */}
        <div className=" w-full flex flex-col bg-gray-500/10 dark:bg-gray-500/40 p-3 rounded-md">
          <div className=" flex items-center justify-between border-b-3 border-orange-500 pb-2">
            <div className="flex items-center dark:text-txdark">
              <FaCircle className=" text-orange-500 mr-2 text-xs" />
              In Progress
              <span className="bg-gray-500/20 dark:bg-dark-part w-4 h-4 rounded-full flex items-center justify-center ml-3 text-xs text-gray-600 dark:text-txdark">
                {inprogress.length}
              </span>
            </div>
          </div>
          <div className="py-3 flex flex-col gap-y-2">
            {inprogress?.map((item) => (
              <div className="bg-white dark:bg-dark rounded-md p-2 flex items-center justify-between cursor-pointer">
                <span className="text-gray-400 dark:text-txdark">
                  {item.title}
                </span>

                <div className="text-orange-400 dark:text-black dark:bg-orange-400 border rounded-md text-xs px-1 pb-0.5">
                  {item.tag}
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Done column */}
        <div className=" w-full flex flex-col bg-gray-500/10 dark:bg-gray-500/40 p-3 rounded-md">
          <div className=" flex items-center justify-between border-b-3 border-green-500 pb-2">
            <div className="flex items-center dark:text-txdark">
              <FaCircle className=" text-green-500 mr-2 text-xs" />
              Done
              <span className="bg-gray-500/20 dark:bg-dark-part w-4 h-4 rounded-full flex items-center justify-center ml-3 text-xs text-gray-600 dark:text-txdark">
                {done.length}
              </span>
            </div>
          </div>
          <div className="py-3 flex flex-col gap-y-2">
            {done?.map((item) => (
              <div className="bg-white dark:bg-dark rounded-md p-2 flex items-center justify-between cursor-pointer">
                <span className="text-gray-400 dark:text-txdark">
                  {item.title}
                </span>

                <div className="text-green-500 dark:text-black dark:bg-green-500 border rounded-md text-xs px-1 pb-0.5">
                  {item.tag}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Maincontext;
