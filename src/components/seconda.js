import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import immagine from'../Images/caro1.webp';
import immagine2 from'../Images/caro2.webp';
import immagine3 from'../Images/caro3.jpg';

function Seconda() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img src={immagine} text="First slide" id="imgcaru"/>
        <Carousel.Caption>
          <h3>Spulcia i nostri eventi</h3>
          <p>Pedro pedro pedro pè praticamnete il meglio di santa fè</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={immagine2} text="Second slide" id="imgcaru" />
        <Carousel.Caption>
          <h3>Scopri i nostri cazzi</h3>
          <p>pedro pedro pedro pè</p>
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

  