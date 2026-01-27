import React from 'react'
import ProjectsFilter from './ProjectsFilter'

const ProjectsFilterGrid = ({ selectedFilter, setSelectedFilter }) => {
  return (
    <div className='py-8'><ProjectsFilter selectedFilter={selectedFilter} setSelectedFilter={setSelectedFilter}/></div>
  )
}

export default ProjectsFilterGrid