import "./Nav2.css";
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Library7 from '../../src/assets/images/Library7.png';

function Nav2() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="logo">
                    <Link to="/">
                        <img src={Library7} alt="logo" className="logo-image" />
                    </Link>
                </div>
                <button className="menu-toggle" onClick={toggleMenu}>
                    ☰
                </button>
                <div className={`navbar-menu ${isOpen ? 'open' : ''}`}>
                    <Link to="/"><strong>Home</strong></Link>
                    <div className="dropdown">
                        <button className="dropbtn"><strong>About Us</strong></button>
                        <div className="dropdown-content">
                            <Link to="/vision-mission">Vision, Mission & Objectives</Link>
                            <Link to="/library-rules">Library Rules and Regulations</Link>
                            <Link to="/contact">Our Contact</Link>
                        </div>
                    </div>
                    <Link to="/news-events"><strong>News & Events</strong></Link>
                    <Link to="/information-literacy"><strong>Information Literacy</strong></Link>
                    <div className="dropdown">
                        <button className="dropbtn"><strong>Library Catalogue</strong></button>
                        <div className="dropdown-content">
                            <Link to="/e-resources">E-Resources</Link>
                            <Link to="/myloft">MyLOFT</Link>
                            <Link to="/quickreads">Quick Reads</Link>
                        </div>
                    </div>
                    <Link to="/ask-librarian"><strong>Ask Librarian</strong></Link>
                    <Link to="/faqs"><strong>FAQs</strong></Link>
                   
                </div>
            </div>
        </nav>
    );
}

export default Nav2;
