import "./Footer.css";
import { Link } from 'react-router-dom';

export const Footer = () => {
    return (
        <footer className="luxury-footer">
            <div className="container">
                <div className="footer-grid">
                    <div className="footer-brand">
                        <div className="brand">
                            <span className="brand-logo">P</span>
                            <span className="brand-name">PICASSO <span className="text-gold">PERFORMANCE</span></span>
                        </div>
                        <p className="brand-tagline">
                            The elite HYROX training club in Torre Picasso, Madrid. Engineered for those who demand performance in every aspect of life.
                        </p>
                    </div>

                    <div className="footer-nav">
                        <h4 className="footer-title">THE CLUB</h4>
                        <Link to="/" className="footer-link">Experience</Link>
                        <Link to="/activities/feed" className="footer-link">HYROX Classes</Link>
                        <Link to="/calendar" className="footer-link">Schedule</Link>
                        <Link to="/contact" className="footer-link">Contact</Link>
                    </div>

                    <div className="footer-nav">
                        <h4 className="footer-title">LEGAL</h4>
                        <span className="footer-link">Privacy Policy</span>
                        <span className="footer-link">Terms of Service</span>
                        <span className="footer-link">Cookies</span>
                    </div>

                    <div className="footer-nav">
                        <h4 className="footer-title">FOLLOW</h4>
                        <a href="#" className="footer-link">Instagram</a>
                        <a href="#" className="footer-link">LinkedIn</a>
                        <a href="#" className="footer-link">Strava Elite</a>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p className="copyright">© 2026 PICASSO PERFORMANCE CLUB. AZCA DISTRICT, MADRID.</p>
                </div>
            </div>
        </footer>
    );
}