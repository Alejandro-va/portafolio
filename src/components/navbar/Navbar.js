import React from 'react';
import './Navbar.css'

const Navbar = ({isScrolling}) => {

   //subo al inicio con hacer click
   const toTheTop = () => {
      window.scrollTo({top:0, left:0, behavior:"smooth"});
   }
   return (
      /* si es mayor que 20 su nombre es dinamico, sino sigue con su nombre estatico */
      <nav className={`navbar ${isScrolling > 20 ? "scrolling" : null}`}>
         <div className="navbar-logo" onClick={toTheTop} >JAHZ <i className="fas fa-angle-double-up"></i></div>

         <div className="sns-link">
          <a href="https://linkeding.com" target="_blank" rel="noreferrer">
            <i className="fab fa-linkedin linkedin"></i>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer">
            <i className="fab fa-twitter twitter"></i>
          </a>
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            <i className="fab fa-facebook facebook"></i>
          </a>
        </div>

      </nav>
   )
}

export default Navbar
