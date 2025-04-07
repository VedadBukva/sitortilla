import "./NumberInfo.css";

import Counter from "../Helpers/Counter";

function NumberInfo() {
  return (
    <div className="numberinfo-wrapper">
        <Counter start={67890} duration={3500} />
        <div className="numberinfo-text">
            <p>SVJEŽIH TORTILJA - SVAKI DAN! </p>
        </div>
    </div>
  );
}

export default NumberInfo;