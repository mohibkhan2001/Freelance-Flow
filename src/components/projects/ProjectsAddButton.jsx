import React, { useState } from "react";
import { IoMdAddCircleOutline } from "react-icons/io";
import ProjectsAddForm from "./ProjectsAddForm";
import Overlay from "../common/Overlay";

const ProjectsAddButton = () => {
  const [showForm, setShowForm] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);
  return (
    <div>
      <div
        className="w-14 h-14 p-2 bg-blue-400 flex justify-center items-center rounded-full  absolute right-10 bottom-10 cursor-pointer"
        onClick={() => {
          setShowOverlay(true);
          setShowForm(true);

          console.log("clicked");
        }}
      >
        <IoMdAddCircleOutline className="text-3xl text-white" />
      </div>
      {showOverlay && (
        <Overlay
          onClick={() => {
            setShowOverlay(false);
            setShowForm(false);
          }}
        />
      )}
      {showForm && (
        <ProjectsAddForm setShowForm={setShowForm} setShowOverlay={setShowOverlay} />
      )}
    </div>
  );
};

export default ProjectsAddButton;
