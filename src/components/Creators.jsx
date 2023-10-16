import { creators } from "../data/data.js";
const Creators = () => {
  return (
    <section id="creators">
      <div className="container">
        <div className="creators-title d-flex jcsb aic">
          <div>
            <h2>Top creators</h2>
            <p>Checkout Top Rated Creators on the NFT Marketplace</p>
          </div>
          <button className="btn d-flex aic gap10 desktop">
            <i className="fa-solid fa-rocket"></i> View Rankings
          </button>
        </div>
        <div className="creator-cards">
          {creators.map(({ id, name, avatar }) => {
            return (
              <div key={id} className="creator-card">
                <div className="creator-img">
                  <span>{id}</span>
                  <img src={avatar} alt="" />
                </div>
                <div className="creator-title">
                  <h4>{name}</h4>
                  <div className="d-flex aic gap10">
                    {" "}
                    <h6>Total Sales:</h6> <h5>34.53 ETH</h5>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <button className="btn d-flex aic gap10 media">
          <i className="fa-solid fa-rocket"></i> View Rankings
        </button>
      </div>
    </section>
  );
};

export default Creators;
