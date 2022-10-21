import "./index.css";

export default function Header() {
  return (
    <div>
      <nav className="navbar bg-green pink-bottom">
        <div className="container ">
          <a href="/" className="navbar-brand brand-text">Devi Nallammai Ramaswamy</a>
          <div className="d-flex">
            <button className="btn nav-btn">About Me</button>
            <button className="btn nav-btn">Portfolio</button>
            <button className="btn nav-btn">Contact Me</button>
            <button className="btn nav-btn">Resume</button>            
          </div>
        </div>
      </nav>
    </div>
  )
}
