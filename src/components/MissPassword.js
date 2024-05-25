import React from 'react';
import { Link } from 'react-router-dom';

function MissPassword(){
    return(
        <>
      <div id='body_sign_inup'>
        <div className="container_login" id="container_login">
          <div className="form-container sign-in" style={{justifyContent: 'center', display: 'flex', alignItems: 'center', width: '100%'}}>
            <form>
              <h1>Forgotten Password</h1>
              <span>Insert your email and we'll send you the instruction for change the account email</span>
              <span>If you will have any problems, contact us on the dedicate page</span>
              <input id='email_psw' type='email' placeholder='Email' />
              <button id='miss_psw_btn' style={{width: '50%'}}>Send</button>
              <button id='return_login' style={{width: '50%'}}>Return to Login</button>
            </form>
          </div>
        </div>
      </div>        
        </>
    )
}


export default MissPassword;