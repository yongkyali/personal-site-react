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
              'design websites and mobile apps.',
              'do codes.',
              'do run and swim.',
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

        <div className="social-container">
          <a className="social-link" href="https://github.com/yongkylie" rel="noopener noreferrer" target="_blank"><i className="cib cib-github" aria-hidden="true" /><span className="d-none" /></a>
          <a className="social-link" href="https://codesandbox.io/u/yongkylie" rel="noopener noreferrer" target="_blank"><i className="cib cib-codesandbox" aria-hidden="true" /><span className="d-none" /></a>
          <a className="social-link" href="https://twitter.com/yongkylie" rel="noopener noreferrer" target="_blank"><i className="cib cib-twitter" aria-hidden="true" /><span className="d-none" /></a>
          <a className="social-link" href="https://instagram.com/yongkyliee" rel="noopener noreferrer" target="_blank"><i className="cib cib-instagram" aria-hidden="true" /><span className="d-none" /></a>
          <a className="social-link" href="https://medium.com/@yongkyliee" rel="noopener noreferrer" target="_blank"><i className="cib cib-medium" aria-hidden="true" /><span className="d-none" /></a>
          <a className="social-link" href="https://id.linkedin.com/in/yongkylie" rel="noopener noreferrer" target="_blank"><i className="cib cib-linkedin" aria-hidden="true" /><span className="d-none" /></a>
          <a className="social-link" href="https://stackoverflow.com/users/7498283/yongky" rel="noopener noreferrer" target="_blank"><i className="cib cib-stackoverflow" aria-hidden="true" /><span className="d-none" /></a>
        </div>
      </div>
    </div>
  )
}

export default Landing