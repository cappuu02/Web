import { useState, useEffect } from 'react';
import image1 from '../../Images/Lens/XF80_Lens.webp';
import styles from '../../Store_style.module.css';

const getCookie = (name) => {

  const value = `; ${document.cookie}`;

  const parts = value.split(`; ${name}=`);

  if (parts.length === 2) return JSON.parse(parts.pop().split(';').shift());

};

function XF80(){
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
  const id = "XF4";
  
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

  return (
    <div id='card_shop' className={`container m-4 ${styles.cardContainer}`}>
      <div className="card border-0 rounded-0 shadow">
        <img src={image1} className="card-img-top rounded-0" alt="XT50 Camera" />
        <div className="card-body mt-3">
          <div className="row">
            <div className="col-10">
              <h4 className="card-title">{modello}</h4>
              <p className="pl-1">{tipo}</p>
              <p className="card-title">{anno}</p>
            </div>
            <div className="col-2 text-end">
              <i className="bi bi-card-text fs-1 float-end" onClick={handleDescToggle} style={{ cursor: 'pointer' }}></i>
              <div className="col-10 anno">
             
            </div>
            </div>
          </div>
          
          </div>
          <div className="row align-items-center text-center g-0">
            <div className="col-4">
              <h5>{`${prezzo}€`}</h5>
            </div>
            <div className="col-8">
              <button className={`btn btn-dark w-100 p-3 rounded-0 ${styles.customTextRed}`} onClick={handleClick} >ADD TO CART</button>
            </div>
          </div>
          <div className="row">
            
            <div className='col-12 text-center'>
            <div className={`${styles['dropdown-custom']} ${showDesc ? styles.show : ''}`}>
            <p>{descrizione}</p>
          </div>
            </div>
          </div>
        
      </div>
    </div>
  );
}
export default XF80;