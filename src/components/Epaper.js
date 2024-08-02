import React from 'react'
import "./Epaper.css"
import daily from '../../src/assets/images/daily.png'
import standard from '../../src/assets/images/standard.png'
import { Link } from 'react-router-dom'

function Epaper() {
  return (
    <div className='e-paper'>
      <h1>E-PAPER DAILIES</h1>
      <p>To access the E-Paper platform click on the newspaper logo.</p>
      <div className="images-container">
                
                <Link to="https://epaper.nation.africa/"><img src={daily} alt="Digital repository" /></Link>
  
                
                <Link to="https://epaper.standardmedia.co.ke/"> <img src={standard} alt="Electronic resources" /></Link>
              
                </div>
    </div>
  )
}

export default Epaper
