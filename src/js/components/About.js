import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div className="container d-flex flex-column justify-content-center">
      <div className="my-5">
        <h3>About me</h3>
        <p>I am a software developer based in Medan, Indonesia. My passion in website and mobile-apps design makes me a full-stack software developer. I also speak in public sometimes.</p>
        <p>Currently the CTO of Executive-X, a lively company which focus on digital marketing and influencers.</p>
        <p>
          I like to share my knowledge about programming and software development. If have any questions, don't hesitate to
          <Link to="/contact"> drop me a mail</Link>!
        </p>

        <Link to="/" className="bottom-navigation">
          <div className="button button-back"><span>Back to home</span></div>
        </Link>
      </div>
    </div>
  )
}

export default About