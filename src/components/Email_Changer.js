import React, {  useState } from 'react';
import { Link } from 'react-router-dom';



const cookie = document.cookie.split('; ')
    .find((row) => row.startsWith('isAuthenticated='));
    
    if (cookie) {
      var isAuthenticated = cookie.split('=')[1];
      var utente_email = cookie.split(',')[1];

    } 



function Change_Email(){

  const [email, setEmail] = useState("");


  const [emailError, setEmailError] = useState("");
  const [newError, setNewError] = useState("");

  const validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }


  const handleNew = async (e) => {
    e.preventDefault();
    
    if(!isAuthenticated){
      window.location.href = '/Login';
    }

    if (!validateEmail(email) || email === "" ) {
      setEmailError("Please enter a valid email address.");
      
      setTimeout(() => {
        setEmailError("");
      }, 700); 
      return;
    }
    if (email === utente_email){
      setEmailError("This is your current email address");
      
      setTimeout(() => {
        setEmailError("");
      }, 700); 
      return;
    }
    else{

    let change = 1;
    let rec = 1;

    try {
      const response = await fetch('http://localhost:3001/utenti', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, change }),
      });

      const esito = await response.text();

      if (esito === 'Email sent') {
        setNewError("Email Sent")

        setTimeout(() => {
          setNewError("")
        }, 700);

        document.cookie = `Email=${email}; max-age=${60 * 60 * 24 * 7}; path=/`;

        try {
          const response = await fetch('http://localhost:3001/send-email', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, rec }),
          });
        

        
        return;
      }catch (error) {
        console.error(error);
        alert('An error occurred');
      }
      }
      if (esito === 'Email already used') {
        setEmailError("This email is already used");
      

      setTimeout(() => {
        setEmailError("")
      }, 700);
      return;
        
      }
      
    } catch (error) {
      console.error(error);
      alert('An error occurred');
      alert('An error occurred');
      
    }
  
  }}

  const handleReturn = async () => {
    window.location.href = '/Profile_Security';
  }
  

    return(
        <>
      <div id='body_sign_inup'>
        <div className="container_login" id="container_login">
          <div className="form-container sign-in" style={{justifyContent: 'center', display: 'flex', alignItems: 'center', width: '100%'}}>
            <form  style = {{marginBottom: "0%"}}>
              <h1>Change Email</h1>
              <span style={{fontSize: "15px"}}>Add your new email. It will be update after the confirm.</span>
              <span style={{fontSize: "15px", marginBottom: "5%"}}>If you'll have any problems, contact us on the dedicated page</span>
              <input style={{fontSize: "15px"}} id='psw_reset_login' type='email' placeholder='New email' onChange={(e) => { setEmail(e.target.value) }} />
              <button onClick={handleNew}>Confirm</button>
              <p class="good-text-new">&nbsp;  {newError}</p>
              <p class="error-text-new">&nbsp;  {emailError}</p>
            </form>
          </div>
        </div>
        <button id='return_home_btn' onClick={handleReturn}>Return Profile</button>
      </div>        
        </>
    )
}


export default Change_Email;