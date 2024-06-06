import Navbar from './components/navbar'
import VideoC from './components/VideoSfondo'
import HomeCard from './components/Home_Card'
import Seconda from './components/seconda'
import Terzo from './components/terzo'
import { useEffect, useState } from "react";
import Footer_Home from './components/Footer_Home'

function App() {
  const topFunction = () => {
    window.scrollTo(0, 0);
  
  }

  const [prodotti, setProdotti] = useState(false);

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
          <div id='spazio'></div>
        </div>
        <div id="container_card2">
          <Seconda  />
        </div>
        <div id='spazio'></div>
        <div id='container_card2'>
        <Terzo />
        </div>
        <div id='spazio'></div>
      </div>

      {/*{prodotti ? prodotti : 'There is no product data available'}*/}

    <footer>
        <Footer_Home />
    </footer>
        
    </>
  );
}

export default App;
