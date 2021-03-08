import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-info">
        <h1>JAHZ</h1>
        <p>Buenos Aires, Argentina</p>
      </div>
      <div className="footer-contact">
        <h3>Contáctame</h3>
        <p>y pongamos manos a la obra</p>
      </div>
      <div className="footer-sns">
        <div className="desing-by">Desing by ME</div>
        <div className="sns-links">
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
      </div>
    </footer>
  );
};

export default Footer;

//https://cdnjs.com/libraries/font-awesome
