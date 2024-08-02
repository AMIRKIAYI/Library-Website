import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                
                <div className="footer-section linkss">
                    <h2>Quick Links</h2>
                    <ul>
                        <li><Link to="https://gau.ac.ke/">Main University Website</Link></li>
                        <li><a href="http://libsystem.gau.ac.ke/jspui">Institutional Repository</a></li>
                        <li><Link to="/quickreads">Short Loan Books</Link></li>
                        <li><Link to="/e-resources">Library Catalog</Link></li>
                    </ul>
                </div>
                <div className="footer-section contact">
                    <h2>Contact Us</h2>
                   <p className='footer' ><Link to="ask-librarian">Email: library@gau.ac.ke</Link></p>
                    <p>Phone: +254-773-827-763</p>
                    <p>Address: Garissa University, Garissa, Kenya</p>
                </div>
                <div className="footer-section social-media">
                    <h2>Social Media</h2>
                    <p>Follow us on social media and get our latest news & updates.</p>
                    <a href='https://x.com/home?lang=en'><i className="fa-brands fa-twitter"></i></a>
                    <a href='https://www.google.com/search?q=garissa+university+youtube+channel&oq=garissa+university+you&gs_lcrp=EgZjaHJvbWUqBwgCECEYoAEyBggAEEUYOTIHCAEQIRigATIHCAIQIRigATIHCAMQIRigAdIBCTE3MDQxajBqN6gCCLACAQ&sourceid=chrome&ie=UTF-8'><i className="fa-brands fa-youtube"></i></a>
                    <a href='https://www.facebook.com/'><i className="fa-brands fa-facebook"></i></a>
                    <a href='https://www.instagram.com/'><i className="fa-brands fa-instagram"></i></a>
                    <a href='https://www.linkedin.com/school/garissa-university/people/'><i className="fa-brands fa-linkedin"></i></a>
                   
                   
                </div>
            </div>
            <div className="footer-bottom">
                &copy; {new Date().getFullYear()} Garissa University Library | All rights reserved.
            </div>
        </footer>
    );
}
export default Footer
