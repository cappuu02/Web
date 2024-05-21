import Navbar from './components/navbar'
import VideoC from './components/VideoSfondo'
import HomeCard from './components/Home_Card'
import Seconda from './components/seconda'
import image1 from './Images/obbiettivi.webp'
import image2 from './Images/canong.png'
import { useEffect, useState } from "react";


function App() {
  const topFunction = () => {
    window.scrollTo(0, 0);
  
  }

  const [prodotti, setProdotti] = useState(false);

  function getProdotti() {
    fetch('http://localhost:3001')
      .then(response => {
        return response.text();
      })
      .then(data => {
        setProdotti(data);
      });
  }

  useEffect(() => {
    getProdotti();
  }, []);







  
  return (
    <>

    
      <div className='w-auto pt-0'>
        <Navbar />
      </div>
      
      <div className="container-fluid p-0 m-0">
        
        <VideoC />
       
      </div>
      
     

        {/* L'icona stessa funge da bottone */}
      <div onClick={topFunction} id="Scrollup"><i className="bi bi-arrow-up-square"></i></div> 

      <div id="sfondoparte2" classname="m-0 p-0">
        <div id="container_card" className='card-container'>
          <HomeCard  />
          <div id='spazio'></div>
        </div>
        <div id="container_card2" className='card-container'>
          <Seconda  />
          <div id='spazio'></div>
        </div>

      </div>

      {prodotti ? prodotti : 'There is no product data available'}

      
        
    </>
  );
}

export default App;
