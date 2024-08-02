import React from 'react'
import "./NewsEvents.css"
import { useNavigate } from "react-router-dom";
import image12 from '../assets/images/image12.png';
import image13 from '../assets/images/image13.png';
import image14 from '../assets/images/image14.png';
import image15 from '../assets/images/image15.png';

function NewsEvents() {

  const navigate = useNavigate();

  const handleNavigation = (path) => {
      navigate(path);
  };


  return (
    <div className='main'>
    
        
        <div className='textOverlay'>
          <h1>News & Events</h1>
        </div>
        <div className='container12'>
        <img src={image12} alt="Library Renovation" />
        <h1>The university’s plan of establishing a Geographical Information Systems</h1>
            <p>The university,s plan of establishing a Geographical Information Systems (GIS) Lab was bolstered by Mercy Corps. …</p>
             <button className='toBtn'onClick={() => handleNavigation('/gisplan')}>Read More<i class="bi bi-arrow-right-short"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-arrow-right-short" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"/>
          </svg></i></button>
          </div>
          <div className='container13'>
          <img src={image13} alt="peace and security" />
          <h1>Garissa STEM Outreach and Mentorship Program</h1>
            <p>On 10th Feb, 2024, Garissa University team, led by Dr. Iddi Juma, Dr. Mohamed Hussein, Dr. Nalianya Sitati and Cs. Fowzan Nunow attended the 2024 Garissa STEM Outreach and Mentorship Program at Garissa High School organized by Young Scientists Kenya. The event …</p>
            <button className='toBtn'onClick={() => handleNavigation('/stemplan')}>Read More<i class="bi bi-arrow-right-short"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-arrow-right-short" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"/>
          </svg></i></button>
          </div>
          <div className='container14'>
          <img src={image14} alt=" Renovation" />
          <h1>Enhancing University Education In The North Eastern Region</h1>
            <p>We are delighted to share the outcomes of a highly productive Leaders’ Forum convened by Garissa University, bringing together the Members of Parliament, Principal Secretaries, and the Council and Management of the University. The forum aimed to explore strategies for promoting, enhancing, …</p>
            <button className='toBtn'onClick={() => handleNavigation('/northedu')}>Read More<i class="bi bi-arrow-right-short"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-arrow-right-short" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"/>
          </svg></i></button>
          </div>
          <div className='container15'>
            <img src={image15} alt="welcoming" />
            <h1>Garissa Career Guidance Day: Aligning Careers with Market Needs!</h1>
            <p>We are thrilled to share the success of Career Guidance Day hosted by Garissa University, generously sponsored by the esteemed MP for Garissa Township Constituency, Hon Major Rtd Dekow Barrow. The event provided invaluable insights to the 2023 form four graduates, embarking …</p>
            <button className='toBtn'onClick={() => handleNavigation('/guidanceday')}>Read More<i class="bi bi-arrow-right-short"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-arrow-right-short" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"/>
          </svg></i></button>


          </div>
   
    </div>
  )
}

export default NewsEvents
