import React from 'react';
import "./MyLOFT.css";

function MyLOFT() {
  return (
    <div className='newContainer '>
      <h1>MyLOFT</h1>
      <p>Introducing Myloft – ‘My Library On Fingertips’</p>
      <div className='videoContainer'>
        <iframe
          width="660"
          height="415"
          src="https://www.youtube.com/embed/s2O62DyvdHM"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <p><strong>Open the MyLOFT app on your desktop:</strong> <a href='https://app.myloft.xyz'>https://app.myloft.xyz</a></p>

<p><strong>While using the MyLOFT on desktop, remember to download the browser extension:</strong></p>

<p><a href='https://chrome.google.com/webstore/search/myloft'>https://chrome.google.com/webstore/search/myloft (for Chrome Users)</a></p>

<p><a href='https://microsoftedge.microsoft.com/addons/detail/fpipfdkmjmeppohgfomgkaniobddgjjc'>https://microsoftedge.microsoft.com/addons/detail/fpipfdkmjmeppohgfomgkaniobddgjjc (for Microsoft Edge Users)</a></p>

<p><strong>Download the MyLOFT App for your mobile:</strong></p> 

<p><a href='https://play.google.com/store/apps/details?id=com.eclat.myloft&hl=en'>https://play.google.com/store/apps/details?id=com.eclat.myloft&hl=en (for Android users)</a></p>

<p><a href='https://apps.apple.com/in/app/myloft/id1247428589'>https://apps.apple.com/in/app/myloft/id1247428589 (for iOS users)</a></p>



<p><strong>How to log in:</strong></p>

<li>Open the mobile app/the WebApp.</li>
<li>A page will appear asking you to select your institute.</li>
<li>Click on the textbox on the screen and select your institute, i.e.Garissa University , Kenya by scrolling the list given or typing the name. Click on “Continue”.</li>
<li>A login page will appear with text boxes for email and password.</li> 
<li>Type in your registered email id and password for your MyLOFT account and click on “Sign in”.</li>
    </div>
  );
}

export default MyLOFT;
