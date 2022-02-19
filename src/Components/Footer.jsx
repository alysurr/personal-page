import './Footer.scss'
import React from 'react'
import github from '../Assets/Images/github-logo.png'
import linkedin from '../Assets/Images/linkedin-logo.png'

export default function Footer() {
  return (
    <section className='footer'>
        <p className="footer__credit">© Alyssa Challender 2022</p>
        <div className="footer__links">
          <a href="https://github.com/alysurr"><img src={github} alt="github logo" className="footer__img" /></a>
          <a href="https://www.linkedin.com/in/alysurr/"><img src={linkedin} alt="linkedin logo" className="footer__img" /></a>
        </div>
    </section>
  )
}
