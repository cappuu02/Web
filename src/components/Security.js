import style from '../profile.module.css'


function Security(){
    return(
        <>
        <div>
            <div id={style.container_profile_email} className='container'>
                <div id={style.box_profile} >
                    <h2 id={style.title_2}>Manage your Email</h2>
                    <hr></hr>
                    <p style={{textAlign: 'center'}}>If you want to change your email address click the button below to start!</p>
                    <input type="text" id={style.numberphone_field} name="numberphone" value="+39 366 288 3732" />
                    <button id={style.button_email_reset} type="button" class="btn btn-danger">Reset</button>
                </div>
            </div>
        </div>

        <div>
            <div id={style.container_profile_email} className='container'>
                <div id={style.box_profile} >
                    <h2 id={style.title_2}>Manage your Password</h2>
                    <hr></hr>
                    <p style={{textAlign: 'center'}}>If you want to change your Password address click the button below to change it!</p>
                    <input type="text" id={style.pass_reset_field} name="password" value="password" />
                    <button id={style.button_email_reset} type="button" class="btn btn-danger">Reset</button>
                </div>
            </div>
        </div>
        </>
    )
}


export default Security;