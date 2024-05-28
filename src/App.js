import Navbar from './components/navbar'
import VideoC from './components/VideoSfondo'
import HomeCard from './components/Home_Card'
import Seconda from './components/seconda'
import Terzo from './components/terzo'
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

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
        <div class="footer-container">
            <div class="footer-section">
                <h2>Support services</h2>
                <ul>
                    <li>Contact us via:</li>
                    <ul>
                      <li>Email: <a href="https://www.google.com/intl/it/gmail/about/">MI-Support@gmail.com</a></li>
                      <li>Telephone: +39 3662883732</li>
                      
                    </ul>
                </ul>
            </div>
            <div class="footer-section">
                <h2>Informazioni</h2>
                <ul>
                    <li><a href="#">Why buy from us?</a></li>
                    <li><a href="https://europa.eu/youreurope/citizens/consumers/shopping/guarantees-returns/faq/index_it.htm#:~:text=Nell'UE%20il%20periodo%20di,esistenza%20al%20momento%20della%20consegna.">Product warranty</a></li>
                    <li><a href="https://www.eccnet.eu/consumer-rights/what-are-my-consumer-rights/shopping-rights/online-shopping-rights">Buy online safely</a></li>
                </ul>
            </div>
            <div class="footer-section">
                <h2>Acquisto</h2>
                <ul>
                    <li><a href="#">Camera</a></li>
                    <li><a href="#">Lenses</a></li>
                    <li><a href="#">Accessories and merchandising</a></li>
                </ul>
            </div>
            <div class="footer-section newsletter">
                <h2>Sign up to receive Canon news</h2>
                <p>Receive regular updates via email on new products, useful tips and offers</p>
                <Link to="/Login"><button class="register-button">Sign Up</button></Link>
                <Link to="/Login"><button id='newsletter_button' class="register-button">Subscribe to newsletter</button></Link>
            </div>
        </div>
    </footer>
        
    </>
  );
}

export default App;
