import Navbar from "../components/navbar";
import style from "../InvioOrdini.module.css"
import Cart_tot from "../components/Cart_tot";
import Navbar_Store from "../components/Navbar_Store";
import React, { useEffect, useState } from 'react';

const cookies = document.cookie.split(';');
const cookie1 = document.cookie.split('; ')
    .find((row) => row.startsWith('isAuthenticated='));

    if (cookie1) {
      var utente_email = cookie1.split(',')[1];
      var isAuthenticated = cookie1.split('=')[1];
    }

    const cookie = document.cookie.split('; ').find((row) => row.startsWith('cart_'));
    
    if (cookie) {
      var hasCartCookie = cookie!== undefined;
   
      
    }

function InvioOrdini() {
 
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');
   
    const [address, setAddress] = useState('');
    const [houseNumber, setHouseNumber] = useState('');
    const [cap, setCap] = useState('');
    const [city, setCity] = useState('');
    const [region, setRegion] = useState('');
    const [nation, setNation] = useState('');
    
    const [card, setCard] = useState('');


    const [censurato, setCensurato] = useState('');

    const [formError, setFormError] = useState("");

    const [goodError, setGoodError] = useState("");


    const [cartItems, setCartItems] = useState([]);

    const [prodName, setProdName] = useState("");
    const [qta, setQta] = useState("");
    const [price, setPrice] = useState("");
    
    const handleRead = async () => {
        if (!isAuthenticated) {
     
                window.location.href = '/Login';
          }
          if(!hasCartCookie){
            window.location.href = '/Cart';

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
        
        if(userDataObj1[index] != undefined){
        
        setName(userDataObj1[index].nome);
        
       
        setSurname(userDataObj1[index].cognome);
        
        
        setEmail(userDataObj1[index].email);
        
        
        setAddress(userDataObj1[index].via);
        
        
        setHouseNumber(userDataObj1[index].civico);
        
        
        setCap(userDataObj1[index].cap);
        
        
        setCity(userDataObj1[index].citta);
        
        
        setRegion(userDataObj1[index].regione);
        
       
        setNation(userDataObj1[index].nazione);
        
    }
    

        
        
        
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
          console.log(`${userDataObj3}`);
          const index = userDataObj3.findIndex(userDataObj3 => userDataObj3.utente_email === utente_email);

         
          setCard(userDataObj3[index].carta_credito);
          

          userDataObj3[index].carta_credito.substring(userDataObj3[index].carta_credito.length - 4);
          if(userDataObj3[index].carta_credito != null){
            setCensurato(`************${userDataObj3[index].carta_credito.substring(userDataObj3[index].carta_credito.length - 4)}`);
            }

          

        }catch (error) {
          console.error(error);
          
        }
    }



const handleConfirm = async () => {
    if(name === "" || surname === "" || email === "" || address === "" || houseNumber === "" || nation === "" || region === "" || city === "" || card === ""){

        alert("You cannot make an order without completing your profile, you'll be redirected there to fill your accounts information!")
        window.location.href = "/Profile_Account";
        return
    }
    let totalPrice = 0;

    let totalQta = 0;

    let prodName = '';


    if (cookies) {

        for (let i = 0; i < cookies.length; i++) {

            const cookies1 = cookies[i].trim();


            if (cookies1.startsWith('cart_')) {

                const [id_tot, value] = cookies1.split('=');


                const [headId, id1] = id_tot.split('_')


                const [qta_tot, name_tot, price_tot, image_tot] = value.split(',');

                const [headQ, qta1] = qta_tot.split(':') 

                const [headN, nameFix] = name_tot.split(':') 

                const [headP, price1] = price_tot.split(':') 

                const [headI, imageFix] = image_tot.split(':') 

                const [imageFix1, HeadII ] = imageFix.split('}') 


                const name1 = nameFix.replace(/"/g, ''); // Remove double quotes from the name

                const image = imageFix1.replace(/"/g, ''); // Remove double quotes from the name

                console.log("Image: ", image)


                totalPrice += parseInt(price1);

                totalQta += parseInt(qta1);
                    
                prodName += name1 + ', ';

            }

        }

    }

    let id = Math.floor(1000000000 + Math.random() * 9000000000);

    let create = 1;

    let quantita = totalQta;

    let costo_totale = totalPrice;

    let prodotto_id = prodName.trim(); // remove trailing comma and space


    try {

        const response1 = await fetch('http://localhost:3001/ordini', {

            method: 'POST',

            headers: {

                'Content-Type': 'application/json',

            },

            body: JSON.stringify({ id, utente_email, prodotto_id, quantita, costo_totale, create }),

        });

        const cookies = document.cookie.split(';');


for (let i = 0; i < cookies.length; i++) {

    const cookie = cookies[i].trim();

    const [name, value] = cookie.split('=');
    const [cart, id] = name.split('_')


    const [qta_tot, name_tot, price_tot, image_tot] = value.split(',');

    const [headQ, qta1] = qta_tot.split(':')

    if (name.startsWith('cart_')) {
            let quantity = qta1
            let updateQta = 1
            
      
           
      
              const response1 = await fetch(`http://localhost:3001/prodotti`, {
      
                method: 'POST',
      
                headers: {
      
                  'Content-Type': 'application/json',
      
                },
      
                body: JSON.stringify({ id, quantity, updateQta }),
      
              });

        document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`;

    }

}

let quantita1 = totalQta;

let costo_totale1 = totalPrice;

let prodotto_id1 = prodName.trim(); 

let order = 1;

console.log(utente_email)
console.log(id)
console.log(prodotto_id1)
console.log(quantita1)
console.log(costo_totale1)


try {
    const response = await fetch('http://localhost:3001/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ utente_email, id, prodotto_id1, quantita1, costo_totale1, order }),
    });
    const esito = response.text();
    if(esito == "notSent"){
        alert("Not sent")
    }else{
        window.location.href = "/Profile_Orders";
    }

            
} catch (error) {

    console.error(error);

    alert('An error occurred');

}

    } catch (error) {

        console.error(error);

        alert('An error occurred');

    }}

    useEffect(() => {
        handleRead();
        
        
      }, []);
    
  return (
    <> 
        <Navbar />
        <Navbar_Store />
        <div id={style.grid_container}>
            <div id={style.box}>
                <h1 id={style.titolo}>Fill and Order</h1> 
                <hr></hr>
                <p id={style.paragrafo} >Confirm or modify your data, these will be used for shipping</p>
                <div id={style.rowbox} className="row">
                    <div className="col">
                        <label id={style.label}>Name</label>
                        <input id={style.input_ordine} class="form-control" type="text" defaultValue={name} readOnly/>
                    </div>
                    <div className="col">
                        <label id={style.label}>Surname</label>
                        <input id={style.input_ordine} class="form-control" type="surname" defaultValue={surname} readOnly/>
                    </div>
                    <div className="col">
                        <label id={style.label}>Email</label>
                        <input id={style.input_ordine} class="form-control" type="surname" defaultValue={utente_email} readOnly/>
                    </div>
                </div>
                <div id={style.rowbox} className="row">
                    <div className="col">
                        <label id={style.label}>Address</label>
                        <input id={style.input_ordine} class="form-control" type="text" defaultValue={address} readOnly/>
                    </div>
                    <div className="col">
                        <label id={style.label}>House Nm.</label>
                        <input id={style.input_ordine} class="form-control" type="surname" defaultValue={houseNumber} readOnly/>
                    </div>
                </div>
                <div id={style.rowbox} className="row">
                    <div className="col">
                        <label id={style.label}>Nation</label>
                        <input id={style.input_ordine} class="form-control" type="text" defaultValue={nation} readOnly/>
                    </div>
                    <div className="col">
                        <label id={style.label}>Region</label>
                        <input id={style.input_ordine} class="form-control" type="surname" defaultValue={region} readOnly/>
                    </div>
                    <div className="col">
                        <label id={style.label}>City</label>
                        <input id={style.input_ordine} class="form-control" type="surname" defaultValue={city} readOnly/>
                    </div>
                </div>
                <hr></hr>
                <div id={style.rowbox} className="row">
                    <div className="col">
                        <label id={style.label}>Card Number</label>
                        <input id={style.input_ordine_credit} class="form-control" type="text" defaultValue={censurato} readOnly/>
                    </div>
                </div>
                <hr></hr>
                <div id={style.rowbox} className="row">
                    <h2 id={style.Products}>Products</h2>
                     <div className="col">

                     </div>
                    <div>
                    <Cart_tot /> 
                    </div>
                </div>
                <button id={style.button_send_order}  class="btn btn-success" onClick={handleConfirm}>Confirm</button>
            </div>
        </div>
    </>
  );
}


export default InvioOrdini;




