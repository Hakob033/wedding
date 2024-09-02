import React, { useState, useEffect } from "react";
import BackImg from "../../assets/mainImg.jpg";
import Flover from "../../assets/flover.svg";
import "./Timer.css";

export default function Timer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date("September 27, 2024 00:00:00").getTime();

    const countdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (difference % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    const intervalId = setInterval(countdown, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="timer">
      <img className="backImg" src={BackImg} alt="Background" />
      <div className="some">
        <span className="titlle">Սիրով կսպասենք Ձեզ</span>
        <img className="flower2" src={Flover} alt="" />
      </div>
      <div className="any">
        <p>հարսանիքին մնացել է</p>
        <div className="timerDiv">
          <div className="countdown">
            <div className="time-section">
              <span className="time">{timeLeft.days}</span>
              <span className="label">Օր</span>
            </div>
            <div className="time-section">
              <span className="time">{timeLeft.hours}</span>
              <span className="label">Ժամ</span>
            </div>
            <div className="time-section">
              <span className="time">{timeLeft.minutes}</span>
              <span className="label">Րոպե</span>
            </div>
            <div className="time-section">
              <span className="time">{timeLeft.seconds}</span>
              <span className="label">Վայրկյան</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
