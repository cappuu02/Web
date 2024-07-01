import { useState, useEffect } from 'react';
import image1 from '../../Images/Camera/X100VI.webp';
import styles from '../../Store_style.module.css';
import Popup from '../Popup'; // Assicurati di avere il file Popup.js

const getCookie = (name) => {

  const value = `; ${document.cookie}`;

  const parts = value.split(`; ${name}=`);

  if (parts.length === 2) return JSON.parse(parts.pop().split(';').shift());

};

function X100V(){
  const [product, setProduct] = useState({

    qta: 0,
  
    name: '',
  
    price: '',
  
    image: '',
  
  });
  const [modello, setModello] = useState('');
  const [prezzo, setPrezzo] = useState('');
  const [descrizione, setDescrizione] = useState('');
  const [anno, setAnno] = useState('');

  const [tipo, setTipo] = useState('');
  const [showDesc, setShowDesc] = useState(false); // new state to toggle dropdown
  const id = "C1";
  
  const handleRead = async () => {
    
    const previousProductData = getCookie(`cart_${id}`);
    
    let get = 1;
 
    try {
      const response = await fetch('http://localhost:3001/prodotti', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id, get }),
      });

      const esito = await response.text();
      const userDataObj = await JSON.parse(esito)
      
      setModello(userDataObj[0].modello);
      setPrezzo(userDataObj[0].prezzo);
      setDescrizione(userDataObj[0].descrizione);
      setAnno(userDataObj[0].anno);
      
      setTipo(userDataObj[0].tipo);

      if(previousProductData !== undefined){
        setProduct({
  
          qta: previousProductData.qta,
        
          name: userDataObj[0].modello,
        
          price: userDataObj[0].prezzo,
        
          image: image1,
        
        })
      }else{
        setProduct({
  
          qta: 0,
        
          name: userDataObj[0].modello,
        
          price: userDataObj[0].prezzo,
        
          image: image1,
        
        })
      }

      
      console.log("product: ", product)
      
      return


    }catch (error) {
      console.error(error);
      alert('An error occurred');
    }
  }

  const handleClick = async() => {
    product.qta = parseInt(product.qta, 10) + 1
    const cookieString = `cart_${id}=${JSON.stringify(product)}; expires=${new Date(Date.now() + 86400000).toUTCString()}; path=/`;
    document.cookie = cookieString;
  }
  useEffect(() => {
    handleRead();
    
    
  }, []);

  const handleDescToggle = () => {

    setShowDesc(!showDesc);

  }

  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  return (
    <div id='card_shop' className={`container m-4 ${styles.cardContainer}`}>
      <div className="card border-0 rounded-0 shadow">
        <div className="card-body mt-3">
          <div className="row">
            <div className="col-10">
              <button id={styles.btn_boss_addnew} onClick={togglePopup}>
                <i id={styles.PIU} className="bi bi-plus-lg"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
      {isPopupOpen && <Popup closePopup={togglePopup} />}
    </div>
  );
}
export default X100V;