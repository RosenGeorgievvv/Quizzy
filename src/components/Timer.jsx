import "../styles/timer.scss";
import { useEffect, useState, useRef } from "react";

function Timer({ duration, onTimeUp }) {
  const [counter, setCounter] = useState(0);
  const [progress, setProgress] = useState(0);
  const intervalRef = useRef();

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCounter((curr) => curr + 1);
    }, 1000);

    // Clear interval when component unmounts
    return () => clearInterval(intervalRef.current);
  }, []);

  useEffect(() => {
    setProgress((100 * counter) / duration);

    if (counter === duration) {
      clearInterval(intervalRef.current);
      onTimeUp();
    }
  }, [counter]);

  return (
    <div className="timer-container">
      <div
        style={{
          width: `${progress}%`,
          backgroundColor: `${
            progress < 40 ? "lightgreen" : progress < 70 ? "orange" : "red"
          }`,
        }}
        className="progress"
      ></div>
    </div>
  );
}

export default Timer;
