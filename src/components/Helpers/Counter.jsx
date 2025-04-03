import { useEffect, useState } from "react";
import "./Counter.css";

const Counter = ({ start = 0, end = 16000, duration = 3000 }) => {
  const [count, setCount] = useState(start);

  useEffect(() => {
    let startTime;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * (end - start) + start));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [start, end, duration]);

  return (
    <div className="counter-container">
      <div className="line"></div>
      <h2 className="counter">{count.toLocaleString()}</h2>
      <div className="line"></div>
    </div>
  );
};

export default Counter;
