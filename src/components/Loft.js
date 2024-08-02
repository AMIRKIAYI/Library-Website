import React from 'react';
import './Loft.css';
import image5 from '../../src/assets/images/image5.png'; // Replace with your actual image path
import image6 from '../../src/assets/images/image6.png';
import image7 from '../../src/assets/images/image7.png';

function Loft() {
    return (
        <div className="all">
            <div className="myLofta">
                <img src={image5} alt="My Loft" />
            </div>
            <div className="myLoftb">
                <h1>MyLOFT</h1>
                <p>Introducing Myloft – ‘My Library On Fingertips’</p>
                <ul>
                    <li>Open the mobile app/the WebApp.</li>
                    <li>A page will appear asking you to select your institute.</li>
                    <li>Click on the textbox on the screen and select your institute, i.e. Garissa University, Kenya by scrolling the list given or typing the name. Click on “Continue”.</li>
                    <li>A login page will appear with text boxes for email and password.</li>
                    <li>Type in your registered email id and password for your MyLOFT account and click on “Sign in”.</li>
                </ul>
                <div className="store">
                    <a href='https://apps.apple.com/in/app/myloft/id1247428589'><img src={image6} alt="App store" /></a>
                    <a href='https://play.google.com/store/apps/details?id=com.eclat.myloft&hl=en'><img src={image7} alt="Play store" /></a>
                </div>
            </div>
        </div>
    );
}

export default Loft;
