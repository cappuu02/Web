import React from 'react';
import { Link } from 'react-router-dom';

function Reset_Password(){
    return(
        <>
      <div id='body_sign_inup'>
        <div className="container_login" id="container_login">
          <div className="form-container sign-in" style={{justifyContent: 'center', display: 'flex', alignItems: 'center', width: '100%'}}>
            <form>
              <h1>Reset Password</h1>
              <span style={{fontSize: "15px"}}>Add your new password. It will be update after the confirm.</span>
              <span style={{fontSize: "15px", marginBottom: "5%"}}>If you will have any problems, contact us on the dedicate page</span>
              <input style={{fontSize: "15px"}} id='psw_reset_login' type='email' placeholder='New password' />
              <input id='psw_reset_confirm_login' type='email' placeholder='Confirm New Password' />
              <button>Confirm</button>
            </form>
          </div>
        </div>
        <button id='return_home_btn'>Return Home</button>
      </div>        
        </>
    )
}


export default Reset_Password;