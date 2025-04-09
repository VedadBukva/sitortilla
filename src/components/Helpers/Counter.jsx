import { useEffect, useState } from "react";
import "./Counter.css";

const Counter = ({ start = 0, end = 100000, duration = 3000 }) => {
  const [count, setCount] = useState(start);
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    const hasAnimated = sessionStorage.getItem("counterAnimated");

    if (!hasAnimated) {
      setShouldAnimate(true);
      sessionStorage.setItem("counterAnimated", "true");
    }
    else {
      setCount(end);
    }
  }, []);

  useEffect(() => {
    if (!shouldAnimate) return;

    let startTime;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * (end - start) + start));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [shouldAnimate, start, end, duration]);

  return (
    <div className="counter-container">
      <div className="line-1"></div>
      <h2 className="counter">
        {count.toLocaleString()}{count === end && '+'}
      </h2>
      <div className="line-2"></div>
    </div>
  );
};

export default Counter;
