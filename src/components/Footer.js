import "./Footer.css"
import { Button } from "./Button"
import { Link } from "react-router-dom"

function Footer() {
  return (
    <div className="footer-container">
        <section className="footer-subscription">
            <p className="footer-heading">
                Join our newsletter to receive best booking deals
            </p>
            <p className="footer-text">
                You can unsubscribe at any time.
            </p>
            <div className="input-areas">
                <form action="">
                    <input type="email" name='email' placeholder="Your Email" className="footer-input" />
                    <Button buttonStyle="btn--outline">Subscribe</Button>
                </form>
            </div>
        </section>
        <div className="footer-links">
            <div className="footer-wrapper">
                <div className="footer-items">
                    <h2>About Us</h2>
                    <Link to="/sign-up">How it works</Link>
                    <Link to="/">Testimonials</Link>
                    <Link to="/">Careers</Link>
                    <Link to="/">Investors</Link>
                    <Link to="/">Terms of Service</Link>
                </div>
                <div className="footer-items">
                    <h2>Contact Us</h2>
                    <Link to='/'>Contact</Link>
                    <Link to='/'>Support</Link>
                    <Link to='/'>Destinations</Link>
                    <Link to='/'>Sponsorships</Link>
                </div>
            </div>
            <div className="footer-wrapper">
                <div className="footer-items">
                    <h2>Social Media</h2>
                    <Link to='/'>Instagram</Link>
                    <Link to='/'>Facebook</Link>
                    <Link to='/'>Youtube</Link>
                    <Link to='/'>Twitter</Link>
                </div>
            </div>
        </div>
        <section className="social-media">
            <div className="social-wrapper">
                <div className="footer-logo">
                    <Link to='/' className="social-logo">
                        <i className="fa-solid fa-hotel" /> Sandbox 
                    </Link>
                </div>
                <small className="website-rights">Sandbox © 2022</small>
                <div className="social-icons">
                    <Link className="social-link facebook"
                    to="/"
                    target='_blank'
                    aria-label="Facebook"
                    >
                        <i className="fab fa-facebook-f" />
                    </Link>
                    <Link className="social-link instagram"
                    to="/"
                    target='_blank'
                    aria-label="Instagram"
                    >
                        <i className="fab fa-instagram" />
                    </Link>
                    <Link className="social-link twitter"
                    to="/"
                    target='_blank'
                    aria-label="Twitter"
                    >
                        <i className="fab fa-twitter" />
                    </Link>
                    <Link className="social-link linkedin"
                    to="/"
                    target='_blank'
                    aria-label="Linkedin"
                    >
                        <i className="fab fa-linkedin" />
                    </Link>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Footer