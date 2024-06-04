import React from 'react';
import NavbarP from '../components/Navbar_Profile';
import Navbar from '../components/navbar';
import style from '../profile.module.css'
import Orders from '../components/Orders';


    function Profile() {
   
    return (
        <>  
            <div id={style.body_profilo}>
                <Navbar />
                <NavbarP />
                <Orders />
            </div>
        </>
    );
  }

  export default Profile;




