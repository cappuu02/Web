import React from 'react';
import style from '../profile.module.css';
import Navbar from '../components/navbar';
import NavbarP from '../components/Navbar_Profile';
import Account from '../components/Account'
import Security from '../components/Security'


    function Profile() {
   
    return (
        <>
            <NavbarP />
        <div id='Account_page'>
            <Account />
        </div>
        <div id='Security_page'>
            
        </div>
        
        </>
    );
  }

  export default Profile;




