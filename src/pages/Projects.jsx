import React, { useState } from 'react'
import Header from '../components/common/Header'
import ProjectsFilterGrid from '../components/projects/ProjectsFilterGrid'
import ProjectsGrid from '../components/projects/ProjectsGrid'

const Projects = () => {
  const [selectedFilter, setSelectedFilter] = useState('All Projects');

  return (
    <div className='w-full h-screen py-6 px-8 flex flex-col'>
      <Header HeaderName={"Projects"} HeaderDescription={"Manage and track all your projects"}/>
      <ProjectsFilterGrid selectedFilter={selectedFilter} setSelectedFilter={setSelectedFilter}/>
      <ProjectsGrid selectedFilter={selectedFilter}/>
    </div>
  )
}

export default Projects