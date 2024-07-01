import React, {  useState } from 'react';
import { Link } from 'react-router-dom';

const cookie = document.cookie.split('; ')
    .find((row) => row.startsWith('isAuthenticated='));
    
    if (cookie) {
      var utente_email = cookie.split(',')[1];
      var isAuthenticated = cookie.split('=')[1];
      
    }

function Reset_Password(){

  const [pass1Rec, setPass1Rec] = useState("");
  const [pass2Rec, setPass2Rec] = useState("");

  const [passError, setPassError] = useState("");
  const [newError, setNewError] = useState("");

  


  const handleNew = async (e) => {
    e.preventDefault();
    
    if(!isAuthenticated){
      window.location.href = '/Login';
    }

    let pass = pass1Rec;
    let pass2 = pass2Rec;
    let newPass = 1;
    let email = utente_email;

    

    if ( pass === "" || pass2 === "" ) {
      
      setPassError("Please fill all fields.");
      setTimeout(() => {
        setPassError("");
      
}, 700);

      return;
    }

    
if (!/^\d+$/.test(pass)) {

  // password is only composed of digits

  setPassError("Password should be only digits");

  setTimeout(() => {

    setPassError("");

  }, 700);

  return;

}

    if (pass === pass2){
    
    try {
      const response = await fetch('http://localhost:3001/utenti', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, pass, newPass }),
      });

      const esito = await response.text();

      if (esito === 'pass changed') {
        setNewError("The password has been changed")

        setTimeout(() => {
          setNewError("")
        }, 700);

        window.location.href = "/Profile_Account";
      }
      if (esito === 'pass exists') {
        setPassError("You already used this password");
      

      setTimeout(() => {
        setPassError("")
      }, 700);
      return;
        
      }
      
    } catch (error) {
      console.error(error);
      alert('An error occurred');
    }
  }else{
    setPassError("Password do not match")
    setTimeout(() => {
      setPassError("")
    }, 700);
    return;
      
    
    
  }
  }
  const handleReturn = async () => {
    window.location.href = '/Profile_Security';
  }
  

    return(
        <>
      <div id='body_sign_inup'>
        <div className="container_login" id="container_login">
          <div className="form-container sign-in" style={{justifyContent: 'center', display: 'flex', alignItems: 'center', width: '100%'}}>
            <form onSubmit={handleNew} style = {{marginBottom: "0%"}}>
              <h1>Change Password</h1>
              <span style={{fontSize: "15px"}}>Add your new password. It will be updated after the confirm.</span>
              <span style={{fontSize: "15px", marginBottom: "5%"}}>If you'll have any problems, contact us on the dedicated page</span>
              <input style={{fontSize: "15px"}} id='psw_reset_login' type='password' placeholder='New password' onChange={(e) => { setPass1Rec(e.target.value) }} />
              <input id='psw_reset_confirm_login' type='password' placeholder='Confirm New Password' onChange={(e) => { setPass2Rec(e.target.value) }} />
              <button>Confirm</button>
              <p class="good-text-new">&nbsp;  {newError}</p>
              <p class="error-text-new">&nbsp;  {passError}</p>
            </form>
          </div>
        </div>
        <button id='return_home_btn' onClick={handleReturn}>Return Profile</button>
      </div>        
        </>
    )
}


export default Reset_Password;