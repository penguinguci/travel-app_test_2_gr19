import Header from "../components/Header";
import Footer from "../components/Footer";
import banner from "../assets/images/banner.png";

const About = () => {
  return (
    <>
      <Header />
      <div className="container mb-5" style={{ marginTop: "80px" }}>
        <nav className="d-flex align-items-center mb-4">
            <a href="/" className="text-decoration-none text-dark fw-bold">Home</a>
            <i className="bi bi-chevron-right mx-2" style={{fontSize: "13px"}}></i>
            <a href="/" className="text-pink fw-bold text-decoration-none">About Us</a>
        </nav>
        <div className="text-center mb-4">
          <h1 className="display-4 fw-bold">About Us</h1>
          <p className="lead text-muted">
            Welcome to Cheffify! Your go-to platform for discovering and sharing the best recipes.
          </p>
        </div>

        <div className="row align-items-center">
          <div className="col-md-6">
            <img
              src={banner}
              alt="Our Team"
              className="img-fluid rounded shadow-sm"
            />
          </div>

          <div className="col-md-6">
            <h2 className="fw-semibold">Our Mission</h2>
            <p className="text-muted">
              At Cheffify, we aim to bring food lovers together by providing a
              space to explore and share amazing recipes. Whether you're a home
              cook or a professional chef, our mission is to inspire creativity
              in the kitchen and help you make memorable meals.
            </p>
            <ul className="list-unstyled">
              <li className="mb-2">
                <i className="bi bi-check-circle text-primary me-2"></i> Curated
                recipes from around the world
              </li>
              <li className="mb-2">
                <i className="bi bi-check-circle text-primary me-2"></i>{" "}
                Easy-to-follow guides for all skill levels
              </li>
              <li className="mb-2">
                <i className="bi bi-check-circle text-primary me-2"></i>{" "}
                A supportive and vibrant community of food lovers
              </li>
            </ul>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-md-4 text-center">
            <i className="bi bi-people display-1 text-primary mb-3"></i>
            <h5>Community Focused</h5>
            <p className="text-muted">
              Join a thriving community where food enthusiasts can share and
              learn together.
            </p>
          </div>
          <div className="col-md-4 text-center">
            <i className="bi bi-journal-text display-1 text-success mb-3"></i>
            <h5>Expert Recipes</h5>
            <p className="text-muted">
              Discover expertly crafted recipes that guarantee delicious results
              every time.
            </p>
          </div>
          <div className="col-md-4 text-center">
            <i className="bi bi-heart display-1 text-danger mb-3"></i>
            <h5>Passion for Food</h5>
            <p className="text-muted">
              Share your passion for cooking and enjoy the love of food with
              others.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
