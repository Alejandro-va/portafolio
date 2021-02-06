import React from 'react';
import Slides from './Slides';
import './Slider.css';

import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

const Slider = () => {
   return (
      <div className="carousel-container">
         <div className="carousel-title">
            <h2>Mis proyectos</h2>
         </div>

         <Carousel
         arrows
         slidesPerPage={3}
         infinite
         animationSpeed={200}
         centered
         offset={50}
         itemWidth={400}
         slides={Slides}
         breakpoints={{
            960:{
               slidesPerPage: 1,
               arrows: false,
               itemWidth: 250

            }
         }}
         />
         
      </div>
   )
}

export default Slider
//npm install @brainhubeu/react-carousel
/*
pag doc:
https://www.npmjs.com/package/@brainhubeu/react-carousel
*/