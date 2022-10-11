import './index.scss'
import { Link, NavLink } from 'react-router-dom'
import LogoC from '../../assets/images/logo-c.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faEnvelope,
  faHome,
  faUser,
  faBriefcase,
  faBars,
  faClose,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { useState } from 'react'

const Sidebar = () => {

    const [showNav, setShowNav] = useState(false);

    return (
      <div className="nav-bar">
        <Link className="logo" to="/">
          <img src={LogoC} alt="website logo with my name"></img>
        </Link>
        <nav className={showNav ? 'mobile-show' : ''}>
          <NavLink
            exact="true"
            activeclassname="active"
            to="/"
            onClick={() => setShowNav(false)}
          >
            <FontAwesomeIcon icon={faHome} color="#4d4d4e"></FontAwesomeIcon>
          </NavLink>
          <NavLink
            onClick={() => setShowNav(false)}
            exact="true"
            activeclassname="active"
            className="about-link"
            to="/about"
          >
            <FontAwesomeIcon icon={faUser} color="#4d4d4e"></FontAwesomeIcon>
          </NavLink>
          <NavLink
            onClick={() => setShowNav(false)}
            exact="true"
            activeclassname="active"
            className="portfolio-link"
            to="/portfolio"
          >
            <FontAwesomeIcon icon={faBriefcase} color="#4d4d4e" />
          </NavLink>
          <NavLink
            onClick={() => setShowNav(false)}
            exact="true"
            activeclassname="active"
            className="contact-link"
            to="/contact"
          >
            <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
          </NavLink>
          <FontAwesomeIcon
            icon={faClose}
            onClick={() => setShowNav(false)}
            color="#eef25e"
            size="3x"
            className="close-icon"
          />
        </nav>
        <ul>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/callum-jepps-a4a8b3101/"
            >
              <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/CJepps?tab=repositories"
            >
              <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
            </a>
          </li>
        </ul>
        <FontAwesomeIcon
          onClick={() => setShowNav(true)}
          icon={faBars}
          color="#eef25e"
          size="3x"
          className="hamburger-icon"
        />
      </div>
    )
}

export default Sidebar
