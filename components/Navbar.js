import React, { useEffect, useState } from "react"

const handleScroll = setClass => {
  const nav = document.querySelector('.mh-header');
  if(pageYOffset > nav.scrollHeight) {
    setClass('scrolled')
  } else{
    setClass('')
  }
}

export default function Navbar() {
  const [navClass, setClass] = useState('')

  useEffect(() => {
    window.addEventListener('scroll', () => handleScroll(setClass));
  }, []);

  return (
    <header>
      <div className="container">
        <div className="row">
          <nav className={`mh-header navbar navbar-expand-lg mh-nav nav-btn fixed-top ${navClass}`} >
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon icon" />
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto ml-auto">
                <li className="nav-item active">
                  <a className="nav-link" href="#mh-home">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#mh-about">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#mh-skills">
                    Skills
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#mh-experience">
                    Experiences
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#mh-portfolio">
                    Portfolio
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#mh-blog">
                    Blog
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#mh-contact">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
