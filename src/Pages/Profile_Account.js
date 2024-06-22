import React from 'react';
import NavbarP from '../components/Navbar_Profile';
import Account from '../components/Account'
import Navbar from '../components/navbar';


    function Profile() {
<<<<<<< Updated upstream
   
    return (
=======
        const [isCursorNear, setIsCursorNear] = useState(false);

        useEffect(() => {
          const handleMouseMove = (event) => {
            if (event.clientX < 430) {  // Soglia aggiornata a 50 pixel
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
>>>>>>> Stashed changes
        <>  
            <div>
                <NavbarP />
            </div>
            <Account />
        </>
    );
  }

  export default Profile;




