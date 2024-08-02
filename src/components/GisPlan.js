import React from 'react'
import image12 from '../assets/images/image12.png';
import "./GisPlan.css"

function GisPlan() {
  return (
    <div className='plan'>
        <h1>The university’s plan of establishing a Geographical Information Systems</h1>
        <img src={image12} alt="Library Renovation" />
        
            <p>The university's plan of establishing a Geographical Information Systems (GIS) Lab was bolstered by Mercy Corps. This initiative aims to enhance the university's research capabilities and provide students with hands-on experience in GIS technology. With the support from Mercy Corps, the lab will be equipped with state-of-the-art software and hardware, enabling students and faculty to conduct advanced spatial analysis and geospatial data management. The partnership between the university and Mercy Corps underscores the importance of integrating cutting-edge technology into academic programs to foster innovation and practical skills. Additionally, the GIS Lab will serve as a hub for interdisciplinary research, promoting collaboration among departments such as environmental science, urban planning, and computer science. This initiative not only strengthens the university's infrastructure but also opens up new opportunities for community engagement and real-world problem solving. By leveraging GIS technology, the university and Mercy Corps aim to address critical issues such as disaster response, urban development, and environmental conservation, ultimately contributing to sustainable development goals.</p>
             
          </div>
  )
}

export default GisPlan
