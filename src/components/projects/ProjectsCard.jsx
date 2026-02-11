import { FaCalendarAlt, FaDollarSign, FaRegBuilding } from "react-icons/fa";
import { AiOutlineDelete } from "react-icons/ai";

const ProjetcsCard = ({ selectedFilter, projects, deleteMode, onDelete }) => {
  const filteredProjects =
    selectedFilter === "All Projects"
      ? projects
      : projects.filter(
          (project) => project.status === selectedFilter.toLowerCase(),
        );

  const statusStyles = {
    ongoing: "bg-blue-100 text-blue-700",
    delayed: "bg-red-100 text-red-700",
    pending: "bg-yellow-100 text-yellow-700",
    completed: "bg-green-100 text-green-700",
  };

  return (
    <div className="flex flex-wrap items-center gap-12 select-none">
      {filteredProjects.map((project, index) => {
        return (
          <div
            className=" project_card w-90 rounded-xl border border-gray-200  p-5  h-fit cursor-pointer hover:shadow-xl hover:scale-105 transition-all duration-100 relative "
            key={project.id || index}
          >
            {deleteMode && (
              <button
                onClick={() => onDelete(project.id)}
                className="absolute inset-0 flex items-center justify-center
               bg-red-100/60 backdrop-blur-[1px]
               rounded-xl transition-all duration-200"
                aria-label={`Delete project: ${project.title}`}
              >
                <div
                  className="w-14 h-14 bg-red-500 flex items-center justify-center
                    rounded-full shadow-lg hover:bg-red-600 transition"
                >
                  <AiOutlineDelete className="text-2xl text-white" />
                </div>
              </button>
            )}
            <div className="project_title_company">
              <h2>{project.title}</h2>
              <p className="flex items-center gap-2">
                <FaRegBuilding className="inline text-gray-500" />{" "}
                <span>{project.company}</span>
              </p>
            </div>
            <div className="project_status">
              <span
                className={`w-fit px-3 py-1 rounded-full text-sm font-medium 
          ${statusStyles[project.status]}`}
              >
                {project.status}
              </span>
            </div>
            <div className="project_description">
              <span className="w-full text-gray-500">
                {project.description}
              </span>
            </div>
            <div
              className="bg-indigo-600 h-2 rounded-full transition-all duration-300 project_progress"
              style={{ width: `${project.progress}%` }}
            ></div>

            <div className="project_time_payment flex justify-between items-center">
              <div className="remaining_time flex items-center gap-2">
                <FaCalendarAlt className="text-gray-600" />
                <span>{project.remainingTime}</span>
              </div>
              <div className="payment flex items-center">
                <FaDollarSign />
                <span className="font-medium">{project.payment}</span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProjetcsCard;
