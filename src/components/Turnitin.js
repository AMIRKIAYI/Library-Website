import React from 'react';
import './OpenHours.css';
import turnitin from '../assets/images/turnitin.png';  // Adjust the path based on your project structure

function Turnitin() {
  return (
    <div className='turnitin'>
      
      <div className='title1'>
        <h1>Plagiarism Check Tool</h1>
        <div className='logo-container'>
        <img src={turnitin} alt="Logo" className='logo' />
      </div>
        <p>Turnitin is a plagiarism detection tool that helps you check for plagiarism in your work
          and provides you with a similarity report.</p>
        <p>It uses advanced algorithms to compare your work with a vast database of academic
            papers and websites to identify any instances of plagiarism.</p>
            <p>Kindly send your Document for Plagiarism check :</p>
            
            <ol>
                <li><strong>Postgraduates:</strong> <a href='https://www.turnitin.com/login_page.asp?lang=und&err=3304'>postgraduatesturnitin@gau.ac.ke</a></li>

                <li><strong>Undergraduates:</strong> <a href='https://www.turnitin.com/login_page.asp?lang=und&err=3304'>undergraduateturnitin@gau.ac.ke</a></li>

                <li><strong>Staff:</strong> <a href='https://www.turnitin.com/login_page.asp?lang=und&err=3304'>Staffturnitin@gau.ac.ke</a></li>
                
            </ol>
            <div>
                <a href="https://www.turnitin.com/" target="_blank" rel="noopener noreferrer">Learn More</a>
            </div>
      </div>
    </div>
  );
}

export default Turnitin;
