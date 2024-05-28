import style from '../profile.module.css'


function Security(){
    return(
        <>
        <div>
                <div id={style.box_profile2} >
                    <h2 id={style.title_2}>Email Changer</h2>
                    <p style={{textAlign: 'center'}}>If you want to change your email address click the button below to start!</p>
                    <input id={style.input_profilo2} type="text" value="lucacapuccini13@gmail.com" readonly/>                    
                    <button id={style.button_email_reset} type="button" class="btn btn-danger">Reset</button>
                </div>
                <div id={style.box_profile3} >
                    <h2 id={style.title_2}>Email Changer</h2>
                    <p style={{textAlign: 'center'}}>If you want to change your email address click the button below to start!</p>
                    <input id={style.input_profilo2} type="text" value="lucacapuccini13@gmail.com" readonly/>                    
                    <button id={style.button_email_reset} type="button" class="btn btn-danger">Reset</button>
                </div>
             
        </div>

        
        </>
    )
}


export default Security;