import React from 'react'
import RecentProjectsCard from './RecentProjectsCard'
import UpcomingTasksCard from './UpcomingTasksCard'

const DashboardContent = () => {
  return (
    <div className='flex w-full'>
      <RecentProjectsCard/>
      <UpcomingTasksCard/>
    </div>
  )
}

export default DashboardContent