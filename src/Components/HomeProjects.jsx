import React from 'react'
import { Link } from 'react-router-dom'
import './HomeProjects.scss'

var projects = require("../projects.json")

export default function HomeProjects() {
  return (
    <div className="home-projects">
        <h1>Projects</h1>
        <div className="home-projects__map">
          {projects.slice(0,3).map(project => {
            return (
              <div key={project.title} className="home-projects__container">
              <h3 className="home-projects__title em">{project.title}</h3>
              <img src={project.src} alt={project.title} className="home-projects__img"/>
              </div>
            )
          })}
        </div>
        <h2 className="home-projects__more"><Link className="em" to="/projects">View More »</Link></h2>
    </div>
  )
}
