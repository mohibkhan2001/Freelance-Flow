import React from 'react';

export default function UpcomingTasksCard() {
  const tasks = [
    {
      id: 1,
      title: 'Implement contact form',
      project: 'Website Redesign',
      daysLeft: 11,
      priority: 'medium',
      priorityColor: 'bg-yellow-100 text-yellow-700'
    },
    {
      id: 2,
      title: 'SEO optimization',
      project: 'Website Redesign',
      daysLeft: 16,
      priority: 'medium',
      priorityColor: 'bg-yellow-100 text-yellow-700'
    },
    {
      id: 3,
      title: 'Develop authentication system',
      project: 'Mobile App Development',
      daysLeft: 7,
      priority: 'high',
      priorityColor: 'bg-red-100 text-red-700'
    },
    {
      id: 4,
      title: 'Build portfolio gallery',
      project: 'Mobile App Development',
      daysLeft: 21,
      priority: 'medium',
      priorityColor: 'bg-yellow-100 text-yellow-700'
    },
    {
      id: 5,
      title: 'Brand guidelines document',
      project: 'Brand Identity Package',
      daysLeft: 3,
      priority: 'high',
      priorityColor: 'bg-red-100 text-red-700'
    }
  ];

  return (
    <div className="w-full mx-auto p-6 bg-white">
      <h1 className="text-2xl font-semibold text-gray-900 mb-6">Upcoming Tasks</h1>

      <div className="space-y-4">
        {tasks.map((task) => (
          <div
            key={task.id}
            className="border border-gray-200 rounded-lg p-6 hover:shadow-sm transition-shadow"
          >
            <div className="flex justify-between items-start mb-2">
              <h2 className="text-lg font-semibold text-gray-900">
                {task.title}
              </h2>
              <span
                className={`px-3 py-1 rounded-full text-xs font-medium ${task.priorityColor}`}
              >
                {task.priority}
              </span>
            </div>

            <p className="text-sm text-gray-600 mb-3">{task.project}</p>

            <div className="flex items-center text-sm text-gray-600">
              <span>{task.daysLeft} days left</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}