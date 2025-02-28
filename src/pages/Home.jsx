import Header from "../components/Header";
import ModalCarousel from "../components/ModalCarousel";
import Footer from "../components/Footer";
import banner from "../assets/images/banner.png";
import { IoIosArrowRoundForward } from "react-icons/io";

import CartProduct from "../components/CartProduct";
import Card from "../components/Card";
const Home = () => {
  return (
    <div>
      <ModalCarousel/>
      <Header />
      <div>
        <div className="position-relative">
          <img width="100%" src={banner} className="img-fluid" alt="Banner" />
          <div
            style={{
              left: "100px",
              width: "450px",
              borderStyle: "dotted",
              borderColor: "blue",
            }}
            className="position-absolute top-50 translate-middle-y p-4 p-5 bg-light rounded shadow text-center"
          >
            <span
              style={{ top: "-20px", background: "#ffc415", color: "#896906" }}
              className=" position-absolute translate-middle-x px-4 py-2 rounded-1 mb-3"
            >
              Recipe of the Day
            </span>
            <h2 className="mt-4" style={{ color: "#f44b87" }}>
              Salad Caprese
            </h2>
            <p className="text-muted">
              Classic Italian Salad Caprese: ripe tomatoes, fresh mozzarella,
              herbs, olive oil, and balsamic vinegar create a refreshing dish
              for lunch or appetizer.
            </p>
            <div className="mt-5 d-flex gap-3 flex-column align-items-center">
              <img
                src={banner}
                width="40px"
                height="40px"
                className="rounded-5"
                alt=""
              />
              <h4 style={{ color: "#58606e" }}>Salad Caprese</h4>
              <button
                className="px-4 py-2 rounded-2"
                style={{
                  color: "white",
                  background: "pink",
                  border: "none",
                  backgroundColor: "#f44b87",
                }}
              >
                View now
                <IoIosArrowRoundForward
                  style={{ fontSize: "25px", fontWeight: "bold" }}
                />
              </button>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="d-flex flex-column justify-content-center align-items-center mt-5">
            <h1
              style={{ color: "#f44b87", fontSize: "35px", fontWeight: "bold" }}
            >
              This Summer Recipes
            </h1>
            <span style={{ fontSize: "20px" }}>
              We have all your Independence Day sweets covered.
            </span>
            <div className="row g-4 mt-3">
              <CartProduct />
              <CartProduct />
              <CartProduct />
              <CartProduct />
            </div>
          </div>
          <div className="d-flex flex-column justify-content-center align-items-center mt-5">
            <h1
              style={{ color: "#f44b87", fontSize: "35px", fontWeight: "bold" }}
            >
              This Summer Recipes
            </h1>
            <span style={{ fontSize: "20px" }}>
              We have all your Independence Day sweets covered.
            </span>
            <div className="row g-4 mt-3">
              <CartProduct />
              <CartProduct />
              <CartProduct />
              <CartProduct />
            </div>
          </div>

          <div className="d-flex flex-column justify-content-center align-items-center mt-5">
            <h1
              style={{ color: "#f44b87", fontSize: "35px", fontWeight: "bold" }}
            >
              This Summer Recipes
            </h1>
            <span style={{ fontSize: "20px" }}>
              We have all your Independence Day sweets covered.
            </span>
            <div className="row mt-3 d-flex">
              <Card />
              <Card />
              <Card />
              <Card />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
