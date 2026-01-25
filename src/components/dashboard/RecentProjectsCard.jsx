import React from 'react';
import { NavLink } from 'react-router-dom';

export default function RecentProjectsCard() {
  const projects = [
    {
      id: 1,
      title: 'Website Redesign',
      company: 'TechCorp Inc.',
      progress: 65,
      status: 'ongoing',
      statusColor: 'bg-blue-100 text-blue-700'
    },
    {
      id: 2,
      title: 'Mobile App Development',
      company: 'Creative Design Studio',
      progress: 40,
      status: 'ongoing',
      statusColor: 'bg-blue-100 text-blue-700'
    },
    {
      id: 3,
      title: 'Brand Identity Package',
      company: 'Startup Ventures',
      progress: 25,
      status: 'delayed',
      statusColor: 'bg-red-100 text-red-700'
    },
    {
      id: 4,
      title: 'E-commerce Platform',
      company: 'E-Commerce Solutions',
      progress: 0,
      status: 'pending',
      statusColor: 'bg-gray-100 text-gray-700'
    }
  ];

  return (
    <div className="w-full mx-auto p-6 bg-white">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold text-gray-900">Recent Projects</h1>
        <NavLink className="text-indigo-600 hover:text-indigo-700 font-medium text-sm" to="/projects">
          View all
        </NavLink>
      </div>

      <div className="space-y-4">
        {projects.map((project) => (
          <div
            key={project.id}
            className="border border-gray-200 rounded-lg p-6 hover:shadow-sm transition-shadow"
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <h2 className="text-lg font-semibold text-gray-900 mb-1">
                  {project.title}
                </h2>
                <p className="text-sm text-gray-600">{project.company}</p>
              </div>
              <span
                className={`px-3 py-1 rounded-full text-xs font-medium ${project.statusColor}`}
              >
                {project.status}
              </span>
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-gray-600">Progress</span>
                <span className="text-sm font-semibold text-gray-900">
                  {project.progress}%
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-indigo-600 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${project.progress}%` }}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}