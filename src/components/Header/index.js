import "./index.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <nav className="navbar bg-green pink-bottom">
        <div className="container ">
          <h1 className="navbar-brand brand-text">Devi Nallammai Ramaswamy</h1> 
          <div className="d-flex">
            <Link exact= "true" to="/about" className="btn nav-btn">About Me</Link>
            <Link exact= "true" to="/portfolio" className="btn nav-btn">Portfolio</Link>
            <Link exact= "true" to="/contact" className="btn nav-btn">Contact Me</Link>
            <Link exact= "true" to="/resume" className="btn nav-btn">Resume</Link>            
          </div>
        </div>
      </nav>
    </div>
  )
}
