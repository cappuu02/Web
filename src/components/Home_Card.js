import React from 'react';
import image3 from '../Images/ricambi.webp';
import image2 from '../Images/canong.png';
import image1 from '../Images/obbiettivi.webp';
function HomeCard() {
  return (
    <>
      <div id="card">
          <img src={image3}  id='immagine-li'></img>
              <h2>Card 1</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse quis metus nec nunc pharetra euismod.</p>
              <button type="button" id='buttoncard' className="btn">Click me</button>        
      </div>
      
      <div id="card">
          <img src={image2}  id='immagine-li'></img>
              <h2>Card </h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse quis metus nec nunc pharetra euismod.</p>
              <button type="button" id='buttoncard' className="btn">Click me</button>        
      </div>

      <div id="card">
          <img src={image1}  id='immagine-li'></img>
              <h2>Card </h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse quis metus nec nunc pharetra euismod.</p>
              <button type="button" id='buttoncard' className="btn">Click me</button>        
      </div>
    </>
  );
}


export default HomeCard;
