import React, { useEffect } from 'react';
import "./Div1.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

function Div1() {
    useEffect(() => {
        const carousel = document.querySelector('#carouselExampleControls');
        const carouselInstance = new window.bootstrap.Carousel(carousel);

        // Example: Slide to the next item every 3 seconds
        const intervalId = setInterval(() => {
            carouselInstance.next();
        }, 7000);

        return () => {
            clearInterval(intervalId);
        };
    }, []);

    return (
        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img className="d-block w-100 zoom" src="https://gau.ac.ke/wp-content/uploads/2023/08/KYA_8992.jpg" alt="First slide" />
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100 zoom" src="https://gau.ac.ke/wp-content/uploads/2023/08/KYA_8989.jpg" alt="Second slide" />
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100 zoom" src="https://gau.ac.ke/wp-content/uploads/2023/09/KYA_9027-1-scaled.jpg" alt="Third slide" />
                </div>
                <div className="content arbutus-regular">
                    <h1 style={{ color: "#008000" }}><strong>Your gateway to knowledge and learning</strong></h1>
                    <p className="roboto-black">Step into a world where information meets inspiration. Our library is more than just a collection of books; it's a vibrant hub of intellectual engagement and discovery. Whether you're delving into academic research, exploring new ideas, or seeking a quiet place to study, Garissa University Library provides the resources and environment to support your academic journey.</p>
                </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>
    );
}

export default Div1;
