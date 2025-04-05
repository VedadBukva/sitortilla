import { Link } from "react-router-dom";
import logo from "../../assets/logo.jpg";
import "./Header.css";

const Header = () => {

  return (
    <header className={`header sticky`}>
      <div className="container">
        <nav>
          <ul>
            <li><Link to="/o-nama">O nama</Link></li>
            <li><Link to="/usluge">Usluge</Link></li>
            <li><Link to="/"><img src={logo} alt="Sitortilla Logo" className="logo" /></Link></li>
            <li><Link to="/proizvodi">Sitortilla</Link></li>
            <li><Link to="/kontakt">Kontakt</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
