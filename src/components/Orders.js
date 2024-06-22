
import style from '../profile.module.css'
import React, { useEffect, useState } from 'react';

const cookie1 = document.cookie.split('; ')
    .find((row) => row.startsWith('isAuthenticated='));

    if (cookie1) {
      var utente_email = cookie1.split(',')[1];
      var isAuthenticated = cookie1.split('=')[1];
    }

    function Orders() {

        const [id1, setId1] = useState('');
        const [prodotto1, setProdotto1] = useState('');
        const [qta1, setQta1] = useState('');
        const [costo1, setCosto1] = useState('');

        const [id2, setId2] = useState('');
        const [prodotto2, setProdotto2] = useState('');
        const [qta2, setQta2] = useState('');
        const [costo2, setCosto2] = useState('');

        const [id3, setId3] = useState('');
        const [prodotto3, setProdotto3] = useState('');
        const [qta3, setQta3] = useState('');
        const [costo3, setCosto3] = useState('');

        const [id4, setId4] = useState('');
        const [prodotto4, setProdotto4] = useState('');
        const [qta4, setQta4] = useState('');
        const [costo4, setCosto4] = useState('');

        const [order1Found, setorder1Found] = useState(false);
        const [order2Found, setorder2Found] = useState(false);
        const [order3Found, setorder3Found] = useState(false);
        const [order4Found, setorder4Found] = useState(false);

        function waitForStateToUpdate(state) {

            return new Promise(resolve => {
          
              const interval = setInterval(() => {
          
                if (state) {
          
                  clearInterval(interval);
          
                  resolve();
          
                }
          
              }, 10);
          
            });
          
          }

        const handleRead = async () => {
<<<<<<< Updated upstream
=======
          if(!isAuthenticated){
            window.location.href = '/Login';
          }
          
>>>>>>> Stashed changes
            let get = 1;
            try {
                const response = await fetch('http://localhost:3001/ordini', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify({ utente_email, get }),
                });

                const esito = await response.text();

                if (esito === 'noGot'){
                    console.log("noGot")
                }
                
                const userDataObj = JSON.parse(esito);
                
                await Promise.all([setorder1Found(userDataObj[0]!== undefined), setorder2Found(userDataObj[1]!== undefined), setorder3Found(userDataObj[2]!== undefined), setorder4Found(userDataObj[3]!== undefined)]);
            

                if (userDataObj[0]!== undefined){
                setId1(userDataObj[0].id);
                setProdotto1(userDataObj[0].prodotto_id);
                setQta1(userDataObj[0].quantita);
                setCosto1(userDataObj[0].costo_totale);
                }

                if (userDataObj[1]!== undefined){
                setId2(userDataObj[1].id);
                setProdotto2(userDataObj[1].prodotto_id);
                setQta2(userDataObj[1].quantita);
                setCosto2(userDataObj[1].costo_totale);
                }

                if (userDataObj[2]!== undefined){
                setId3(userDataObj[2].id);
                setProdotto3(userDataObj[2].prodotto_id);
                setQta3(userDataObj[2].quantita);
                setCosto3(userDataObj[2].costo_totale);
                }

                if (userDataObj[3]!== undefined){
                setId4(userDataObj[3].id);
                setProdotto4(userDataObj[3].prodotto_id);
                setQta4(userDataObj[3].quantita);
                setCosto4(userDataObj[3].costo_totale);
                }
                  
                
                return
                
            }
        catch (error) {
            console.error(error);
            alert('An error occurred');
          }}
      
      
          useEffect(() => {
              handleRead();

              
            }, []);

            return (

                <>
              
                  <div id={style.box_profile3}>

                    {!order1Found && !order2Found && !order3Found && !order4Found &&
                        <h2 id={style.title}>You've made no orders yet</h2>
                    }
                    
              
                    {order1Found && (
              
                      <div class={style.dropdown}>
              
                        <button class={style.dropbtn}>Ordine 1</button>
              
                        <div class={style.contenuto} >
              
<<<<<<< Updated upstream
                          <input id={style.input_profilo_order} class="form-control" type="text" value={id1} readOnly/>
              
                          <input id={style.input_profilo_order} class="form-control" type="text" value={prodotto1} readOnly/>
              
                          <input id={style.input_profilo_order} class="form-control" type="text" value={qta1} readOnly/>
              
                          <input id={style.input_profilo_order} class="form-control" type="text" value={costo1} readOnly/>
=======
                          <input id={style.input_profilo_order} class="form-control" type="text" value={`Order: ${id1}`} readOnly/>
              
                          <input id={style.input_profilo_order} class="form-control" type="text" value={prodotto1} readOnly/>
              
                          <input id={style.input_profilo_order} class="form-control" type="text" value={`Quantity: ${qta1}`} readOnly/>
              
                          <input id={style.input_profilo_order} class="form-control" type="text" value={`Price: ${costo1}€`} readOnly/>
>>>>>>> Stashed changes
              
                        </div>
              
                      </div>
              
                    )}
              
                    {order2Found && (
              
                      <div class={style.dropdown}>
              
                        <button class={style.dropbtn}>Ordine 2</button>
              
                        <div class={style.contenuto}>
              
<<<<<<< Updated upstream
                          <input id={style.input_profilo_order} class="form-control" type="text" value={id2} readOnly/>
              
                          <input id={style.input_profilo_order} class="form-control" type="text" value={prodotto2} readOnly/>
              
                          <input id={style.input_profilo_order} class="form-control" type="text" value={qta2} readOnly/>
              
                          <input id={style.input_profilo_order} class="form-control" type="text" value={costo2} readOnly/>
=======
                          <input id={style.input_profilo_order} class="form-control" type="text" value={`Order: ${id2}`} readOnly/>
              
                          <input id={style.input_profilo_order} class="form-control" type="text" value={prodotto2} readOnly/>
              
                          <input id={style.input_profilo_order} class="form-control" type="text" value={`Quantity: ${qta2}`} readOnly/>
              
                          <input id={style.input_profilo_order} class="form-control" type="text" value={`Price: ${costo2}€`} readOnly/>
>>>>>>> Stashed changes
              
                        </div>
              
                      </div>
              
                    )}
              
                    {order3Found && (
              
                      <div class={style.dropdown}>
              
                        <button class={style.dropbtn}>Ordine 3</button>
              
                        <div class={style.contenuto}>
              
<<<<<<< Updated upstream
                          <input id={style.input_profilo_order} class="form-control" type="text" value={id3} readOnly/>
              
                          <input id={style.input_profilo_order} class="form-control" type="text" value={prodotto3} readOnly/>
              
                          <input id={style.input_profilo_order} class="form-control" type="text" value={qta3} readOnly/>
              
                          <input id={style.input_profilo_order} class="form-control" type="text" value={costo3} readOnly/>
=======
                          <input id={style.input_profilo_order} class="form-control" type="text" value={`Order: ${id3}`} readOnly/>
              
                          <input id={style.input_profilo_order} class="form-control" type="text" value={prodotto3} readOnly/>
              
                          <input id={style.input_profilo_order} class="form-control" type="text" value={`Quantity: ${qta3}`} readOnly/>
              
                          <input id={style.input_profilo_order} class="form-control" type="text" value={`Price: ${costo3}€`} readOnly/>
>>>>>>> Stashed changes
              
                        </div>
              
                      </div>
              
                    )}
              
                    {order4Found && (
              
                      <div class={style.dropdown}>
              
                        <button class={style.dropbtn}>Ordine 4</button>
              
                        <div class={style.contenuto}>
              
<<<<<<< Updated upstream
                          <input id={style.input_profilo_order} class="form-control" type="text" value={id4} readOnly/>
              
                          <input id={style.input_profilo_order} class="form-control" type="text" value={prodotto4} readOnly/>
              
                          <input id={style.input_profilo_order} class="form-control" type="text" value={qta4} readOnly/>
              
                          <input id={style.input_profilo_order} class="form-control" type="text" value={costo4} readOnly/>
=======
                          <input id={style.input_profilo_order} class="form-control" type="text" value={`Order: ${id4}`} readOnly/>
              
                          <input id={style.input_profilo_order} class="form-control" type="text" value={prodotto4} readOnly/>
              
                          <input id={style.input_profilo_order} class="form-control" type="text" value={`Quantity: ${qta4}`} readOnly/>
              
                          <input id={style.input_profilo_order} class="form-control" type="text" value={`Price${costo4}€`} readOnly/>
>>>>>>> Stashed changes
              
                        </div>
              
                      </div>
              
                    )}
              
                  </div>
              
                </>
              
              );
  }

  export default Orders;




