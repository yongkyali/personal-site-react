import React from 'react'
import { Link } from 'react-router-dom';
import Typed from 'react-typed';

const Landing = () => {
  return (
    <div className="container d-flex flex-column justify-content-center">
      <div className="my-5">
        <h1>Hello.</h1>
        <p className="landing-subtitle">
          My name is Yongky Ali.
          <br/>
          <span>I </span>
          <Typed 
            strings={[
              'am a software developer.',
              'design websites and mobile-apps.',
              'do codes.',
              'swim a lot.',
              'drink coffee.',
              'am a dog person.'
            ]}
            typeSpeed={40}
            backSpeed={30}
            backDelay={1350}
            loop >
          </Typed>
        </p>

        <p className="landing-subtitle">
          <Link to='/about'>about </Link> /
          <Link to='/myworks'> my works </Link> /
          <Link to='/contact'> contact </Link>
        </p>

        <div className="d-flex">
          <a href="https://github.com/yongkylie" rel="noopener noreferrer" target="_blank"><i className="mdi mdi-github-circle" aria-hidden="true" /><span className="d-none" /></a>
          <a href="https://twitter.com/yongkylie" rel="noopener noreferrer" target="_blank"><i className="mdi mdi-twitter" aria-hidden="true" /><span className="d-none" /></a>
          <a href="https://instagram.com/yongkyliee" rel="noopener noreferrer" target="_blank"><i className="mdi mdi-instagram" aria-hidden="true" /><span className="d-none" /></a>
          <a href="https://medium.com/@yongkyliee" rel="noopener noreferrer" target="_blank"><i className="mdi mdi-medium" aria-hidden="true" /><span className="d-none" /></a>
          <a href="https://id.linkedin.com/in/yongkylie" rel="noopener noreferrer" target="_blank"><i className="mdi mdi-linkedin" aria-hidden="true" /><span className="d-none" /></a>
          <a href="https://stackoverflow.com/users/7498283/yongky" rel="noopener noreferrer" target="_blank"><i className="mdi mdi-stack-overflow" aria-hidden="true" /><span className="d-none" /></a>
        </div>
      </div>
    </div>
  )
}

export default Landing