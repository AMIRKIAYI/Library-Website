import React from 'react';
import './Events.css';
import { useNavigate } from "react-router-dom";
import image8 from '../assets/images/image8.png';
import image9 from '../assets/images/image9.png';
import image11 from '../assets/images/image11.png';

function Events(){

  const navigate = useNavigate();

  const handleNavigation = (path) => {
      navigate(path);
  };

  return (
    <section className="news-events">
        <h1>News & Events</h1>
      <div className="container">
        <div className="news-item">
          <img src={image8} alt="New Digital Archives" />
          <div className="news-content">
            <h3>New Digital Archives Launched!</h3>
            <span className="date">July 5, 2024</span>
            <p>We are excited to announce the launch of our new digital archives. Explore a vast collection of historical documents, photos, and more, now available online for all our members.</p>
          </div>
        </div>
        <div className="news-item">
          <img src={image9} alt="Library Renovation" />
          <div className="news-content">
            <h3>Library Renovation Completed</h3>
            <span className="date">June 25, 2024</span>
            <p>Our library has undergone significant renovations to provide a more comfortable and modern space for our patrons. Visit us to see the new study areas, reading rooms, and improved facilities.</p>
          </div>
        </div>
        <div className="news-item">
          <img src={image11} alt="Author Talk" />
          <div className="news-content">
            <h3>Upcoming Author Talk: Jane Doe</h3>
            <span className="date">June 15, 2024</span>
            <p>Join us for an engaging talk with bestselling author Jane Doe. She will discuss her latest book and answer your questions.</p>
          </div>
        </div>
      </div>
      <button type="button" onClick={() => handleNavigation('/news-events')} className="btn btn-primary">View All Posts</button>
      
    </section>
  );
};

export default Events;
