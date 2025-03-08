import { useState } from "react";
import logoChefify from "../assets/images/chefify.png";
import avatar from "../assets/images/avatar.png";
import check from "../assets/images/check.png";
import "./Component.scss";
import { Link } from "react-router-dom";
import AdminLogin from "../pages/AdminLogin";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("user") === "true"
  );
  const [showAdminLogin, setShowAdminLogin] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("user");
    window.location.reload();
  };

  return (
    <>
      <header className="bg-light shadow-sm">
        <div className="container py-3 d-flex align-items-center justify-content-between">
          <a href="/" className="navbar-brand">
            <img src={logoChefify} alt="logo" className="img-fluid" />
          </a>

          <div className="input-group w-25 align-items-center">
            <span className="input-group-text bg-white border-rounded-end-0">
              <i className="bi bi-search"></i>
            </span>
            <input
              type="text"
              className="form-control border-start-0"
              placeholder="What would you like to cook?"
            />
          </div>

          <nav className="d-none d-lg-flex">
            <ul className="nav">
              <li className="nav-item">
                <a href="#" className="nav-link nav-hover link-underline-light">
                  What to cook
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link nav-hover link-underline-light">
                  Recipes
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link nav-hover link-underline-light">
                  Ingredients
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="/contact"
                  className="nav-link nav-hover link-underline-light"
                >
                  Contact
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="/about"
                  className="nav-link nav-hover link-underline-light"
                >
                  About Us
                </a>
              </li>
            </ul>
          </nav>

          <div className="d-flex">
            {isLoggedIn ? (
              <>
                <Link
                  to="/your-recipe-box"
                  className="btn btn-outline-pink me-3 d-flex align-items-center"
                >
                  <span>
                    <img className=" img-thumbnail me-1" src={check} alt="" />
                  </span>
                  Your Recipe Box
                </Link>
                <div className="user-icon pointer-event mx-3">
                  <img src={avatar} alt="" data-bs-toggle="dropdown" />
                  <ul className="dropdown-menu p-1">
                    <li>
                      <button
                        className="btn btn-pink dropdown-item"
                        onClick={handleLogout}
                      >
                        Logout
                      </button>
                    </li>
                  </ul>
                </div>
                <div className="car">
                  <Link to="/shopping">
                    <i className="bi bi-cart fs-3"></i>
                    <span className="position-absolute top-5 translate-middle badge rounded-pill bg-danger mt-2 me-5">
                      {" "}
                      2{/* {totalItems} */}
                    </span>
                  </Link>
                </div>
              </>
            ) : (
              <>
                <button
                  className="btn btn-outline-pink me-3"
                  onClick={() => setShowAdminLogin(true)}
                >
                  Login
                </button>
                <button className="btn btn-pink">Subscribe</button>
              </>
            )}
          </div>
        </div>

        {/* mobile responsive navbar */}
        <div className="d-lg-none bg-white border-top">
          <div className="container py-2 d-flex justify-content-between align-items-center">
            <button
              className="btn btn-light"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <i className={menuOpen ? "bi bi-x" : "bi bi-list"}></i>
            </button>
            <button className="btn btn-light">
              <i className="bi bi-search"></i>
            </button>
          </div>
          {menuOpen && (
            <div className="container py-2">
              <ul className="nav flex-column">
                <li className="nav-item">
                  <a
                    href="#"
                    className="nav-link nav-hover link-underline-light"
                  >
                    What to cook
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="#"
                    className="nav-link nav-hover link-underline-light"
                  >
                    Recipes
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="#"
                    className="nav-link nav-hover link-underline-light"
                  >
                    Ingredients
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="/contact"
                    className="nav-link nav-hover link-underline-light"
                  >
                    Contact
                  </a>
                </li>
                <li className="nav-item">
                  <Link
                    to={"/about"}
                    className="nav-link nav-hover link-underline-light"
                  >
                    About Us
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      </header>
      <AdminLogin
        show={showAdminLogin}
        handleClose={() => setShowAdminLogin(false)}
      />
    </>
  );
};

export default Header;
