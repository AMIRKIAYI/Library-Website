import React from 'react';
import "./Links.css";
import image1 from '../../src/assets/images/image1.png';
import image2 from '../../src/assets/images/image2.png';
import image3 from '../../src/assets/images/image3.png';
import image4 from '../../src/assets/images/image4.png';
import { Link } from 'react-router-dom';

function Links() {
    return (
        <div className="links">
            <h1>Useful Links</h1>
            <div className="images-container">
                <Link to="/repository">
                    <img src={image1} alt="Digital repository" />
                </Link>
                <Link to="/e-resources">
                    <img src={image2} alt="Electronic resources" />
                </Link>
                <Link to="..">
                    <img src={image3} alt="Library gallery" />
                </Link>
                <Link to="/quickreads">
                    <img src={image4} alt="New books" />
                </Link>
            </div>
        </div>
    );
}

export default Links;
