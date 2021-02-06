import React, { useState, useEffect} from 'react';
import './App.css';

//components
import Cover from './components/cover/Cover';
import Navbar from './components/navbar/Navbar';
import About from './components/about/About';
import Slider from './components/slider/Slider';
import Info from './components/info/Info';
import Footer from './components/footer/Footer';

function App() {
   const [scrollHeight, setScrollHeight] = useState(0);


   const handleScroll = () => {
      const position = window.pageYOffset;//capturo el evento scrool Y de windows

      setScrollHeight(position); //lo cargo en  mi estado
   }
   useEffect(()=>{
      window.addEventListener("scroll", handleScroll);//escucho la posicion en la q se encuentra el scroll
   },[scrollHeight]); //lop actualizo con cada movimiento

  return (
    <div className="App">
       <Navbar isScrolling = {scrollHeight}/>
       <Cover/>
       <About/>
       <Slider/>
       <Info/>
       <Footer/>
    </div>
  );
}

export default App;
