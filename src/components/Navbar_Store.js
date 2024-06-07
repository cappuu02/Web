import style from '../profile.module.css';
import React, { useEffect } from 'react';
import settingimage from '../Images/setting.png'
import { Link } from 'react-router-dom';
import lensesimage from "../Images/lenses.png"


function Navbar_Profile(){
    
        return(
        <>
        <i id={style.icon_list} className={`bi bi-list`}></i>
        <nav id={style.navbar_profile}>
                    <ul id={style.elenco_ul}>
                        <li>
                            <div className={style.logoProfile}>
                                <i class="bi bi-shop" id={style.logo_shop_nav} ></i>
                                <span  className={style.title_store_logo}>MI-Store</span>
                            </div>
                            
                        </li>
                        <Link to="/Store_Camera"><li id={style.li_profile}><a id={style.link_profile}>
                            <i className={`bi bi-camera ${style.icon}`}></i>
                            <span id='Account' className={style.nav_item}>Camera</span>
                        </a></li></Link>
                        <Link to="/Store_Lens" ><li id={style.li_profile}><a id={style.link_profile}>
                            <i className={`bi bi-image-alt ${style.icon}`}></i>
                            <span id='Orders' className={style.nav_item}>Lenses</span>
                        </a></li></Link>
                        <Link to="/Store_Accessori"><li id={style.li_profile}><a id={style.link_profile}>
                            <i className={`bi bi-transparency ${style.icon}`}></i>
                            <span id='Security' className={style.nav_item}>Accessories</span>
                        </a></li></Link>
                    </ul>
                </nav>
        </>
    )
}


export default Navbar_Profile;


