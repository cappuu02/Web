<<<<<<< Updated upstream
import React, {  useState } from 'react';
import { Link } from 'react-router-dom';


=======
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const cookie1 = document.cookie.split('; ').find((row) => row.startsWith('Email='));
    
    if (cookie1) {
      var hasEmailCookie = cookie1!== undefined;
   
      
    }
>>>>>>> Stashed changes

function Reset_Password(){

  const [pass1Rec, setPass1Rec] = useState("");
  const [pass2Rec, setPass2Rec] = useState("");

  const [passError, setPassError] = useState("");
  const [newError, setNewError] = useState("");

  


  const handleNew = async (e) => {
    e.preventDefault();

    const cookie = document.cookie
    .split('; ')
<<<<<<< Updated upstream
<<<<<<< Updated upstream
    .find((row) => row.startsWith('isAuthenticated='));
=======
    .find((row) => row.startsWith('Email='));
>>>>>>> Stashed changes
    const email = cookie.split('=')[1];
    if (cookie) {
      const email = cookie.split('=')[1];
=======
    .find((row) => row.startsWith('Email='));
    if (cookie) {
      var email = cookie.split('=')[1];
>>>>>>> Stashed changes
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

<<<<<<< Updated upstream
        return;
=======
        document.cookie = `Email=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`;
        window.location.href = '/Login';
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
  }

  
=======
  
}
const handleReturn = async () => {
  window.location.href = '/';
}

const handleRead = async () => {
  if(!hasEmailCookie){
  window.location.href = '/Login';
  }
}

useEffect(() => {
  handleRead();
  
  
}, []);
>>>>>>> Stashed changes

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
<<<<<<< Updated upstream
=======
              <Link to="/Login" ><button id='return_login'>Return to Login</button></Link>
>>>>>>> Stashed changes
              <p class="good-text-new">&nbsp;  {newError}</p>
              <p class="error-text-new">&nbsp;  {passError}</p>
            </form>
          </div>
        </div>
<<<<<<< Updated upstream
=======
        <button id='return_home_btn' onClick={handleReturn}>Return Home</button>
>>>>>>> Stashed changes
      </div>        
        </>
    )
}


export default Reset_Password;