import { useEffect, useState } from "react";
import styles from "./Countdown.module.css";

const calculateTimeLeft = (date) => {
  let difference = date - +new Date();
  let timeLeft = {};

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  return timeLeft;
};

const Countdown = ({ date = new Date() }) => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(date));

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft(date));
    }, 1000);
    // Clear timeout if the component is unmounted
    return () => clearTimeout(timer);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval] && timeLeft[interval] !== 0) {
      return;
    }

    timerComponents.push(
      <div className={styles.time}>
        <span className={`${styles.number} ${interval === "seconds" ? styles.seconds : ""}`}>{timeLeft[interval]}</span>
        <span className={styles.label}>{interval}</span>
      </div>
    );
  });

  return (
    <div className={styles.container}>
      {timerComponents.length ? timerComponents : <span>Time's up!</span>}
    </div>
  );
};

export default Countdown;
