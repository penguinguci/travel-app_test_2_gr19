import { AiTwotoneSave } from "react-icons/ai";
import product from "../assets/images/product.png";

function CartProduct() {
  return (
    <div className="col-md-3 col-sm-6 col-12">
      <div className="card">
        <img src={product} alt="" className="img-fluid" />
        <div className="p-3 mt-2">
          <div className="d-flex justify-content-between">
            <h5>Lotus delight salad</h5>
            <AiTwotoneSave style={{ fontSize: "30px" }} />
          </div>
          <span
            style={{
              background: "#fef0f5",
              padding: "px 5px",
              borderRadius: "10px",
              textAlign: "center",
            }}
          >
            21 minutes
          </span>
        </div>
      </div>
    </div>
  );
}

export default CartProduct;
