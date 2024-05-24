import React from 'react';
import style from '../profile.module.css';
import Navbar from '../components/navbar';
import NavbarP from '../components/Navbar_Profile';

function Profile() {
    return (
        <>
        <div>
            
        </div>
            <NavbarP />
        <div className={style.container}>
            <div className={style.grid}>
                <div className={style.grid_item}>1</div>
                <div className={style.grid_item}>2</div>
                <div className={style.grid_item}>3</div>
            </div>
        </div>
        </>
    );
  }

  export default Profile;



  