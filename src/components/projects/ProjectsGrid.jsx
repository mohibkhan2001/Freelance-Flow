import React from 'react'
import ProjetcsCard from './ProjectsCard'
import ProjectsAdd from './ProjectsAdd'

const ProjectsGrid = ({ selectedFilter }) => {
  return (
    <div className='projects_grid py-4 flex-1'>
      <ProjetcsCard selectedFilter={selectedFilter}/>
      <ProjectsAdd/>
    </div>
  )
}

export default ProjectsGrid