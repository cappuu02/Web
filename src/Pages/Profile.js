import React from 'react';
import style from '../profile.module.css';
import Navbar from '../components/navbar'

function Profile() {
    return (
        <>
            <div id={style.body_profile}>
                <div className={style.container}>
                    <nav id={style.profile_navbar} className={style.flex_column}>
                        <button id={style.button1_profile} className={style.btn_navbar_profile}><li id={style.profile_li}>account settings</li></button>
                        <button id={style.button2_profile} className={style.btn_navbar_profile}><li id={style.profile_li}>Orders</li></button>
                        <button id={style.button3_profile} className={style.btn_navbar_profile}><li id={style.profile_li}>Security</li></button>
                    </nav>
                </div>
                <div className={style.container_field}>
                    <input type="Name" readonly class="form-control-plaintext" id="floatingPlaintextInput" placeholder="Name..." value="Luca Capuccini"/>
                </div>
            </div>
        </>
    );
  }

  export default Profile;



  