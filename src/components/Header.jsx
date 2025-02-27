import { useState } from 'react';
import logoChefify from '../assets/images/chefify.png'
import './Component.scss'

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className='bg-light shadow-sm'> 
            <div className="container py-3 d-flex align-items-center justify-content-between">
                <a href="/" className='navbar-brand'>
                    <img src={logoChefify} alt="logo" className='img-fluid'/>
                </a>

                <div className="input-group w-25 align-items-center">
                    <span className='input-group-text bg-white border-rounded-end-0'>
                        <i className='bi bi-search'></i>
                    </span>
                    <input 
                        type="text"
                        className='form-control border-start-0'
                        placeholder='What would you like to cook?' 
                    /> 
                </div>

                <nav className='d-none d-lg-flex'>
                    <ul className="nav">
                        <li className="nav-item">
                            <a href="#" className="nav-link nav-hover link-underline-light">What to cook</a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link nav-hover link-underline-light">Recipes</a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link nav-hover link-underline-light">Ingredients</a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link nav-hover link-underline-light">Occasions</a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link nav-hover link-underline-light">About Us</a>
                        </li>
                    </ul>
                </nav>

                <div className='d-flex'>
                    <button className="btn btn-outline-pink me-3">Login</button>
                    <button className="btn btn-pink">Subscribe</button>
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
                                <a href="#" className="nav-link nav-hover link-underline-light">What to cook</a>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link nav-hover link-underline-light">Recipes</a>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link nav-hover link-underline-light">Ingredients</a>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link nav-hover link-underline-light">Occasions</a>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link nav-hover link-underline-light">About Us</a>
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </header>
    );
}

export default Header;