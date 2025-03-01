import { Link } from "react-router-dom";


function CartProduct({ recipe }) {
  return (

    <Link to={"/detail/"+recipe.id} className="col-md-3 col-sm-6 col-12 mb-4 text-decoration-none" onClick={() => window.scrollTo(0, 0)}>
        <div className="card shadow-sm h-100 d-flex flex-column justify-content-between">
          <img
              src={`${recipe.image}`}
              alt={recipe.title}
              className="card-img-top img-fluid"
              style={{ minHeight: "200px", maxHeight: "200px", width: "100%", objectFit: "cover" }}
            />
          <div className="p-3 d-flex flex-column flex-grow-1">
            <div
              className="d-flex justify-content-between"
              style={{ marginBottom: "12px" }}
            >
              <h5 className="mb-0 col-10">{recipe.title}</h5>
              <div
                className="col-2 btn-outline-pink border-pink rounded-circle d-flex align-items-center justify-content-center"
                style={{ width: "36px", height: "36px" }}
              >
                <i className="bi bi-bookmark" style={{WebkitTextStrokeWidth: "thin"}}></i>
              </div>
            </div>

            <span
              className="text-pink mt-auto"
              style={{
                background: "#fef0f5",
                padding: "2px 10px",
                borderRadius: "10px",
                display: "inline-block",
                width: "fit-content",
              }}
            >
              {recipe.time}
            </span>
          </div>
        </div>
    </Link>
  );
}

export default CartProduct;
