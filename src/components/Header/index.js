import './index.css'
import {Link} from 'react-router-dom'

const Header = () => (
  <div className="app-container">
    <nav className="nav-bar">
      <div className="logo-container">
        <img
          src=" https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
          alt="wave"
          className="wave-logo"
        />
        <p className="wave">Wave</p>
      </div>

      <ul className="list">
        <li>
          <Link to="/">Home </Link>
        </li>

        <li>
          <Link to="/about">About</Link>
        </li>

        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  </div>
)

export default Header
