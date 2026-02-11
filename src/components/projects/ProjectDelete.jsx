import React from "react";
import { AiOutlineDelete } from "react-icons/ai";

const ProjectDelete = ({ deleteMode, onToggle }) => {
  return (
    <button
      onClick={onToggle}
      className="w-14 h-14 p-2 bg-red-400 flex justify-center items-center rounded-full cursor-pointer hover:rotate-360 transition-all duration-200 absolute right-30 bottom-10"
      aria-label={deleteMode ? "Cancel delete mode" : "Enable delete mode"}
    >
      <AiOutlineDelete className="text-3xl text-white" />
    </button>
  );
};

export default ProjectDelete;
