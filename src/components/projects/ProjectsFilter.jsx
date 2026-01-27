import React from "react";

const ProjectsFilter = ({ selectedFilter, setSelectedFilter }) => {
  const filters = [
    "All Projects",
    "Ongoing",
    "Completed",
    "Pending",
    "Delayed",
  ];
  return (
    <div className="flex items-center gap-15 select-none">
      {filters.map((filter, index) => {
        return (
          <div
            key={index}
            className={`border w-28 py-3 px-2 rounded-lg text-center font-semibol transition-all cursor-pointer ${
              selectedFilter === filter ? 'bg-blue-600 text-white' : 'bg-blue-400 text-white'
            }`}
            onClick={() => setSelectedFilter(filter)}
          >
            <p className="">{filter}</p>
          </div>
        );
      })}
    </div>
  );
};

export default ProjectsFilter;
