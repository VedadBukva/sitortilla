import "./CakesAndCatering.css";
import { useNavigate } from 'react-router-dom';

function CakesAndCatering() {
  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/usluge#${id}`);
  };

  return (
    <div className="cakes-catering-wrapper">
        <div className="cakes-catering-line"></div>
        <p className="cakes-catering-wrapper-title">Naše usluge</p>
        <div className="cakes-catering-container">
          <div onClick={() => handleClick('catering')} className="cakes-catering-catering cakes-catering-box">
            <div class="overlay">
              <p class="text">Catering</p>
            </div>
          </div>
          <div onClick={() => handleClick('pekare')} className="cakes-catering-bakeries cakes-catering-box">
            <div class="overlay-second-column">
              <p class="text-second-column">Pekare</p>
            </div></div>
          <div onClick={() => handleClick('poslastice')} className="cakes-catering-cakes cakes-catering-box">
            <div class="overlay-second-column">
              <p class="text-second-column">Poslastice</p>
            </div></div>
          <div onClick={() => handleClick('sitortilla')} className="cakes-catering-sitortilla cakes-catering-box">
            <div class="overlay-second-column">
              <p class="text-second-column">Sitortilla</p>
            </div></div>
        </div>
        <div className="cakes-catering-line"></div>
    </div>
  );
}

export default CakesAndCatering;