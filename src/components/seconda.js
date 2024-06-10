import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import immagine from'../Images/caro1.webp';
import immagine2 from'../Images/caro2.webp';
import immagine3 from '../Images/carousel3.jpg'

function Seconda() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img src={immagine} text="First slide" id="imgcaru"/>
        <Carousel.Caption>
          <h4 style={{color: 'rgb(255,255,255, 0.8)'}}>"Photography is a love affair with life."</h4>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={immagine2} text="Second slide" id="imgcaru" />
        <Carousel.Caption>
          <h4 style={{color: 'rgb(255,255,255, 0.6)'}}>“It's a world, someone's face. When I capture it, I see the future of the world"</h4>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={immagine3} text="Third slide" id="imgcaru"/>
        <Carousel.Caption>
          <h3>uno due tre e stella</h3>
          <p>
            pedro pedro pedro pedro pè fidati di me
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Seconda;

  