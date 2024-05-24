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
              <span>Use your email and password</span>
              <input type='email' placeholder='Email' />
              <input type='password' placeholder='Password' />
              <Link to="/MissPassword">Forgot your password?</Link>
              <button>Sign in</button>
              <button id='registerCELL'>Register</button>
            </form>
          </div>
        </div>
      </div>        
        </>
    )
}


export default MissPassword;