import './Component.scss'
import chefifyWhite from '../assets/images/chefifywhite.png'

const Footer = () => {
    return (
        <footer className="bg-dark text-white pt-5 pb-3">
            <div className="container">
                <div className="row">
                    {/* about us */}
                    <div className="col-md-6 mb-6">
                        <h5>About Us</h5>
                        <p>Welcome to our website, a wonderful place to explore and learn how to cook like a pro.</p>
                        <div className="input-group w-75">
                            <input 
                                type="email" 
                                className="form-control me-3"
                                placeholder="Enter your email"
                                aria-label="Enter your email"
                            />
                            <button className="btn btn-pink">Send</button>
                        </div>
                        {/* bottom */}
                        <div className='mt-5 mb-5 d-flex align-items-center'>
                            <p className='mb-0 me-3'>
                                <img src={chefifyWhite} alt="Chefify Logo" />
                            </p>
                            <small className='text-white me-4 fs-small'>&copy; 2023 Chefify Company</small>
                            <small className='text-white me-4 fs-small'>Terms of Service | Privacy Policy</small>
                        </div>
                    </div>
                    
                    <div className="col-md-4 ">
                        {/* learn more */}
                        <h5 >Learn More</h5>
                        <ul className='list-unstyled'>
                            <li className='mt-3'><a href="#" className='text-white text-decoration-none'>Our Cooks</a></li>
                            <li className='mt-3'><a href="#" className='text-white text-decoration-none'>See Our Features</a></li>
                            <li className='mt-3'><a href="#" className='text-white text-decoration-none'>FAQ</a></li>
                        </ul>
                        
                        {/* shop  */}
                        <h5 className='mt-5'>Shop</h5>
                        <ul className="list-unstyled">
                            <li className='mt-3'><a href="#" className="text-white text-decoration-none">Gift Subscription</a></li>
                            <li className='mt-3 mb-5'><a href="#" className="text-white text-decoration-none">Send Us Feedback</a></li>
                        </ul>
                    </div>

                    {/* recipes */}
                    <div className="col-md-2 mb-2">
                        <h5>Recipes</h5>
                        <ul className="list-unstyled">
                            <li className='mt-3'><a href="#" className="text-white text-decoration-none">What to Cook This Week</a></li>
                            <li className='mt-3'><a href="#" className="text-white text-decoration-none">Pasta</a></li>
                            <li className='mt-3'><a href="#" className="text-white text-decoration-none">Dinner</a></li>
                            <li className='mt-3'><a href="#" className="text-white text-decoration-none">Healthy</a></li>
                            <li className='mt-3'><a href="#" className="text-white text-decoration-none">Vegetarian</a></li>
                            <li className='mt-3'><a href="#" className="text-white text-decoration-none">Vegan</a></li>
                            <li className='mt-3'><a href="#" className="text-white text-decoration-none">Christmas</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;