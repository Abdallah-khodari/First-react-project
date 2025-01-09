import { Link, NavLink } from "react-router-dom"

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary p-4">
      <div className="container-fluid">
        <Link className="navbar-brand text-white ps-3" to="/">Start Framework</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav text-white ms-auto mb-2 mb-lg-0 text-white pe-3">
            <li className="nav-item">
              <NavLink className="nav-link text-white" activeClassName="active" aria-current="page" to="/about">ABOUT</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-white" activeClassName="active" to="/portfolio">PORTFOLIO</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-white" activeClassName="active" to="/contact">CONTACT</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}