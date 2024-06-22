
import React, {  useState } from 'react';


    const cookie = document.cookie.split('; ')
    .find((row) => row.startsWith('isAuthenticated='));
    const cookie1 = document.cookie.split('; ')
    .find((row) => row.startsWith('Telephone='));
    
    
    if (cookie ) {
   
      var utente_email = cookie.split(',')[1];
      var isAuthenticated = cookie.split('=')[1];
      
    }
    if (cookie1 ) {
      var telefono_utente = cookie1.split('=')[1];
     
      
    }

   
function Telephone_Changer(){

  const [telephone, setTelephone] = useState("");
  const [telephone1, setTelephone1] = useState("");

  const [telError, setTelError] = useState("");
  const [newError, setNewError] = useState("");

  


  const handleNew = async (e) => {
    e.preventDefault();

<<<<<<< Updated upstream
=======
    if(!isAuthenticated){
      window.location.href = '/Login';
    }

>>>>>>> Stashed changes
   
    let telefono = telephone;
    let telCheck = 1;
    let email = utente_email;
    let phone = 1;

    console.log(telefono_utente)

    if (/[^0-9]/.test(telefono)) {

      setTelError("Number shouldn't contain any non-digit characters");
    
      setTimeout(() => {
    
        setTelError("")
    
      }, 700);
    
      return;
    
    }
    

    
    try {
      const response = await fetch('http://localhost:3001/indirizzi', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ utente_email, telefono, telCheck }),
      });
      const esito = await response.text();
      if (telefono === ''){
        setTelError("Please fill all fields");
        
  
          setTimeout(() => {
            setTelError("")
          }, 700);
          return;
          }
      
      
      if(telefono === telefono_utente){
        setTelError("You are already using this number");
        
  
          setTimeout(() => {
            setTelError("")
          }, 700);
          return;
          }
      if (esito === 'GoodNumber') {
        setNewError("Number accepted");
      

      setTimeout(() => {
        setNewError("")
      }, 700);
    
      

        window.location.href = "/Profile_Account";
      return;

      }
      if (esito === 'BadNumber'){
        setTelError("This number is already in use");
      

        setTimeout(() => {
          setTelError("")
        }, 700);
        return;
        }
        else{
          alert("miao")
        }
      

    
    } catch (error) {
      console.error(error);
      alert('An error occurred');
    }
  }

<<<<<<< Updated upstream
  
=======
  const handleReturn = async () => {
    window.location.href = '/Profile_Security';
  }
>>>>>>> Stashed changes

    return(
        <>
      <div id='body_sign_inup'>
        <div className="container_login" id="container_login">
          <div className="form-container sign-in" style={{justifyContent: 'center', display: 'flex', alignItems: 'center', width: '100%'}}>
            <form style = {{marginBottom: "0%"}}>
              <h1>Change Phone Number</h1>
              <span style={{fontSize: "15px"}}>Add your new phone number. It will be updated after the confirm.</span>
              <span style={{fontSize: "15px", marginBottom: "5%"}}>If you'll have any problems, contact us on the dedicated page</span>
              <input style={{fontSize: "15px"}} id='psw_reset_login' type='text' placeholder='New Number' onChange={(e) => { setTelephone(e.target.value) }} />
              <button onClick={handleNew}>Confirm</button>
              <p class="good-text-new">&nbsp;  {newError}</p>
              <p class="error-text-new">&nbsp;  {telError}</p>
            </form>
          </div>
        </div>
<<<<<<< Updated upstream
=======
        <button id='return_home_btn' onClick={handleReturn}>Return Profile</button>
>>>>>>> Stashed changes
      </div>        
        </>
    )
}


export default Telephone_Changer;