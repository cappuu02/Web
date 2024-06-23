import style from '../profile.module.css'
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';




const cookie = document.cookie.split('; ')
    .find((row) => row.startsWith('isAuthenticated='));
    
    if (cookie) {
      var utente_email = cookie.split(',')[1];
      var isAuthenticated = cookie.split('=')[1];
      
    }
    

function Security(){
    const [email, setEmail] = useState('');
    const [telephone, setTelephone] = useState('')
    const [password, setPassword] = useState('')
    const [metodo, setMetodo] = useState('');
    const [carta, setCarta] = useState('')
    const [scadenza, setScadenza] = useState('')
    const [sicurezza, setSicurezza] = useState('')
    const [censurato, setCensurato] = useState('')
   
  const [telephone1, setTelephone1] = useState("");

  const [telError, setTelError] = useState("");
  const [newError, setNewError] = useState("");


    const handleRead = async () => {

      if(!isAuthenticated){
        window.location.href = '/Login';
      }
      
        try {
            const response1 = await fetch('http://localhost:3001/utenti', {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
              },
              
            });
    
                const userData2 = await response1.text()
                const userDataObj2 = JSON.parse(userData2);
    
                const index = userDataObj2.findIndex(userDataObj2 => userDataObj2.email === utente_email);
    
                console.log(index)
              
              setEmail(userDataObj2[index].email);
              setPassword(userDataObj2[index].password);
    }catch (error) {
        console.error(error);
        alert('An error occurred');
      }
      try {
        const response = await fetch('http://localhost:3001/indirizzi', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },

        });
        const userData1 = await response.text();
          const userDataObj1 = JSON.parse(userData1);
          
          
          const index = userDataObj1.findIndex(userDataObj1 => userDataObj1.utente_email === utente_email);

          setTelephone(userDataObj1[index].telefono);

    }catch (error) {
        console.error(error);
        alert('An error occurred');
      }
      try {
        const response = await fetch('http://localhost:3001/fatture', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },

        });
        const userData3 = await response.text();
          const userDataObj3 = JSON.parse(userData3);
          
          
          const index = userDataObj3.findIndex(userDataObj3 => userDataObj3.utente_email === utente_email);

          setMetodo(userDataObj3[index].metodo_pagamento);
          setCarta(userDataObj3[index].carta_credito);
          if(userDataObj3[index].data_scadenza != null){
            setScadenza(userDataObj3[index].data_scadenza.slice(0, 10));
          }
          
          setSicurezza(userDataObj3[index].cod_sicurezza);

          
          const lastChar = userDataObj3[index].carta_credito.substring(userDataObj3[index].carta_credito.length - 4);
          if(userDataObj3[index].carta_credito != null){
          setCensurato(`************${lastChar}`);
          }
          return

    }catch (error) {
        console.error(error);
        alert('An error occurred');
      }
    }

      const handleClick = async () => {
        let pass = 1;
        let email = utente_email;
        try {
          const response = await fetch('http://localhost:3001/send-email', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, pass }),
          });

      }catch (error) {
      console.error(error);
      alert('An error occurred');
    }
  }

  const handleCookie = async () => {
    document.cookie = `Telephone=${telephone}; max-age=${60 * 60 * 24 * 7}; path=/`;
  }

  const handlePhone = async (e) => {
    e.preventDefault();
    
    let phone = 1;
      try {
        const response = await fetch('http://localhost:3001/send-email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, phone }),
        });
      

      
      return;

    
    } catch (error) {
      console.error(error);
      alert('An error occurred');
    }
  }

      useEffect(() => {
        handleRead();
        
        
      }, []);


    return(
        
        <>
        
          

        
                <div id={style.box_profile2} >
                    <h2 id={style.title_2}>Email</h2>
                    <p style={{textAlign: 'center'}}>If you want to update your email address click the button below to start!</p>
                    <input id={style.input_profilo2} type="text" value={email} readonly/>                    
                    <Link to = "/Profile_Security/Email_Changer" style = {{justifyContent: 'center'}}><button id={style.button_email_reset2} type="button" class="btn btn-danger">Update</button></Link>

                    <hr></hr>
                
                    <h2 id={style.title_2}>Password</h2>
                    <p style={{textAlign: 'center'}}>If you want to update your account password click the button and wait for the code authenticator</p>
                    <div>
                        <input id={style.input_profilo3} type="password" value={password} readonly/>
                        <button id={style.button_psw_reset2} onClick = {handleClick}type='button' class="btn btn-danger">Update</button>
                    </div>

                    <hr></hr>
                
                
                    <h2 id={style.title_2}>Phone Number</h2>
                    <p style={{textAlign: 'center'}}>If you want to add/update your account's telephone number click the button</p>
                    <div>
                        <input id={style.input_profilo3} type="text" value={telephone} readonly/>
                        <button onClick={handlePhone} id={style.button_psw_reset2} type='button' class="btn btn-danger">Update</button>
                    </div>

                    <hr></hr>

                    <h2 id={style.title_2}>Card Info</h2>
                    <p style={{textAlign: 'center'}}>If you want to add/update your account's card info click the button</p>
                    <div>
                        <input id={style.input_profilo4} type="text" value={metodo} readonly/>
                        <input id={style.input_profilo4} type="text" value={censurato} readonly/>
                        <input id={style.input_profilo4} type="text" value={scadenza} readonly/>
                        <input id={style.input_profilo4} type="password" value={sicurezza} readonly/>
                        <Link to = "/Profile_Security/Password_Check" style = {{justifyContent: 'center'}}><button id={style.button_psw_reset2} type='button' class="btn btn-danger">Update</button></Link>                    </div>
                </div>
                
             
        

        
        </>
    )
}


export default Security;