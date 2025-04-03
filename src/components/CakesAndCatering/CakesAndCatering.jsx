import "./CakesAndCatering.css";
import TextAnimation from "../Helpers/TextAnimation";
import cakesandcatering from "../../assets/cakesandcatering.png"

function CakesAndCatering() {
  return (
    <div className="cakes-catering-wrapper">
        <div className="cakes-catering-line"></div>
        <div className="cakes-catering-container">
            <div className="cakes-catering-images-container">
                <img className="cakes-catering-image" src={cakesandcatering} alt="Cakes & Catering"></img>
            </div>
            <div className="cakes-catering-text">
                <TextAnimation />
            </div>
        </div>
        <div className="cakes-catering-line"></div>
    </div>
  );
}

export default CakesAndCatering;