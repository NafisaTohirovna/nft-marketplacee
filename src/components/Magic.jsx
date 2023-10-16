import { useState, useEffect } from "react";
const Magic = () => {
  const [hours, setHours] = useState(59);
  const [minutes, setMinutes] = useState(59);
  const [seconds, setSeconds] = useState(59);

  useEffect(() => {
    const interval = setInterval(() => {
      if (hours === 0 && minutes === 0 && seconds === 0) {
        clearInterval(interval);
      } else {
        if (minutes === 0 && seconds === 0) {
          setHours((prevHours) => prevHours - 1);
          setMinutes(59);
          setSeconds(59);
        } else if (seconds === 0) {
          setMinutes((prevMinutes) => prevMinutes - 1);
          setSeconds(59);
        } else {
          setSeconds((prevSeconds) => prevSeconds - 1);
        }
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [hours, minutes, seconds]);
  return (
    <section id="magic">
      <div className="container d-flex jcsb">
        <div className="magic-title">
          <div className="creator d-flex aic gap10">
            <img src="/src/assets/Avatar Placeholder (3).png" alt="" />
            <h5>Shroomie</h5>
          </div>
          <h2>Magic Mashrooms</h2>
          <button className="btn d-flex aic gap10 ">
            <i className="fa-regular fa-eye"></i> See All
          </button>
        </div>
        <div className="magic-time">
          <h6>Auction ends in:</h6>
          <div className="d-flex gap20 ">
            <div>
              <h2 className="hour">{hours < 10 ? `0${hours}` : hours} :</h2>
              <h6>Hours</h6>
            </div>
            <div>
              <h2 className="minute">
                {minutes < 10 ? `0${minutes}` : minutes} :
              </h2>
              <h6>Minutes</h6>
            </div>
            <div>
              <h2 className="second">
                {seconds < 10 ? `0${seconds}` : seconds}
              </h2>
              <h6>Seconds</h6>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Magic;
