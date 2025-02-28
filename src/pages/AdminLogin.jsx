import "./AdminLogin.scss";
import egg from "../assets/images/egg.jpg";
import { useState } from "react";

const AdminLogin = ({ show, handleClose }) => {
    const [error, setError] = useState("");
    const [email, setEmail] = useState("");
    if (!show) {
      return null;
    }

    const validEmail = (email) => {
      const re = /^\w+@(gmail\.com|yahoo\.com)$/;
      return re.test(email);
    };

    const handleLogin = () => {
      if (!validEmail(email)) {
        setError("*Please enter a valid email address.");
        return;
      }
      localStorage.setItem("user", "true");
      handleClose();
      window.location.reload();
    };
    return (
      <>
        <div
          className="modal fade show"
          style={{ display: "block" }}
          tabIndex="-1"
          role="dialog"
        >
          <div
            className="modal-dialog modal-dialog-centered modal-lg"
            role="document"
          >
            <div className="mdal-content modal-content">
              <div className="modal-body d-flex p-0">
                {/* img (left) */}
                <div className="modal-left d-none d-md-block">
                  <img src={egg} alt="Food" className="img-fluid" />
                  <p className="overlay-text">
                    "Embrace the art of cooking, where flavors come alive!"
                  </p>
                </div>

                {/* form login (right) */}
                <div className="modal-right p-4">
                  <button
                    type="button"
                    className="btn-cls close-btn"
                    onClick={handleClose}
                  >
                    &times;
                  </button>
                  <h4 className="login-text">Login</h4>
                  <p className="text-mail">Enter your email to log in.</p>
                  <input
                    type="email"
                    className="input-mail form-control mb-3"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      setError("");
                    }}
                  />
                  {error && <small className="text-danger">{error}</small>}
                  <button
                    className="btn btn-pink btn-block"
                    onClick={handleLogin}
                  >
                    Continue
                  </button>

                  <div className="text-or text-center my-3 d-flex text-center align-items-center">
                    <hr className="" />
                    <span className="fw-bold">OR</span>
                    <hr />
                  </div>

                  <p className="srv text-center ">
                    By continuing, you agree to the updated <b>Terms of Sale</b>,{" "}
                    <b>Terms of Service</b>, and <b>Privacy Policy</b>.
                  </p>

                  <button className="btn-google ">
                    <i className=" bi bi-google me-2"></i> Continue with Google
                  </button>
                  <button className="btn-fb">
                    <i className="bi bi-facebook me-2"></i> Continue with Facebook
                  </button>
                  <button className="apple-fb">
                    <i className="bi bi-apple me-2"></i> Continue with Apple
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="modal-backdrop fade show"></div>
      </>
    );
};

export default AdminLogin;
