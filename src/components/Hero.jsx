import heroImg from "../images/hero-img.png";
import avatar from "../images/avatar.png";
import VanillaTilt from "vanilla-tilt";
import { useEffect, useRef } from "react";

const Hero = () => {
  const heroRef = useRef();
  useEffect(() => {
    VanillaTilt.init(heroRef.current, {
      maxGlare: 0.5,
      reset: true,
    });
  });
  return (
    <section id="hero">
      <div className="container d-flex jcsb gap40 ">
        <div className="hero-title">
          <h1>Discover digital art & Collect NFTs</h1>
          <p>
            NFT marketplace UI created with Anima for Figma. Collect, buy and
            sell art from more than 20k NFT artists.
          </p>
          <button className="btn d-flex aic gap10">
            <i className="fa-solid fa-rocket"></i> Get Started
          </button>
          <div className="additional d-flex  gap40 ">
            <span>
              <h3>240k+</h3>
              <h4>Total Sale</h4>
            </span>
            <span>
              <h3>100k+</h3>
              <h4>Auctions</h4>
            </span>
            <span>
              <h3>240k+</h3>
              <h4>Artists</h4>
            </span>
          </div>
        </div>
        <div className="hero-nft" ref={heroRef}>
          <img src={heroImg} />
          <div className="nft-title">
            <h4>Space Walking</h4>
            <h5 className="d-flex aic gap10">
              <img src={avatar} alt="" /> Animakid
            </h5>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
