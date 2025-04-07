import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.jpg";
import "./Header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(prev => !prev);
  };

  return (
    <header className={`header sticky`}>
      <div className="container">
        <Link to="/"><img src={logo} alt="Sitortilla Logo" className="logo" /></Link>

        <nav>
          <div className="mobile-menu-icon" onClick={toggleMenu}>
            &#9776; {/* Hamburger icon */}
          </div>
          <ul className={menuOpen ? "open" : ""}>
            <li><Link to="/o-nama" onClick={() => setMenuOpen(false)}>O nama</Link></li>
            <li><Link to="/usluge" onClick={() => setMenuOpen(false)}>Usluge</Link></li>
            <li className="hide"></li>
            <li><Link to="/proizvodi" onClick={() => setMenuOpen(false)}>Sitortilla</Link></li>
            <li><Link to="/kontakt" onClick={() => setMenuOpen(false)}>Kontakt</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
