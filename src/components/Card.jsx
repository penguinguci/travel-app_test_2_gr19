import { AiTwotoneSave } from "react-icons/ai";
import product from "../assets/images/product.png";

function Card() {
  return (
    <div className="col-md-6 col-1 mt-4">
      <div className="card">
        <div className="row g-3 align-items-center p-3">
          <div className="col-md-5">
            <img
              src={product}
              alt="Stuffed sticky rice ball"
              className="img-fluid rounded-3"
              style={{ objectFit: "cover", width: "100%" }}
            />
          </div>

          <div className="col-md-7">
            <div className="d-flex justify-content-between align-items-start">
              <h5 className="fw-bold">Stuffed sticky rice ball</h5>
              <AiTwotoneSave className="fs-4 text-danger" />
            </div>

            <span className="text-muted small">34 minutes</span>

            <div className="d-flex align-items-center my-2">
              <img
                src={product}
                alt="Jennifer King"
                className="rounded-circle me-2"
                style={{
                  width: "35px",
                  height: "35px",
                  objectFit: "cover",
                }}
              />
              <span className="fw-semibold">Jennifer King</span>
            </div>

            <p className="text-muted small mb-0">
              Stuffed sticky rice balls: A delightful Asian treat with chewy,
              glutinous rice and a flavorful surprise filling...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
