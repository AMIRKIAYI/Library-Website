import { Link } from 'react-router-dom';
import './Repository.css';
import thumb from '../assets/images/thumb.png';

function Repository() {
  return (
    <div className='repo'>
      <div className='image-container'>
        <img src='https://media.istockphoto.com/id/578578380/photo/server-repository-control-terminal-supercomputer-cloud-storage-abstraction-picture-technologies.jpg?b=1&s=612x612&w=0&k=20&c=KlkFeFamCBSYQKq25lv2HD5sYiMcG8jVVRIfVWx_xl0=' alt='Books' />
        <div className='overlay-text'>
          <h1>Garissa University Repository</h1>
          <p>Garissa University Institutional Repository is a digital archive that collects, preserves, and disseminates scholarly outputs of Garissa University.</p>
        </div>
      </div>
      <div className='maininput'></div>
      <div className="input-group mb-3">
        <input type="text" className="form-control" placeholder="Search the repository here ..." aria-label="Recipient's username" aria-describedby="basic-addon2" />
        <div className="input-group-append">
          <span className="input-group-text" id="basic-addon2">
            <i className="bi bi-search"></i>
            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
            </svg>
          </span>
        </div>
      </div>

      <div className='comm'>
        <h1>Repository Communities</h1>
        <p>Select a community to browse its collections.</p>
        <div className='paragraph'>
          <Link to=".."><p>Books, Book Reviews and Book Chapters</p></Link>
          <Link to=".."><p>Extension/Community activities</p></Link>
          <Link to=".."><p>Journal Articles</p></Link>
          <Link to=".."><p>Knowledge Management Repository</p></Link>
          <Link to=".."><p>Open Access Articles</p></Link>
          <Link to=".."><p>Past Exam Papers</p></Link>
          <Link to=".."><p>PhD. Theses and Dissertations</p></Link>
          <Link to=".."><p>Speeches</p></Link>
          <Link to=".."><p>Staff Profiles</p></Link>
          <Link to=".."><p>Training/Workshops/Seminars/Conferences</p></Link>
          <Link to=".."><p>Undergraduate Projects</p></Link>
          <Link to=".."><p>Garissa University Publications</p></Link>
        </div>

        <h2>Recent Submissions</h2>
        <div className='recent-submissions'>
          <div className='submission'>
            <Link to="..">
              <img src={thumb} alt="no thumbnail" className='thumb-img'/>
            </Link>
            <div className='submission-text'>
              <p><Link to='.'> BEYOND THE STETHOSCOPE: NAVIGATING KENYA’S HEALHCARE CRISIS </Link><br></br>
                <i>Omondi, Alamyn (UoEm, 2024-07-10)</i><br></br>
                Our healthcare system grapples with profound inequities and systemic failures. This might be news to those exposed to high quality medical care, but to others, this crumbling system might be the last straw to clutch on. ...
              </p>
            </div>
          </div>
          <div className='submission'>
            <Link to="..">
              <img src={thumb} alt="no thumbnail" className='thumb-img'/>
            </Link>
            <div className='submission-text'>
              <p><Link to='.'>HEALTHCARE ACCESS AND EQUITY: ADDRESSING DISPARITIES IN KENYA </Link><br></br>
                <i>Ndingi, Kennedy (UoEm, 2024-07-10)</i><br></br>
                This paper embarks on exploring the inequity in access to healthcare in Kenya. This is despite the efforts by the government to ensure that all citizens have equal access to health. This paper suggests that the tremendous ...
              </p>
            </div>
        </div>
        <div className='submission'>
            <Link to="..">
              <img src={thumb} alt="no thumbnail" className='thumb-img'/>
            </Link>
            <div className='submission-text'>
              <p><Link to='.'>BRIDGING THE HEALTH DIVIDE: ACHIEVING EQUITY AND ACCESS IN KENYA'S HEALTHCARE SYSTEM ﻿ </Link><br></br>
                <i>KOECH, GIDEON KIPCHEU (UoEm, 2024-07-10)</i><br></br>
                This paper provides a detailed analysis of healthcare access and equity in Kenya by providing historical context, current status, and critical disparities experienced in health services. It looks at the urban-rural divide, ...
              </p>
            </div>
            
          </div>
      </div>
      </div>
    </div>
  );
}

export default Repository;
