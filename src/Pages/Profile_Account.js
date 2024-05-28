import React from 'react';
import NavbarP from '../components/Navbar_Profile';
import Account from '../components/Account'
import Navbar from '../components/navbar';
import style from '../profile.module.css'


    function Profile() {
   
    return (
        <>  
            <div id={style.body_profilo}>
                <Navbar />
                <NavbarP />
                <Account />
            </div>
        </>
    );
  }

  export default Profile;




