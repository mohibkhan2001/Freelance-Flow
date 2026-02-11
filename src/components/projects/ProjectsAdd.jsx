import React, { useState } from "react";
import { IoMdAddCircleOutline } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { AiOutlineDelete } from "react-icons/ai";
import Overlay from "../common/Overlay";
import { calculateStatusAndRemainingTime } from "../../utils/dateUtils";

const ProjectsAdd = ({ onAddProject }) => {
  const [showForm, setShowForm] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);

  const inputStyle =
    "w-full border border-gray-300 rounded-lg p-3 text-md transition focus:outline-none focus:border-gray-500 ";

  const labelStyle = "text-sm font-medium text-gray-700";

  const [title, setTitle] = useState("");
  const [company, setCompany] = useState("");
  const [payment, setPayment] = useState("");
  const [description, setDescription] = useState("");
  const [deadline, setDeadline] = useState("");
  const [status, setStatus] = useState("");
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState("");

  const handleCloseModal = () => {
    setShowForm(false);
    setShowOverlay(false);
  };

  const handleDeadlineChange = (e) => {
    const deadlineValue = e.target.value;
    setDeadline(deadlineValue);

    const { status } =
      calculateStatusAndRemainingTime(deadlineValue);
    setStatus(status);
  };

  const addTask = () => {
    if (taskInput.trim() === "") return;
    const newTask = {
      id: Date.now(),
      name: taskInput,
      completed: false,
    };
    setTasks([...tasks, newTask]);
    setTaskInput("");
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const calculateProgress = () => {
    if (tasks.length === 0) return 0;
    const completed = tasks.filter((task) => task.completed).length;
    return Math.round((completed / tasks.length) * 100);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("submitted");

    const newProject = {
      id: Date.now(),
      title,
      company,
      status,
      description,
      progress: calculateProgress(),
      remainingTime: deadline,
      payment,
      tasks,
    };
    onAddProject(newProject);

    // Close the modal
    setShowForm(false);
    setShowOverlay(false);

    // Reset form fields
    setTitle("");
    setCompany("");
    setPayment("");
    setDescription("");
    setDeadline("");
    setStatus("");
    setTasks([]);
    setTaskInput("");
  };

  return (
    <div>
      <div
        className="w-14 h-14 p-2 bg-blue-400 flex justify-center items-center rounded-full absolute right-10 bottom-10 cursor-pointer hover:rotate-360 transition-all duration-200"
        onClick={() => {
          setShowOverlay(true);
          setShowForm(true);
        }}
      >
        <IoMdAddCircleOutline className="text-3xl text-white" />
      </div>

      {showOverlay && <Overlay onClick={handleCloseModal} />}

      {showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div
            className="bg-white rounded-2xl shadow-xl p-6 w-full max-w-2xl pointer-events-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold text-blue-500 camelCase">
                Add New Project
              </h2>
              <button
                className="text-gray-400 hover:text-gray-600 text-xl"
                onClick={handleCloseModal}
                aria-label="Close add project form"
              >
                <RxCross2 />
              </button>
            </div>

            {/* Form */}
            <form className="space-y-6" onSubmit={submitHandler}>
              {/* Inputs Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className={labelStyle}>Project Title</label>
                  <input
                    type="text"
                    name="title"
                    className={inputStyle}
                    placeholder="E-commerce Website"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>

                <div>
                  <label className={labelStyle}>Company / Client</label>
                  <input
                    type="text"
                    name="company"
                    className={inputStyle}
                    placeholder="Client name"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                  />
                </div>

                <div>
                  <label className={labelStyle}>Deadline</label>
                  <input
                    type="date"
                    name="deadline"
                    className={inputStyle}
                    placeholder="DD / MM / YYYY"
                    value={deadline}
                    onChange={handleDeadlineChange}
                  />
                </div>

                <div>
                  <label className={labelStyle}>Payment</label>
                  <input
                    id="payment"
                    placeholder="$5000"
                    type="text"
                    inputMode="numeric"
                    pattern="[0-9]*"
                    onKeyDown={(e) => {
                      if (!/[0-9]/.test(e.key) && e.key !== "Backspace") {
                        e.preventDefault();
                      }
                    }}
                    className={inputStyle}
                    value={payment}
                    onChange={(e) => setPayment(e.target.value)}
                  />
                </div>
              </div>

              {/* Description */}
              <div>
                <label className={labelStyle}>Description</label>
                <textarea
                  name="description"
                  rows="5"
                  className={`${inputStyle} resize-none`}
                  placeholder="Brief project description..."
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>

              {/* Tasks */}
              <div>
                <label className={labelStyle}>Project Tasks</label>
                <div className="flex gap-2 mb-3">
                  <input
                    type="text"
                    className={inputStyle}
                    placeholder="Add a task..."
                    value={taskInput}
                    onChange={(e) => setTaskInput(e.target.value)}
                    onKeyPress={(e) => {
                      if (e.key === "Enter") {
                        e.preventDefault();
                        addTask();
                      }
                    }}
                  />
                  <button
                    type="button"
                    onClick={addTask}
                    className="px-4 py-2 rounded-lg bg-blue-400 text-white hover:bg-blue-500 transition cursor-pointer whitespace-nowrap"
                  >
                    Add Task
                  </button>
                </div>

                {/* Tasks List */}
                {tasks.length > 0 && (
                  <div className="space-y-2 border border-gray-200 rounded-lg p-3 bg-gray-50 max-h-48 overflow-y-auto">
                    {tasks.map((task) => (
                      <div
                        key={task.id}
                        className="flex items-center gap-3 bg-white p-2 rounded border border-gray-100"
                      >
                        <input
                          type="checkbox"
                          checked={task.completed}
                          onChange={() => toggleTask(task.id)}
                          className="cursor-pointer"
                        />
                        <span
                          className={`flex-1 ${
                            task.completed
                              ? "line-through text-gray-400"
                              : "text-gray-700"
                          }`}
                        >
                          {task.name}
                        </span>
                        <button
                          type="button"
                          onClick={() => deleteTask(task.id)}
                          className="text-red-500 hover:text-red-700 transition"
                        >
                          <AiOutlineDelete className="text-xl" />
                        </button>
                      </div>
                    ))}
                    <div className="pt-2 border-t border-gray-200 text-sm text-gray-600">
                      Progress: {calculateProgress()}% ({tasks.filter(t => t.completed).length}/{tasks.length})
                    </div>
                  </div>
                )}
              </div>

              {/* Status */}
              <div>
                <label className={labelStyle}>Project Status</label>
                <select
                  className={`${inputStyle} bg-white`}
                  value={status}
                  onChange={(e) => {
                    setStatus(e.target.value);
                  }}
                >
                  <option value="" disabled>
                    Select status
                  </option>
                  <option value="completed" className="text-green-700">
                    Completed
                  </option>
                  <option value="ongoing" className="text-blue-700">
                    Ongoing
                  </option>
                  <option value="pending" className="text-red-700">
                    Pending
                  </option>
                  <option value="delayed" className="text-yellow-700">
                    Delayed
                  </option>
                </select>
              </div>

              {/* Footer */}
              <div className="flex justify-end gap-3 pt-4">
                <button
                  type="button"
                  className="px-4 py-2 rounded-lg border text-gray-700 hover:border-red-500 hover:text-red-500 transition cursor-pointer"
                  onClick={handleCloseModal}
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="px-5 py-2 rounded-lg bg-blue-400 text-white hover:bg-blue-500 transition cursor-pointer"
                >
                  Add Project
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectsAdd;
