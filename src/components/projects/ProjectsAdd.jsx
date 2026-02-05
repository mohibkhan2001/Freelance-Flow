import React, { useState } from "react";
import { IoMdAddCircleOutline } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
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

  const handleCloseModal = () => {
    setShowForm(false);
    setShowOverlay(false);
  };

  const handleDeadlineChange = (e) => {
    const deadlineValue = e.target.value;
    setDeadline(deadlineValue);

    const { status, remainingTime } =
      calculateStatusAndRemainingTime(deadlineValue);
    setStatus(status);
    setRemainingTime(remainingTime);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("submitted");

    const newProject = {
      title,
      company,
      status,
      description,
      progress: 0, // default progress for new project, or add an input if you want
      remainingTime: deadline, // assuming deadline maps to remainingTime; adjust if needed
      payment,
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
  };

  return (
    <div>
      <div
        className="w-14 h-14 p-2 bg-blue-400 flex justify-center items-center rounded-full absolute right-10 bottom-10 cursor-pointer"
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
