import React, {  useState } from 'react';


const cookie = document.cookie.split('; ')
    .find((row) => row.startsWith('isAuthenticated='));
    
    if (cookie) {
      var utente_email = cookie.split(',')[1];
      var isAuthenticated = cookie.split('=')[1];
      
    }

function Password_Check(){

  const [pass1Rec, setPass1Rec] = useState("");

  const [passError, setPassError] = useState("");
  const [newError, setNewError] = useState("");

  


  const handleNew = async (e) => {
    e.preventDefault();

    let password = pass1Rec;
    let login = 1;
    let email = utente_email;

    

    if ( password === "") {
      
      setPassError("Please fill all fields.");
      setTimeout(() => {
        setPassError("");
      
}, 700);

      return;
    }
    
    try {
      const response = await fetch('http://localhost:3001/utenti', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password, login }),
      });

      const esito = await response.text();

      if (esito === 'Login successful') {
        setNewError("Correct Password")

        setTimeout(() => {
          setNewError("")
        }, 700);

        window.location.href = "/Profile_Security/Card_Changer";
      }
      if (esito === 'This email is not registered') {
        setPassError("Wrong Password");
      

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
  
  }

  

    return(
        <>
      <div id='body_sign_inup'>
        <div className="container_login" id="container_login">
          <div className="form-container sign-in" style={{justifyContent: 'center', display: 'flex', alignItems: 'center', width: '100%'}}>
            <form onSubmit={handleNew} style = {{marginBottom: "0%"}}>
              <h1>Password Check</h1>
              <span style={{fontSize: "15px"}}>To change your cards info first verify your password</span>
              <span style={{fontSize: "15px", marginBottom: "5%"}}></span>
              <input style={{fontSize: "15px"}} id='psw_reset_login' type='password' placeholder='Password' onChange={(e) => { setPass1Rec(e.target.value) }} />
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


export default Password_Check;