import "../styles/timer.scss";
import { useEffect, useState, useRef } from "react";

function Timer({ duration }) {
  const [counter, setCounter] = useState(0);
  const [progress, setProgress] = useState(0);
  const intervalRef = useRef();

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCounter((curr) => curr + 1);
    }, 1000);

    //clear interval inside useEffect
    return () => clearInterval(intervalRef.current);
  }, []);

  useEffect(() => {
    setProgress(100 * (counter / duration));

    if(counter === duration){
        clearInterval(intervalRef.current)
    }
  }, [counter]);

  return (
    <div className="timer-container">
      <div className="progress"></div>
    </div>
  );
}
export default Timer;
