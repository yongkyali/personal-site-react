import React from 'react'
import { Link } from 'react-router-dom'

const Contact = () => {
  return (
    <div className="container d-flex flex-column justify-content-center">
      <div className="my-5">
        <h3>Let's collaborate!</h3>
        <p>Want to collaborate or discuss about system suitable for your company’s need? Or you have any question regarding programming/software development?</p>
        <p>
          <a href="mailto:me@yongky.xyz">Send me an e-mail!</a>
        </p>

        <Link to="/" className="bottom-navigation">
          <div className="button button-back"><span>Back to home</span></div>
        </Link>
      </div>
      
    </div>
  )
}

export default Contact