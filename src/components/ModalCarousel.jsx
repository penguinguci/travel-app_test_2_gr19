import { useState } from "react";
import slide1 from "../assets/images/slide1.png";
import slide2 from "../assets/images/slide2.png";
import slide3 from "../assets/images/slide3.png";
import bootstrapBundle from 'bootstrap/dist/js/bootstrap.bundle.min';
import "./Component.scss";

const ModalCarousel = () => {
  const [model, setModel] = useState(true);

  const handleNext = () => {
    const carousel = document.getElementById('carouselExample');
    const bsCarousel = bootstrapBundle.Carousel.getInstance(carousel);
    bsCarousel.next();
  };

  return (
    <>
      {model && (
        <div className="modal-backdrop fade show z-4" onClick={() => setModel(false)}></div>
      )}

      <div
        className={`modal fade ${model ? "show" : ""}`}
        id="discoverModal"
        tabIndex="-1"
        aria-labelledby="discoverModalLabel"
        aria-hidden={!model}
        style={{ display: model ? "block" : "none" }}
      >
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <button
              type="button"
              className="btn-close position-absolute top-0 end-0 m-3"
              onClick={() => setModel(false)}
              aria-label="Close"
            ></button>
            <div className="model-body text-center mt-5">
              <h2 className="fw-bold text-pink mb-4">Discover Cheffify</h2>
              <p className="text-muted fs-6">
                Easy and delicious cooking instructions right here. Start
                exploring now!
              </p>
              <div
                id="carouselExample"
                className="carousel slide"
                data-bs-ride="carousel"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img
                      src={slide1}
                      className="d-block w-75 h-auto mx-auto rounded"
                      alt="Slide 1"
                      style={{ maxHeight: "350px", objectFit: "cover" }}
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src={slide2}
                      className="d-block w-75 h-auto mx-auto rounded"
                      alt="Slide 2"
                      style={{ maxHeight: "350px", objectFit: "cover" }}
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src={slide3}
                      className="d-block w-75 h-auto mx-auto rounded"
                      alt="Slide 3"
                      style={{ maxHeight: "350px", objectFit: "cover" }}
                    />
                  </div>
                </div>
                <div className="carousel-indicators">
                  <button
                    type="button"
                    data-bs-target="#carouselExample"
                    data-bs-slide-to="0"
                    className="active"
                    aria-current="true"
                    aria-label="Slide 1"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExample"
                    data-bs-slide-to="1"
                    aria-label="Slide 2"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExample"
                    data-bs-slide-to="2"
                    aria-label="Slide 3"
                  ></button>
                </div>
              </div>
              <div className="mt-4 row justify-content-center">
                <button
                  className="btn btn-pink px-4 col-5"
                  onClick={handleNext}
                >
                  Next
                </button>
              </div>
              <div className="mt-3 mb-3 row justify-content-center">
                <button
                  className="btn btn-outline-pink col-5"
                  onClick={() => setModel(false)}
                >
                  Skip
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={() => setModel(true)}
        className="btn btn-primary"
      >
        Open Modal
      </button>
    </>
  );
};

export default ModalCarousel;
