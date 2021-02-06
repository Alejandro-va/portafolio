import React from 'react';
import './Contador.css';


const Contador = () => {
  const styles = {
        border: '0 solid', 
        display: 'inline',
        height: 35,
      
  }
  return (


  <div className="contador">
    <center>
     <h1>Contador de visitas</h1>
        <img 
        className="vistas"
        style={styles} alt="contador de visitas" 
        src="http://www.websmultimedia.com/contador-de-visitas.php?id=289374"/>
        </center>
      
    </div>
  )
}

export default Contador


/*   < center >

  <img style="border: 0px solid; display: inline;" alt="contador de visitas" src="http://www.websmultimedia.com/contador-de-visitas.php?id=289374" />
        </center > */