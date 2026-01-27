import React from 'react'
import ProjetcsCard from './ProjectsCard'

const ProjectsGrid = ({ selectedFilter }) => {
  return (
    <div className='projects_grid py-4 flex-1'><ProjetcsCard selectedFilter={selectedFilter}/>
    </div>
  )
}

export default ProjectsGrid