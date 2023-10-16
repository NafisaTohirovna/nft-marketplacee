import { works } from "../data/data";
const Works = () => {
  return (
    <section id="works">
      <div className="container">
        <div className="works-title">
          <h2>How it works</h2>
          <p>Find out how to get started</p>
        </div>
        <div className="works-cards d-flex aic jcc gap30">
          {works.map(({ id, img, title, description }) => {
            return (
              <div key={id} className="works-card">
                <div className="works-img">
                  <img src={img} alt="" />
                </div>
                <div>
                  <h4>{title}</h4>
                  <p>{description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Works;
