import "./Contact.css"
import emailIcon from "../../assets/email.png";
import phoneIcon from "../../assets/phone.png";
import phone1Icon from "../../assets/phone1.png";
import locationIcon from "../../assets/location.png";


function Contact() {
    return (
        <div className="contact-wrapper">
            <div className="contact-maps">
                <div className="contact-map">
                    <div className="contact-map-bakeries">
                        <p>"Sito" pekare</p>
                        <p>Sarajevo</p>
                        <iframe className="contact-map-iframe" src="https://www.google.com/maps/embed?pb=!1m12!1m8!1m3!1d54659.120958473155!2d18.3447647!3d43.8600601!3m2!1i1024!2i768!4f13.1!2m1!1ssito%20pekare!5e1!3m2!1sen!2sba!4v1743937558824!5m2!1sen!2sba" width="500" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>        
                    </div>
                </div>
                <div className="contact-manifacture">
                <div className="contact-map-manifacture">
                        <p>"Sitortilla" proizvodnja</p>
                        <p>Goražde</p>
                        <iframe className="contact-map-iframe" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3331.244542452509!2d18.972896602851257!3d43.67116232208135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47588b003597b2e3%3A0xd77a932a8a793569!2sSito%20Gora%C5%BEde!5e1!3m2!1sen!2sba!4v1743942844123!5m2!1sen!2sba" width="500" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>        
                    </div>
                </div>
            </div>
            <div className="contact-info">
                <p><img src={phoneIcon} alt="Phone icon" />+387 62 993-487</p>
                <p><img src={phone1Icon} alt="Phone icon" />+387 33 789-930</p>
                <p><img src={emailIcon} alt="Email icon" />sitortilla@outlook.com</p>
                <p><img src={locationIcon} alt="Location icon" />Adema Buće 303, 71000 Sarajevo</p>
            </div>
        </div>
    );
  }
  
  export default Contact;