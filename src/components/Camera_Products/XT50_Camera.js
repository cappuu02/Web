import { useState, useEffect } from 'react';
import image1 from '../../Images/Camera/XT50.webp';
import styles from '../../Store_style.module.css';

function XT50() {
  const [modello, setModello] = useState('');
  const [prezzo, setPrezzo] = useState('');
  const [descrizione, setDescrizione] = useState('');
  const [anno, setAnno] = useState('');
  const [quantita, setQuantita] = useState('');
  const [tipo, setTipo] = useState('');
  const [showDesc, setShowDesc] = useState(false);

  const handleRead = async () => {
    const get = 1;
    const id = 'X1';
    
    try {
      const response = await fetch('http://localhost:3001/prodotti', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id, get }),
      });

      const esito = await response.json();
      const userDataObj = esito;

      setModello(userDataObj[0].modello);
      setPrezzo(userDataObj[0].prezzo);
      setDescrizione(userDataObj[0].descrizione);
      setAnno(userDataObj[0].anno);
      setQuantita(userDataObj[0].quantita);
      setTipo(userDataObj[0].tipo);
    } catch (error) {
      console.error(error);
      alert('An error occurred');
    }
  };

  useEffect(() => {
    handleRead();
  }, []);

  const handleDescToggle = () => {
    setShowDesc(!showDesc);
  };

  return (
    <div id='card_shop' className={`container m-4 ${styles.cardContainer}`}>
      <div className="card border-0 rounded-0 shadow">
        <img src={image1} className="card-img-top rounded-0" alt="XT50 Camera" />
        <div className="card-body mt-3 mb-3">
          <div className="row">
            <div className="col-10">
              <h4 className="card-title">sas</h4>
              <p>{2024}</p>
              <p>{tipo}cazzo</p>
            </div>
            <div className="col-2 text-end">
              <i className="bi bi-card-text fs-1 float-end" onClick={handleDescToggle} style={{ cursor: 'pointer' }}></i>
              <div className="col-10 anno">
             
            </div>
            </div>
          </div>
          
          <p>{tipo}</p>
          <div className="row align-items-center text-center g-0">
            <div className="col-4">
              <h5>{`${100}€`}</h5>
            </div>
            <div className="col-8">
              <a href="#" className={`btn btn-dark w-100 p-3 rounded-0 ${styles.customTextRed}`}>ADD TO CART</a>
            </div>
          </div>
          <div className="row">
            
            <div className='col-12 text-center'>
            <div className={`${styles['dropdown-custom']} ${showDesc ? styles.show : ''}`}>
            <p>asdasdasdasdasdasdsa</p>
          </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default XT50;
