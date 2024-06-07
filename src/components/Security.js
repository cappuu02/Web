import style from '../profile.module.css'
import { Link } from 'react-router-dom';


function Security(){
    return(
        <>
                <div id={style.box_profile2} >
                    <h2 id={style.title_2}>Email Changer</h2>
                    <p style={{textAlign: 'center'}}>If you want to change your email address click the button below to start!</p>
                    <input id={style.input_profilo2} type="text" value="lucacapuccini13@gmail.com" readonly/>                    
                    <button id={style.button_email_reset2} type="button" class="btn btn-danger">change</button>

                    <hr></hr>
                
                    <h2 id={style.title_2}>Password Changer</h2>
                    <p style={{textAlign: 'center'}}>If you want to change your account password click the button and wait code authenticator</p>
                    <div>
                        <button id={style.button_psw_reset2} type='button' class="btn btn-danger">Reset</button>
                    </div>

                    <hr></hr>
                
                
                    <h2 id={style.title_2}>Phone Number Changer</h2>
                    <p style={{textAlign: 'center'}}>If you want to change tour account's telephone number click the button to start</p>
                    <div>
                        <input id={style.input_profilo3} type="text" value="Readonly 1" readonly/>
                        <button id={style.button_psw_reset2} type='button' class="btn btn-danger">change</button>
                    </div>

                    <hr></hr>
                    <h2 id={style.title_2}>Card Info</h2>
                    <p style={{textAlign: 'center'}}>If you want to add/update your account's card info click the button</p>
                    <div>
                        <input id={style.input_profilo4} type="text"  readonly/>
                        <input id={style.input_profilo4} type="text"  readonly/>
                        <input id={style.input_profilo4} type="text"  readonly/>
                        <input id={style.input_profilo4} type="password"  readonly/>
                        <Link to = "/Profile_Security/Password_Check" style = {{justifyContent: 'center'}}><button id={style.button_psw_reset2} type='button' class="btn btn-danger">Update</button></Link>
                    </div>



                </div>
        </>
    )
}


export default Security;