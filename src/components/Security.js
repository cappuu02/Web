import style from '../profile.module.css'


function Security(){
    return(
        <>
        <div>
                <div id={style.box_profile2} >
                    <h2 id={style.title_2}>Email Changer</h2>
                    <p style={{textAlign: 'center'}}>If you want to change your email address click the button below to start!</p>
                    <input id={style.input_profilo2} type="text" value="lucacapuccini13@gmail.com" readonly/>                    
                    <button id={style.button_email_reset2} type="button" class="btn btn-danger">Reset</button>
                </div>
                <div id={style.box_profile3} >
                    <h2 id={style.title_2}>Password Changer</h2>
                    <p style={{textAlign: 'center'}}>If you want to change your account password click the button and wait code authenticator</p>
                    <div>
                        <input id={style.input_profilo3} type="text" value="Readonly 1" readonly/>
                        <button id={style.button_psw_reset2} type='button' class="btn btn-danger">Reset</button>
                    </div>

                </div>
                <div id={style.box_profile4} >
                    <h2 id={style.title_2}>Phone Number Changer</h2>
                    <p style={{textAlign: 'center'}}>If you want to change tour account's telephone number follow the steps below</p>
                    <div>
                        <input id={style.input_profilo3} type="text" value="Readonly 1" readonly/>
                        <button id={style.button_psw_reset2} type='button' class="btn btn-danger">Reset</button>
                    </div>

                </div>
        </div>

        
        </>
    )
}


export default Security;