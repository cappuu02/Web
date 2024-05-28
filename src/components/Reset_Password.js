import React, {  useState } from 'react';
import { Link } from 'react-router-dom';



function Reset_Password(){

  const [pass1Rec, setPass1Rec] = useState("");
  const [pass2Rec, setPass2Rec] = useState("");

  const [passError, setPassError] = useState("");
  const [newError, setNewError] = useState("");

  


  const handleNew = async (e) => {
    e.preventDefault();

    const cookie = document.cookie
    .split('; ')
    .find((row) => row.startsWith('isAuthenticated='));
    const email = cookie.split('=')[1];
    if (cookie) {
      const email = cookie.split('=')[1];
      // Now you can use the email value
      console.log(email);
    } else {
      // Handle the case when the cookie is not found
      throw new Error('Email cookie not found');
    }

    let pass = pass1Rec;
    let pass2 = pass2Rec;
    let newPass = 1;

    if ( pass === "" || pass2 === "" ) {
      
      setPassError("Please fill all fields.");
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

        return;
      }
      if (esito === 'pass exists') {
        setPassError("You already used this password");
      

      setTimeout(() => {
        setPassError("")
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
  }else{
    setPassError("Password do not match")
    setTimeout(() => {
      setPassError("")
    }, 700);
    return;
      
    
    
  }
  }

  

    return(
        <>
      <div id='body_sign_inup'>
        <div className="container_login" id="container_login">
          <div className="form-container sign-in" style={{justifyContent: 'center', display: 'flex', alignItems: 'center', width: '100%'}}>
            <form onSubmit={handleNew} style = {{marginBottom: "0%"}}>
              <h1>Reset Password</h1>
              <span style={{fontSize: "15px"}}>Add your new password. It will be update after the confirm.</span>
              <span style={{fontSize: "15px", marginBottom: "5%"}}>If you'll have any problems, contact us on the dedicated page</span>
              <input style={{fontSize: "15px"}} id='psw_reset_login' type='password' placeholder='New password' onChange={(e) => { setPass1Rec(e.target.value) }} />
              <input id='psw_reset_confirm_login' type='password' placeholder='Confirm New Password' onChange={(e) => { setPass2Rec(e.target.value) }} />
              <button>Confirm</button>
              <p class="good-text-new">&nbsp;  {newError}</p>
              <p class="error-text-new">&nbsp;  {passError}</p>
            </form>
          </div>
        </div>
      </div>        
        </>
    )
}


export default Reset_Password;