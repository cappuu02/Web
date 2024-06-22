import React, {  useState } from 'react';
import { Link } from 'react-router-dom';
import style from "../Sign_inup.css"



function MissPassword(){

  const [emailRec, setEmailRec] = useState("");

  const [emailError, setEmailError] = useState("");
  const [recError, setRecError] = useState("");




  const validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  const handleRec = async (e) => {
    e.preventDefault();

    let email = emailRec;
    let rec = 1;

    if (!validateEmail(email) & email != "" ) {
      setEmailError("Please enter a valid email address.");
      
      setTimeout(() => {
        setEmailError("");
      }, 700); 
      return;
    }

    

    if (email === "") {
      
      setEmailError("Please fill all fields.");
      setTimeout(() => {
        setEmailError("");
      
}, 700);

      return;
    }

    try {
      const response = await fetch('http://localhost:3001/utenti', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, rec }),
      });

      const esito = await response.text();

      if (esito === 'Email sent') {
        setRecError("Email sent")

        setTimeout(() => {
          setRecError("")
        }, 700);

        document.cookie = `Email=${emailRec}; max-age=${60 * 60 * 24 * 7}; path=/`;

        try {
          const response = await fetch('http://localhost:3001/send-email', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email }),
          });
        

        
        return;
      }catch (error) {
        console.error(error);
        alert('An error occurred');
      }
      }
      if (esito === 'email not in use') {
        setEmailError("This email is not registered");
      

      setTimeout(() => {
        setEmailError("")
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

<<<<<<< Updated upstream
=======
  const handleReturn = async () => {
    window.location.href = '/';
  }

>>>>>>> Stashed changes
    return(
        <>
      <div id='body_sign_inup' >
        <div className="container_login" id="container_login" >
          <div className="form-container sign-in" style={{justifyContent: 'center', display: 'flex', alignItems: 'center', width: '100%'}}>
            <form onSubmit={handleRec} style = {{marginBottom: "0%"}}>
              <h1>Forgotten Password</h1>
              <span>Insert your email and we'll send you the instruction for change the account email</span>
              <span>If you will have any problems, contact us on the dedicated page</span>
              <input id='email_psw' type='email' placeholder='Email' onChange={(e) => { setEmailRec(e.target.value) }} />
              <button >Send</button>
              <Link to="/Login" ><button id='return_login'>Return to Login</button></Link>
              <p class="good-text-rec">&nbsp;  {recError}</p>
              <p class="error-text-rec">&nbsp;  {emailError}</p>
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


export default MissPassword;
;
