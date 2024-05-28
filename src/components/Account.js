
import style from '../profile.module.css'
import React, {  useState, useEffect } from 'react';






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

    const [password, setPassword] = useState('');

    const handleRead = async () => {
        
        
        
        
        try {
          const response = await fetch('http://localhost:3001/indirizzi', {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
            
          });
    
          const userData1 = await response.text();
          const userDataObj1 = JSON.parse(userData1);
          

          setName(userDataObj1[0].nome);

          setSurname(userDataObj1[0].cognome);
          setEmail(userDataObj1[0].email);
          setTelephone(userDataObj1[0].telefono);
          setAddress(userDataObj1[0].via);
          setHouseNumber(userDataObj1[0].civico);
          setCap(userDataObj1[0].cap);
          setCity(userDataObj1[0].citta);
          setRegion(userDataObj1[0].regione);
          setNation(userDataObj1[0].nazione);
          console.log(email)
        
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
        <div id={style.box_profile} >
            <h2 class={style.titolo_account}>Account Information</h2>
            <div class={style.grid_item}>
                <label>Name:</label>
                <input id={style.input_profilo} type="name" value={name} readonly/>
            </div>
            <div class={style.grid_item}>
                <label>Surname:</label>
                <input id={style.input_profilo} type="surname" value={surname} readonly/>
            </div>
            <div class={style.grid_item}>
                <label>Email:</label>
                <input id={style.input_profilo} type="email" value={email} readonly/>
            </div>
            <div class={style.grid_item}>
                <label>Password:</label>
                <input id={style.input_profilo} type="password" value={password} readonly/>
            </div>
            <div class={style.grid_item}>
                <label>Telephone Number</label>
                <input id={style.input_profilo} type="phone" value={telephone} readonly/>
            </div>
            <hr></hr>
            <div class={style.grid_item}>
                <label>Address</label>
                <input id={style.input_profilo} type="address" value={address} readonly/>
            </div>
            <div class={style.grid_item}>
                <label>House Nm.</label>
                <input id={style.input_profilo} type="house" value={houseNumber} readonly/>
            </div>
            <div class={style.grid_item}>
                <label>Cap</label>
                <input id={style.input_profilo} type="cap" value={cap} readonly/>
            </div>
            <div class={style.grid_item}>
                <label>Region</label>
                <input id={style.input_profilo} type="region" value={region} readonly/>
            </div>
            <div class={style.grid_item}>
                <label>Nation</label>
                <input id={style.input_profilo} type="nation" value={nation} readonly/>
            </div>
        </div>
        </>
    )
}


export default Account;


