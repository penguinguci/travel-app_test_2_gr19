import Header from "../components/Header";
import Footer from "../components/Footer";

const Contact = () => {
  return (
    <>
      <Header />
      <div className="container mb-5" style={{ marginTop: '80px' }}>
        <nav className="d-flex align-items-center mb-4">
            <a href="/" className="text-decoration-none text-dark fw-bold">Home</a>
            <i className="bi bi-chevron-right mx-2" style={{fontSize: "13px"}}></i>
            <a href="/contact" className="text-pink fw-bold text-decoration-none">Contact</a>
        </nav>
      
        <div className="text-center mb-4">
          <h1 className="display-4 fw-bold">Contact Us</h1>
          <p className="lead text-muted">We'd love to hear from you! Reach out to us with your questions or feedback.</p>
        </div>

        <div className="row mb-5">
          <div className="col-md-4 text-center">
            <i className="bi bi-telephone display-1 text-primary mb-3"></i>
            <h5>Phone</h5>
            <p className="text-muted">+84 915 020 803</p>
          </div>
          <div className="col-md-4 text-center">
            <i className="bi bi-envelope display-1 text-danger mb-3"></i>
            <h5>Email</h5>
            <p className="text-muted">support@cheffify.com</p>
          </div>
          <div className="col-md-4 text-center">
            <i className="bi bi-geo-alt display-1 text-success mb-3"></i>
            <h5>Address</h5>
            <p className="text-muted">Nguyen Van Ban, Phuong 4, Go Vap, HCM</p>
          </div>
        </div>

        <div className="row">
          <div className="col-md-8 offset-md-2">
            <h2 className="text-center mb-4">Send Us a Message</h2>
            <form>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Your Name</label>
                <input type="text" id="name" className="form-control" placeholder="Enter your name" />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Your Email</label>
                <input type="email" id="email" className="form-control" placeholder="Enter your email" />
              </div>
              <div className="mb-3">
                <label htmlFor="subject" className="form-label">Subject</label>
                <input type="text" id="subject" className="form-control" placeholder="Enter the subject" />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">Your Message</label>
                <textarea id="message" rows="5" className="form-control" placeholder="Write your message here"></textarea>
              </div>
              <button type="submit" className="btn btn-pink w-100">Send Message</button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
