import Slide from "./Slide";

const Collection = () => {
  return (
    <section id="collection">
      <div className="container">
        <div className="collection-title">
          <h2>Trending Collection</h2>
          <p>Checkout our weekly updated trending collection.</p>
        </div>
        <div className="collection-cards">
          <Slide />
        </div>
      </div>
    </section>
  );
};

export default Collection;
