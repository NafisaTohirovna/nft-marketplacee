import { useEffect, useRef } from "react";
import VanillaTilt from "vanilla-tilt";

const Subscribe = () => {
  const subscribeRef = useRef();
  useEffect(() => {
    VanillaTilt.init(subscribeRef.current, {
      glare: true,
      scale: 1.1,
      maxGlare: 0.2,
      reset: true,
    });
  });
  return (
    <section id="subscribe">
      <div className="container d-flex jcsb">
        <div className="subscribe-img">
          <img src="/src/images/subscribe.png" ref={subscribeRef} />
        </div>
        <div className="subscribe-title">
          <h2>Join our weekly digest</h2>
          <p>Get exclusive promotions & updates straight to your inbox.</p>
          <form className="d-flex jcsb ">
            <input type="email" placeholder="Enter your email here Subscribe" />{" "}
            <button className="btn d-flex aic gap10">
              <i className="fa-regular fa-envelope"></i> Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
