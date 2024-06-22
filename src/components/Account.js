
import style from '../profile.module.css'
import React, {  useState, useEffect } from 'react';






    

    const cookie1 = document.cookie.split('; ')
    .find((row) => row.startsWith('isAuthenticated='));

    if (cookie1) {
      var utente_email = cookie1.split(',')[1];
      var isAuthenticated = cookie1.split('=')[1];
    }

function Account(){

    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');
    const [telephone, setTelephone] = useState('');
    const [address, setAddress] = useState('');
    const [houseNumber, setHouseNumber] = useState('');
    const [cap, setCap] = useState('');
    const [city, setCity] = useState('');
    const [region, setRegion] = useState('');
    const [nation, setNation] = useState('');
    const [type, setType] = useState('');
    const [card, setCard] = useState('');
    const [exp, setExp] = useState('');
    const [pin, setPin] = useState('');

    const [censurato, setCensurato] = useState('');

    const [formError, setFormError] = useState("");

    const [goodError, setGoodError] = useState("");

    const [password, setPassword] = useState('');

    

    const handleRead = async () => {

      let create = 1;

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


      try {
        const response1 = await fetch('http://localhost:3001/indirizzi', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ utente_email, create }),
        });


        try {
          const response1 = await fetch('http://localhost:3001/fatture', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ utente_email, create }),
          });
            

          
        
        try {
          const response = await fetch('http://localhost:3001/indirizzi', {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
            
          });
    
          const userData1 = await response.text();
          const userDataObj1 = JSON.parse(userData1);
          
          
          const index = userDataObj1.findIndex(userDataObj2 => userDataObj2.utente_email === utente_email);

          setName(userDataObj1[index].nome);

          setSurname(userDataObj1[index].cognome);
          setEmail(userDataObj1[index].email);
          setTelephone(userDataObj1[index].telefono);
          setAddress(userDataObj1[index].via);
          setHouseNumber(userDataObj1[index].civico);
          setCap(userDataObj1[index].cap);
          setCity(userDataObj1[index].citta);
          setRegion(userDataObj1[index].regione);
          setNation(userDataObj1[index].nazione);

          
          
          
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
            const index = userDataObj3.findIndex(userDataObj2 => userDataObj2.utente_email === utente_email);

            setType(userDataObj3[index].metodo_pagamento);
            setCard(userDataObj3[index].carta_credito);
            if(userDataObj3[index].data_scadenza != null){
              setExp(userDataObj3[index].data_scadenza.slice(0, 10));
            }
            setPin(userDataObj3[index].cod_sicurezza);

            userDataObj3[index].carta_credito.substring(userDataObj3[index].carta_credito.length - 4);
            if(userDataObj3[index].carta_credito != null){
              setCensurato(`************${userDataObj3[index].carta_credito.substring(userDataObj3[index].carta_credito.length - 4)}`);
              }

            

          }catch (error) {
            console.error(error);
            
          }


        }catch (error) {
            console.error(error);
            
          }


        } catch (error) {
          console.error(error);
          alert('An error occurred');
          alert('An error occurred');
          
        }
      
      }catch (error) {
        console.error(error);
        alert('An error occurred');
    }}

    const [isEditable, setIsEditable] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        let update = 1;
        let nome = name;
        let cognome = surname;
        let via = address;
        let civico = houseNumber;
        let citta = city;
        let regione = region;
        let nazione = nation;

        if (nome === "" || cognome === "" || via === "" || civico === "" || civico === "" || citta === "" || regione === "" || nazione === "") {
      
          setFormError("Please fill all fields.");
          setTimeout(() => {
            setFormError("");
          
    }, 700);
    
          return;
        }
      
      

        try {
          const response = await fetch('http://localhost:3001/indirizzi', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            
            body: JSON.stringify({ utente_email,nome,cognome, via,civico,cap,citta,regione,nazione,update }),
          });
    
          const esito = await response.text();
    
          if (esito === 'change') {
            
            window.location.reload();
          }
          if (esito === 'nochange') {
            setFormError("Information Not Updated")
    
            setTimeout(() => {
              setFormError("")
            }, 700);
            return;
          }
          else {
            alert(response)
          }
        } catch (error) {
          console.error(error);
          alert('An error occurred');
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

        
        setEmail(userDataObj2[0].email);
        setPassword(userDataObj2[0].password);

        
        
        
        console.log(`Email: ${email}, Password: ${password}`);
        return;
      }catch (error) {
          console.error(error);
          alert('An error occurred');
        }
        
      }


      


    useEffect(() => {
        handleRead();
        const EditIcon = document.getElementById(style.icona_modifier);
        

        
            
            const handleModifierClick = () => {

                setIsEditable(true);
            
              };
              
              EditIcon.addEventListener('click', handleModifierClick);
        
          

      
            }, []);


    return(
        
      <>
      {isEditable ? (
        <div id={style.box_profile} >
            <div id={style.div_titolo}>
                <h2 class={style.titolo_account}>Account Information</h2>
                <i id={style.icona_modifier} style ={{display: 'none'}} class="bi bi-pencil-square"></i>
            </div>
              
            <div class={style.grid_item}>
                    <label>Name</label>
                    <input id={style.input_profilo} type="text" defaultValue={name} onChange={(e) => { setName(e.target.value) }}/>
                
            </div>
            <div class={style.grid_item} >
                <label>Surname:</label>
                <input id={style.input_profilo}  type="text" defaultValue={surname} onChange={(e) => { setSurname(e.target.value) }} />
            </div>
            <div class={style.grid_item} style = {{display:'none'}}>
                <label>Email:</label>
                
                <input id={style.input_profilo} type="text" value={email} />
            </div>
            <div class={style.grid_item} style = {{display:'none'}}>
                <label>Password:</label>
                
                <input id={style.input_profilo} type="password" value={password} />
            </div>
            <div class={style.grid_item} style = {{display:'none'}}>
                <label>Telephone Number</label>
                
                <input id={style.input_profilo} type="text" value={telephone} />
            </div>
            <hr></hr>
            <div class={style.grid_item}>
                <label>Address</label>
                
                <input id={style.input_profilo} type="text" defaultValue={address} onChange={(e) => { setAddress(e.target.value) }} />
            </div>
            <div class={style.grid_item}>
                <label>House Nm.</label>
                
                <input id={style.input_profilo} type="text" defaultValue={houseNumber} onChange={(e) => { setHouseNumber(e.target.value) }} />
            </div>
            <div class={style.grid_item}>
                <label>Cap</label>
                
                <input id={style.input_profilo} type="text" defaultValue={cap} onChange={(e) => { setCap(e.target.value) }} />
            </div>
            <div class={style.grid_item}>
                <label>City</label>
                
                <input id={style.input_profilo} type="text" defaultValue={city} onChange={(e) => { setCity(e.target.value) }}/>
            </div>
            <div class={style.grid_item}>
                <label>Region</label>
                
                <input id={style.input_profilo} type="text" defaultValue={region} onChange={(e) => { setRegion(e.target.value) }}/>
            </div>
            <div class={style.grid_item}>
                <label>Nation</label>
                
                <input id={style.input_profilo} type="text" defaultValue={nation} onChange={(e) => { setNation(e.target.value) }}/>
            </div>
            <button id={style.button_modifica} type="button" class="btn btn-danger" onClick={handleSubmit}>Apply Changes</button>
            <p class="error-text" style = {{textAlign: "center"}}>&nbsp;  {formError}</p>
            
            




        </div>


        ) : (
            <div id={style.box_profile} >
            <div id={style.div_titolo}>
                <h2 class={style.titolo_account}>Account Information</h2>
                <i id={style.icona_modifier} class="bi bi-pencil-square"></i>
            </div>
            <div class={style.grid_item}>
                    <label>Name</label>
                    <input id={style.input_profilo} class="form-control" type="text" value={name} readOnly/>
                
            </div>
            <div class={style.grid_item}>
                <label>Surname:</label>
                <input id={style.input_profilo} type="text" value={surname} readOnly />
            </div>
            <div class={style.grid_item}>
                <label>Email:</label>
                
                <input id={style.input_profilo} type="text" value={email} readOnly />
            </div>
            <div class={style.grid_item}>
                <label>Password:</label>
                
                <input id={style.input_profilo} type="password" value={password} readOnly/>
            </div>
            <div class={style.grid_item}>
                <label>Telephone Number</label>
                
                <input id={style.input_profilo} type="text" value={telephone} readOnly/>
            </div>


            <hr></hr>


            <div class={style.grid_item}>
                <label>Address</label>
                
                <input id={style.input_profilo} type="text" value={address} readOnly/>
            </div>
            <div class={style.grid_item}>
                <label>House Nm.</label>
                
                <input id={style.input_profilo} type="text" value={houseNumber} readOnly/>
            </div>
            <div class={style.grid_item}>
                <label>Cap</label>
                
                <input id={style.input_profilo} type="text" value={cap} readOnly/>
            </div>
            <div class={style.grid_item}>
                <label>City</label>
                
                <input id={style.input_profilo} type="text" value={city} readOnly/>
            </div>
            <div class={style.grid_item}>
                <label>Region</label>
                
                <input id={style.input_profilo} type="text" value={region} readOnly/>
            </div>
            <div class={style.grid_item}>
                <label>Nation</label>
                
                <input id={style.input_profilo} type="text" value={nation} readOnly/>
            </div>

            <hr></hr>

            <div class={style.grid_item}>
                <label>Payment Method</label>
                <input id={style.input_profilo} type="text" value={type} readOnly/>
            </div>

            <div class={style.grid_item}>
                <label>Card Number</label>
                <input id={style.input_profilo} type="text" value={censurato} readOnly/>
            </div>
            <div class={style.grid_item}>
                <label>Expiration date</label>
                <input id={style.input_profilo} type="text" value={exp} readOnly/>
            </div>
            <div class={style.grid_item}>
                <label>Pin</label>
                <input id={style.input_profilo} type="password" value={pin} readOnly/>
            </div>
            <button id={style.button_modifica} type="button" style={{display: 'none'}}>Apply Changes</button>



        </div>
        )
      }
      </>

        








        
        
        
    )
}


export default Account;


