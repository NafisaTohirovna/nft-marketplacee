import { categories } from "../data/data.js";

const Categories = () => {
  return (
    <section id="categories">
      <div className="container">
        <h2>Browse Categories</h2>
        <div className="categories-cards d-flex gap30 jcc">
          {categories.map(({ id, title, icon, bg }) => {
            return (
              <div key={id} className="categories-card">
                <div className="img">
                  <img src={bg} alt="" />
                  <div className="icon">
                    {" "}
                    <img src={icon} alt="" />
                  </div>
                </div>
                <div className="title">
                  <h4>{title}</h4>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Categories;
