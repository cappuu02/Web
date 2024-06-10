import React from 'react';
import image3 from '../Images/ricambi.jpg';
import image2 from '../Images/obbiettivi.webp';
import image1 from '../Images/production.jpg';
import { Link } from 'react-router-dom';
function HomeCard() {
  return (
    <>
      <div id="card">
          <img src={image3}  id='immagine-li'></img>
              <h2>Market Analysis</h2>
              <p>Constant and accurate market research to guarantee maximum quality and performance of our products.</p>       
      </div>
      
      <div id="card">
          <img style={{borderRadius: '30px'}} src={image2}  id='immagine-li'></img>
          <h2 >niche production</h2>
              <p>from a careful market analysis we have managed to select the best products with the best technologies to offer to customers.</p>
             <Link to="/Store" class="nav-link" aria-current="page"> <button type="button" id='buttoncard' className="btn">Shop Now</button> </Link>       
      </div>

      <div id="card">
          <img src={image1}  id='immagine-li'></img>
              <h2 id="titolo_card3">Accurate Production</h2>
              <p>The creation of the products is carried out by high-precision machinery under the care of our most trusted collaborators</p>
      
      </div>
    </>
  );
}


export default HomeCard;
