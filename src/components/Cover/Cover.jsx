import { useState } from "react";
import "./Cover.css";
import img2 from "../../assets/SITO toritilja 20cm 8kom 3D.png";
import tortilla from "../../assets/tortilla.png";

const Cover = () => {
    const [isHovered, setIsHovered] = useState(false);

    return (
      <div className="cover-wrapper">
        <div className="cover-header"></div>
        <div 
          className="cover-description"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="cover-image-container">
            <img
              src={img2}
              alt="Tortilla"
              className={`cover-tortilla ${isHovered ? "fade-out" : ""}`}
            />
            <img
              src={tortilla}
              alt="Tortilla Hover"
              className={`cover-tortilla-hover ${isHovered ? "fade-in" : ""}`}
            />
          </div>  
          <div className="cover-text">
            <p className="cover-text-bold">Sitortilla</p>
            <p className="cover-text-description">Dobar komšija donosi najbolji spoj tradicije i inovacije. <br></br> Pronađite <b>Sitortillu</b> u pekari Sito i uživajte u savršenom okusu!</p>
          </div>
        </div>
      </div>
    );
  };
  
  export default Cover;