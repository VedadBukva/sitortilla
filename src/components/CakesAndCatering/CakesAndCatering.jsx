import "./CakesAndCatering.css";

function CakesAndCatering() {
  return (
    <div className="cakes-catering-wrapper">
        <div className="cakes-catering-line"></div>
        <p className="cakes-catering-wrapper-title">Naše usluge</p>
        <div className="cakes-catering-container">
          <div className="cakes-catering-catering cakes-catering-box">
            <div class="overlay">
              <p class="text">Catering</p>
            </div>
          </div>
          <div className="cakes-catering-bakeries cakes-catering-box">
            <div class="overlay-second-column">
              <p class="text-second-column">Pekare</p>
            </div></div>
          <div className="cakes-catering-cakes cakes-catering-box">
            <div class="overlay-second-column">
              <p class="text-second-column">Poslastice</p>
            </div></div>
          <div className="cakes-catering-sitortilla cakes-catering-box">
            <div class="overlay-second-column">
              <p class="text-second-column">Sitortilla</p>
            </div></div>
        </div>
        <div className="cakes-catering-line"></div>
    </div>
  );
}

export default CakesAndCatering;