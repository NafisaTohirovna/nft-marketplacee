import React, { useEffect, useRef, useState } from "react";
import VanillaTilt from "vanilla-tilt";
import { collections } from "../data/data";

const Slide = () => {
  const slideRefs = useRef(collections.map(() => React.createRef()));
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    slideRefs.current.forEach((ref) => {
      VanillaTilt.init(ref.current, {
        glare: true,
        scale: 1.5,
        maxGlare: 0.2,
        reset: true,
      });
    });

    // Clean up the tilt effect on component unmount
    return () => {
      slideRefs.current.forEach((ref) => {
        ref.current.vanillaTilt.destroy();
      });
    };
  }, []);

  return (
    <div className="slider-wrap d-flex gap30 aic">
      {collections.map((images, i) => (
        <div className="slider" key={i}>
          <div className="slider-img">
            <img src={images[currentIndex]} ref={slideRefs.current[i]} />
          </div>

          <div className="pagination">
            {images.map((image, index) => (
              <div
                className="pagination-img"
                key={index}
                onClick={() => goToSlide(index)}
              >
                <img src={image} alt={`slide-${index}`} />
                <div className="pagination-hover">
                  <h4>1025+</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Slide;
