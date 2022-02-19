import './Footer.scss'
import React from 'react'
import { Link } from 'react-router-dom'
import github from '../Assets/Images/github-logo.png'
import linkedin from '../Assets/Images/linkedin-logo.png'

export default function Footer() {
  return (
    <section className='footer'>
        <p className="footer__credit">© Alyssa Challender 2022</p>
        <div className="footer__links">
        <Link to=""><img src={github} alt="github logo" className="footer__img" /></Link>
        <img src={linkedin} alt="linkedin logo" className="footer__img" />
        <Link to=""></Link></div>
    </section>
  )
}
