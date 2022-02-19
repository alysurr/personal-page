import React from 'react'
import './Projects.scss'

var projects = require("../projects.json")

export default function Project() {
  return (
    <div className="projects">
        <h1>Projects</h1>
        <div className="projects__map">
          {projects.map(project => {
            return (
              <div key={project.title} className="projects__container">
              <h3 className="projects__title">{project.title}</h3>
              <img src={project.src} alt={project.title} className="projects__img"/>
              <p className="projects__desc">{project.desc}</p>
              <a href={project.git}><h2 className='projects__link em'>View on Github »</h2></a>
              </div>
            )
          })}
        </div>
    </div>
  )
}

