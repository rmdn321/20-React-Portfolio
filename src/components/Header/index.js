import "./index.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <nav className="navbar bg-green pink-bottom">
        <div className="container ">
          <h1 className="navbar-brand brand-text">Devi Nallammai Ramaswamy</h1> 
          <div className="d-flex">
            <Link exact= "true" to="/20-React-Portfolio/about" className="btn nav-btn">About Me</Link>
            <Link exact= "true" to="/20-React-Portfolio/portfolio" className="btn nav-btn">Portfolio</Link>
            <Link exact= "true" to="/20-React-Portfolio/contact" className="btn nav-btn">Contact Me</Link>
            <Link exact= "true" to="/20-React-Portfolio/resume" className="btn nav-btn">Resume</Link>            
          </div>
        </div>
      </nav>
    </div>
  )
}
