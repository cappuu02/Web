import React, {  useState } from 'react';
import { Link } from 'react-router-dom';



const cookie = document.cookie.split('; ')
    .find((row) => row.startsWith('isAuthenticated='));
    
    if (cookie) {
      var isAuthenticated = cookie.split('=')[1];
      var utente_email = cookie.split(',')[1];

    } 



function Card_Changer(){

  const [metodo, setMetodo] = useState("");
  const [carta, setCarta] = useState("");
  const [scadenza, setScadenza] = useState("");
  const [pin, setPin] = useState("");

  const [cardError, setCardError] = useState("");
  const [goodError, setGoodError] = useState("");


  const handleNew = async (e) => {
    e.preventDefault();

<<<<<<< Updated upstream

=======
    if(!isAuthenticated){
      window.location.href = '/Login';
    }
>>>>>>> Stashed changes
  
    

    let update = 1;
    let metodo_pagamento = metodo;
    let carta_credito = carta;
    let data_scadenza = new Date(scadenza);
    let cod_sicurezza = pin;

    if(metodo === '' || carta === '' || scadenza === '' || pin === ''){
      setCardError("Please fill all fields")

        setTimeout(() => {
          setCardError("")
        }, 700);

        return;
    }


    try {
      const response = await fetch('http://localhost:3001/fatture', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ utente_email, metodo_pagamento, carta_credito, data_scadenza, cod_sicurezza, update }),
      });

      const esito = await response.text();

      if (esito === 'change') {
        setGoodError("Information updated")

        setTimeout(() => {
          setGoodError("")
        }, 700);

        window.location.href = "/Profile_Account";
      
      }
      if (esito === 'no change') {
        setCardError("Data already present");
      

      setTimeout(() => {
        setCardError("")
      }, 700);
      return;
        
      }
      else {
        alert(response)
        
      }
    } catch (error) {
      console.error(error);
      alert('An error occurred');
      alert('An error occurred');
      
    }
  
  }
<<<<<<< Updated upstream

=======
  const handleReturn = async () => {
    window.location.href = '/Profile_Security';
  }
>>>>>>> Stashed changes
  

    return(
        <>
      <div id='body_sign_inup'>
        <div className="container_login" id="container_login">
          <div className="form-container sign-in" style={{justifyContent: 'center', display: 'flex', alignItems: 'center', width: '100%'}}>
            <form onSubmit={handleNew} style = {{marginBottom: "0%"}}>
              <h1>Change Card Info</h1>
              <span style={{fontSize: "15px"}}>Add your new card info. It will be update after the confirm.</span>
              <span style={{fontSize: "15px", marginBottom: "5%"}}>If you'll have any problems, contact us on the dedicated page</span>
              <select id="payment-method" style={{ marginBottom: "2%",fontSize: "20px", width: "100%", border: "0px", borderRadius: "5px", height: "40px", paddingLeft: "15px" }}onChange={(e) => {setMetodo(e.target.value);}}><option value="">Select payment method</option><option value="Visa">Visa</option><option value="Mastercard">Mastercard</option><option value="American Express">American Express</option><option value="Discover">Discover</option></select>              
              <input style={{fontSize: "15px"}} id='psw_reset_login' type='text' placeholder='Card Number' onChange={(e) => { setCarta(e.target.value) }} />
              <input style={{fontSize: "15px"}} id='psw_reset_login' type='date' placeholder='Expiration Date' onChange={(e) => { setScadenza(e.target.value) }} />
              <input style={{fontSize: "15px"}} id='psw_reset_login' type='password' placeholder='Security Pin' onChange={(e) => { setPin(e.target.value) }} />
              <button>Confirm</button>
              <p class="good-text-new">&nbsp;  {goodError}</p>
              <p class="error-text-new">&nbsp;  {cardError}</p>
            </form>
          </div>
        </div>
<<<<<<< Updated upstream
=======
        <button id='return_home_btn' onClick={handleReturn}>Return Profile</button>
>>>>>>> Stashed changes
      </div>        
        </>
    )
}


export default Card_Changer;