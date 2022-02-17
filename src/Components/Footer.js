import React from 'react'
import { Link } from 'react-router-dom'
import github from '../Assets/Images/github-logo.png'
import linkedin from '../Assets/Images/linkedin-logo.png'

export default function Footer() {
  return (
    <section className='footer'>
        <p className="footer__credit">Alyssa Challender, 2022</p>
        <Link className="footer__link">
        <img src={github} alt="" className="footer__logo" />
        </Link>
    </section>
  )
}
