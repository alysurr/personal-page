import React from 'react';

export default function Contact() {
  return <section className="contact content">
    <h1 className="contact__header">Let's Talk!</h1>

    <h2>e-mail:</h2>
    <p>alysurr@gmail.com</p>
    
    <h2>phone:</h2>
    <p>+1 (239) 810-5827</p>

    <form action="submit" className='contact__form'>
      <label htmlFor="name">Name:</label>
      <input className="contact__input" id="name" type="text" />
      <label htmlFor="email">E-mail:</label>
      <input className="contact__input" id="email" type="text" />
      <label htmlFor="message">Message:</label>
      <textarea className="contact__input msg" type="text" />

      <input type="submit" value="submit" className="contact__button" form="form"></input>
    </form>


  </section>;
}
