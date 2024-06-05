import React, { useState, useEffect } from 'react';
import NavbarP from '../components/Navbar_Profile';
import Account from '../components/Account'
import Navbar from '../components/navbar';
import style from '../profile.module.css'
import NavbarPR from '../components/Navbar_ProfileR';

    function Profile() {
        const [showButton, setShowButton] = useState(false);

        useEffect(() => {
          const handleMouseMove = (event) => {
            if (event.clientX < 50) {  // Aggiorna questa soglia a 50 pixel
              setShowButton(true);
            } else {
              setShowButton(false);
            }
          };
      
          window.addEventListener('mousemove', handleMouseMove);
      
          return () => {
            window.removeEventListener('mousemove', handleMouseMove);
          };
        }, []);
    return (
        <>  
            <div id={style.body_profilo}>
                <Navbar />
                <div className="App">
             <NavbarPR showButton={showButton} />
                </div>
                <NavbarP />
                <Account />
            </div>
        </>
    );
  }

  export default Profile;




