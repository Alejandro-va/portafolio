import React from 'react';
import './About.css';
import  Foto from '../../media/visita.jpg'
import Contador from '../contador/Contador';

const About = () => {
   return (
      <div className="about-container">
         <div className="about-desc">
            <h3>Déjame decirte algo sobre mi</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit nemo eum explicabo doloribus neque nostrum deleniti? Culpa alias non dolore at provident consequuntur rem soluta tenetur. Consequuntur id ullam adipisci.</p>
         </div>
         <hr />
         <div className="about-img">
      
            <img  className="foto" src={Foto} alt="about" />
           
           <Contador/>

           
          
         

          
          

         </div>
         
      </div>
   )
}

export default About
