import React from 'react'
import { Link } from 'react-router-dom'

const Work = () => {
  return (
    <div className="container d-flex flex-column justify-content-center">
      <div className="my-5">
        <h3>My works</h3>
        <p>
          I make websites and custom applications. I usually also do the design along the way. From programming perspective, I am familiar with React.JS, Python and PHP.
        </p>
        <p>
          Here are some of projects I’ve done or working on:
          <ul>
            <li><a href="https://www.executive-x.com" rel="noopener noreferrer" target="_blank">Executive-X</a></li>
            <li><a href="https://www.houseofleaders.co" rel="noopener noreferrer" target="_blank">House Of Leaders</a></li>
            <li><a href="https://github.com/irazasyed/telegram-bot-sdk" rel="noopener noreferrer" target="_blank">Telegram PHP SDK</a></li>
          </ul>
        </p>

        <Link to="/" className="bottom-navigation">
          <div className="button button-back"><span>Back to home</span></div>
        </Link>
      </div>
    </div>
  )
}

export default Work