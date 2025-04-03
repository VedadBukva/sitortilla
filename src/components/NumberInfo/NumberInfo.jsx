import "./NumberInfo.css";

import Counter from "../Helpers/Counter";

function NumberInfo() {
  return (
    <div className="numberinfo-wrapper">
        <Counter start={3765} end={16000} duration={4000} />
        <div className="numberinfo-text">
            <p>SVJEŽIH TORTILJA - SVAKI DAN! </p>
        </div>
    </div>
  );
}

export default NumberInfo;