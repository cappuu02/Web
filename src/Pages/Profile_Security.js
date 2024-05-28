import React from 'react';
import NavbarP from '../components/Navbar_Profile';
import Security from '../components/Security'
import Navbar from '../components/navbar'
import style from '../profile.module.css'


    function Profile() {
   
    return (
        <>  
            
            <Navbar />
            <div id={style.body_profilo}>
                <NavbarP />
                <Security />
            </div>
        </>
    );
  }

  export default Profile;







  

