import "./Footer.css";
import logo from "../../assets/logo.jpg";
import instagramLogo from "../../assets/instagram.png";
import facebookLogo from "../../assets/facebook.png";
import halalLogo from "../../assets/halal.png";
import ifsLogo from "../../assets/ifs.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section footer-section-logo">
          <img src={logo} alt="Sitortilla Logo" className="footer-logo" />
        </div>
        <div className="footer-section">
          <h3>OSMO d.o.o.</h3>
          <p>ul. Adema Buće br. 303</p>
          <p>71000 Sarajevo, BiH</p>
          <p>+387 33 789-930</p>
          <p>sitortilla@outlook.com</p>
        </div>
        <div className="footer-section">
          <h3>Identifikacijski podaci</h3>
          <p><strong>ID Broj:</strong> 4200167790007</p>
          <p><strong>PDV Broj:</strong> 200167790007</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Osmo d.o.o. © {new Date().getFullYear()} Sva prava pridržana. Dizajn superiorITy.</p>
        <div className="footer-certificates">
          <img className="halal-logo" src={halalLogo} alt="Halal Icon" />
          <img className="ifs-logo" src={ifsLogo} alt="IFS Icon" />
        </div>
        <div className="footer-social-networks">
          <a href="https://www.facebook.com/pekarasito"><img className="footer-fb" src={facebookLogo} alt="Facebook Icon" /></a>
          <a href="https://www.instagram.com/pekarasito"><img className="footer-ig" src={instagramLogo} alt="Instagram Icon" /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
