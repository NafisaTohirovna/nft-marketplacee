import { discover } from "../data/data";
const Discover = () => {
  return (
    <section id="discover">
      <div className="container">
        <div className="discover-title d-flex jcsb aic">
          <div>
            <h2>Discover More NFTs</h2>
            <p>Explore new trending NFTs</p>
          </div>
          <button className="btn d-flex aic gap10 desktop">
            <i className="fa-regular fa-eye"></i> See All
          </button>
        </div>
        <div className="discover-cards d-flex gap30 jcc">
          {discover.map(({ id, title, name, avatar, img }) => {
            return (
              <div key={id} className="discover-card">
                <img src={img} alt="" />
                <div className="card-title">
                  <h4>{title}</h4>
                  <div className="card-creator d-flex aic gap10">
                    <img src={avatar} alt="" />
                    <h5>{name}</h5>
                  </div>
                  <div className="d-flex jcsb">
                    <div>
                      <h6>Price</h6>
                      <h5>1.63 ETH</h5>
                    </div>
                    <div>
                      <h6>Highest Bid</h6>
                      <h5>0.33 wETH</h5>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <button className="btn d-flex aic gap10 media">
          <i className="fa-regular fa-eye"></i> See All
        </button>
      </div>
    </section>
  );
};

export default Discover;
