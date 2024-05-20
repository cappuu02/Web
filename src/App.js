import Navbar from './components/navbar';
import Box from './components/Box';
import VideoC from './components/VideoSfondo'
import image3 from './Images/ricambi.webp'
import image1 from './Images/obbiettivi.webp'
import image2 from './Images/canong.png'



function App() {
  const topFunction = () => {
    window.scrollTo(0, 0);
  }

  

  return (
    <>
      <div className='w-auto pt-0'>
        <Navbar />
      </div>
      
      <div className="container-fluid p-0 m-0">
        
        <VideoC />
        <h1 id='Titolo'>Benvenuto nel nostro sito</h1>
      </div>
      
     

        {/* L'icona stessa funge da bottone */}
      <div onClick={topFunction} id="Scrollup"><i className="bi bi-arrow-up-square"></i></div> 

      <div id="sfondoparte2" classname="m-0 p-0">
      <div id='spazio'>

</div>
      <div className="card-container">

        <div id="card">
        <img src={image3}  id='immagine-li'></img>
            <h2>Card 1</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse quis metus nec nunc pharetra euismod.</p>
            <button type="button" id='buttoncard' className="btn">Click me</button>        </div>
        <div id="card">
        <img src={image1}  id='immagine-li'></img>
            <h2>Card 2</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse quis metus nec nunc pharetra euismod.</p>
            <button type="button" id='buttoncard' className="btn">Click me</button>
        </div>
        <div id="card">
        <img src={image2}  id='immagine-li'></img>
        
            <h2 class>scopri i prodotti più venduti</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse quis metus nec nunc pharetra euismod.</p>
            <button type="button" id='buttoncard' class="btn">Primary</button>
        </div>
        <div id='spazio'></div>
         </div>

         </div>
        
        <div className="card-container">
        <div class="row">
          <div class="col-sm-6 mb-3 mb-sm-0">
            <div id='card_home_1' class="card">
              <div class="card-body">
                <h5  class="card-title text-center">Fast Shipping</h5>
                <p class="card-text text-left">Free shipping for orders over 80 euros.
                Shipping in 2 working days for Italy, Switzerland and France.
                Shipping in 5 working days to the rest of Europe.</p>
                <button type="button" id='buttoncard' className="btn">Click me</button>
              </div>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Special title treatment</h5>
                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <button type="button" id='buttoncard' className="btn">Click me</button>
              </div>
            </div>
          </div>
        </div>
        </div>
    </>
  );
}

export default App;
