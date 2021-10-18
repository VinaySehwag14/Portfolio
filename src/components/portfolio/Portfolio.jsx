import "./portfolio.scss";

const Portfolio = () => {
  return (
    <div className="portfolio" id="portfolio">
      <h1>Projects</h1>

      <div className="container">
        <div className="item">
          <a
            href="https://kisaan-mern.herokuapp.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="item__image" src="assets/ecommerce.svg" alt="" />
            <h3>E-commerce App</h3>
          </a>
        </div>
        <div className="item">
          <a
            href="https://kisaan-mern.herokuapp.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="item__image" src="assets/ecommerce.svg" alt="" />
            <h3>E-commerce App</h3>
          </a>
        </div>
      </div>
    </div>
  );
};
export default Portfolio;
