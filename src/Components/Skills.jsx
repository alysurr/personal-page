import React from 'react'
import './Skills.scss'
import react from '../Assets/Images/react-logo.png'
import sass from '../Assets/Images/sass-logo.png'
import js from '../Assets/Images/js-logo.png'

export default function Skills() {
  return (
    <div className='skills'>
        <h1>Skills</h1>

        <div className="skills__container">
            <img src={react} alt="" className="skills__img" />
            <img src={js} alt="" className="skills__img" />
            <img src={sass} alt="" className="skills__img" />
        </div>
    </div>
  )
}
