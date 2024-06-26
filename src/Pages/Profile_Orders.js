import React, { useState, useEffect } from 'react';
import NavbarP from '../components/Navbar_Profile';
import Navbar from '../components/navbar';
import style from '../profile.module.css'
import Orders from '../components/Orders';
import NavbarPR from '../components/Navbar.profileR';

    function Profile() {
        const [isCursorNear, setIsCursorNear] = useState(false);

        useEffect(() => {
          const handleMouseMove = (event) => {
            if (event.clientX < 330) {  // Soglia aggiornata a 50 pixel
              setIsCursorNear(true);
            } else {
              setIsCursorNear(false);
            }
          };
      
          window.addEventListener('mousemove', handleMouseMove);
      
          return () => {
            window.removeEventListener('mousemove', handleMouseMove);
          };
        }, []);
    return (
        <>  
            <div id={style.body_profilo_orders}>
                <Navbar />
                <NavbarP />
                <div className="App">
      <NavbarPR showToggleButton={isCursorNear} />
    </div>
                <Orders />
            </div>
        </>
    );
  }

  export default Profile;




