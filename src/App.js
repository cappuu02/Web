import Navbar from './components/navbar'
import VideoC from './components/VideoSfondo'
import HomeCard from './components/Home_Card'
import Seconda from './components/seconda'
import Terzo from './components/terzo'
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
        <div class="footer-container">
            <div class="footer-section">
                <h2>Servizi di assistenza</h2>
                <ul>
                    <li><a href="#">Contattaci</a></li>
                    <li><a href="#">Informazioni di consegna</a></li>
                    <li><a href="#">Resi</a></li>
                    <li><a href="#">Domande frequenti</a></li>
                    <li><a href="#">Domande frequenti Repeat & Save</a></li>
                </ul>
            </div>
            <div class="footer-section">
                <h2>Informazioni</h2>
                <ul>
                    <li><a href="#">Perché acquistare da noi?</a></li>
                    <li><a href="#">Garanzia del prodotto</a></li>
                    <li><a href="#">Acquistare online in modo sicuro</a></li>
                    <li><a href="#">Termini e condizioni iniziative promozionali</a></li>
                    <li><a href="#">Termini e condizioni Abbonamento inchiostro per stampanti</a></li>
                    <li><a href="#">Mappa del sito</a></li>
                </ul>
            </div>
            <div class="footer-section">
                <h2>Acquisto</h2>
                <ul>
                    <li><a href="#">Black Friday</a></li>
                    <li><a href="#">Studenti</a></li>
                    <li><a href="#">Fotocamere</a></li>
                    <li><a href="#">Inchiostro, toner e carta</a></li>
                    <li><a href="#">Obiettivi</a></li>
                    <li><a href="#">Ink Finder</a></li>
                    <li><a href="#">Stampanti</a></li>
                    <li><a href="#">Videocamere</a></li>
                    <li><a href="#">Accessori e merchandising</a></li>
                    <li><a href="#">I prodotti più venduti</a></li>
                </ul>
            </div>
            <div class="footer-section newsletter">
                <h2>Registrati per ricevere le news di Canon</h2>
                <p>Ricevi aggiornamenti regolari via mail su nuovi prodotti, consigli utili e offerte</p>
                <a href="#" class="register-button">REGISTRATI ORA</a>
            </div>
        </div>
    </footer>
        
    </>
  );
}

export default App;
