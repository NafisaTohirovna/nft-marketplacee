import { navLink } from "../data/data";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-top d-flex  jcsb gap30">
          <div>
            <a href="#0">
              <img src="src/assets/Logo.png" alt="" />
            </a>
            <h6>NFT marketplace UI created with Anima for Figma.</h6>
            <h6>Join our community</h6>
            <div className="info-icons d-flex aic gap30">
              <div className="icon">
                <i className="fa-brands fa-discord"></i>
              </div>
              <div className="icon">
                <i className="fa-brands fa-youtube"></i>
              </div>
              <div className="icon">
                <i className="fa-brands fa-twitter"></i>
              </div>
              <div className="icon">
                <i className="fa-brands fa-instagram"></i>
              </div>
            </div>
          </div>
          <ul>
            <h4>Explore</h4>
            {navLink.map(({ id, title, link }) => {
              return (
                <li key={id}>
                  <a href={link}>{title}</a>
                </li>
              );
            })}
          </ul>
          <div className="subscribe-title">
            <h4>Join our weekly digest</h4>
            <h6>Get exclusive promotions & updates straight to your inbox.</h6>
            <form className="d-flex  ">
              <input
                type="email"
                placeholder="Enter your email here Subscribe"
              />{" "}
              <button className="btn d-flex aic gap10">
                <i className="fa-regular fa-envelope"></i> Subscribe
              </button>
            </form>
          </div>
        </div>

        <h6>Ⓒ NFT Market. Use this template freely.</h6>
      </div>
    </footer>
  );
};

export default Footer;
