import { FaCalendarAlt, FaDollarSign, FaRegBuilding } from "react-icons/fa";

const ProjetcsCard = ({ selectedFilter }) => {
  const projects = [
    {
      title: "Website Design",
      company: "TechCorp Inc.",
      description: "Complete redesign of corporate website with modern UI/UX",
      progress: 65,
      remainingTime: "19 days overdue",
      payment: "8,500",
      status: "ongoing",
    },
    {
      title: "Mobile App Development",
      company: "Creative Design Studio",
      description: "iOS and Android app for creative portfolio showcase",
      progress: 40,
      remainingTime: "33 days left",
      payment: "15,000",
      status: "ongoing",
    },
    {
      title: "Brand Identity Package",
      company: "Startup Ventures",
      description: "Logo design, brand guidelines, and marketing materials",
      progress: 25,
      remainingTime: "3 days left",
      payment: "5,000",
      status: "delayed",
    },
    {
      title: "E-commerce Platform",
      company: "E-Commerce Solutions",
      description: "Custom e-commerce solution with payment integration",
      progress: 0,
      remainingTime: "47 days left",
      payment: "20,000",
      status: "pending",
    },
    {
      title: "Marketing Campaign",
      company: "TechCorp Inc.",
      description: "Digital marketing campaign for product launch",
      progress: 100,
      remainingTime: "12 days overdue",
      payment: "6,000",
      status: "completed",
    },
  ];

  const filteredProjects = selectedFilter === "All Projects" 
    ? projects 
    : projects.filter(project => project.status === selectedFilter.toLowerCase());

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
            className=" project_card w-90 rounded-xl border border-gray-200  p-5  h-fit cursor-pointer hover:shadow-xl hover:scale-105 transition-all duration-100 "
            key={index}
          >
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
      })};
    </div>
  );
};

export default ProjetcsCard;
