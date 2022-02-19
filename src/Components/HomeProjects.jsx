import React from 'react'
import './HomeProjects.scss'

var projects = require("../projects.json")

export default function HomeProjects() {
  return (
    <div>
        <h1 className="home-projects">Projects</h1>
        <div className="home-projects__map">
          {projects.map(project => {
            return (
              <div className="home-projects__container">
              <img src={project.src} className="home-projects__img"/>
              <h3>{project.title}</h3>
              </div>
            )
          })}
        </div>
    </div>
  )
}
