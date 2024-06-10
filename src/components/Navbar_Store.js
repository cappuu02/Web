import style from '../profile.module.css';
import React, { useEffect } from 'react';
import settingimage from '../Images/setting.png'
import { Link } from 'react-router-dom';
import lensesimage from "../Images/lenses.png"


function Navbar_Store(){
    
        return(
        <>
        <i id={style.icon_list_Store} className={`bi bi-list`}></i>
        <nav className={style.navbar_Store}>
                    <ul id={style.elenco_ul}>
                        <li>
                            <div className={style.logoProfile_Store}>
                                <i class="bi bi-shop" id={style.logo_shop_nav} ></i>
                                <span  className={style.title_store_logo}>MI-Store</span>
                            </div>
                            
                        </li>
                        <Link to="/Store_Camera"><li id={style.li_profile}><a id={style.link_profile_Store}>
                            <i className={`bi bi-camera ${style.icon_Store}`}></i>
                            <span id='Account' className={style.nav_item_Store}>Camera</span>
                        </a></li></Link>
                        <Link to="/Store_Lens" ><li id={style.li_profile}><a id={style.link_profile_Store}>
                            <i className={`bi bi-image-alt ${style.icon_Store}`}></i>
                            <span id='Orders' className={style.nav_item_Store}>Lenses</span>
                        </a></li></Link>
                        <Link to="/Store_Accessori"><li id={style.li_profile}><a id={style.link_profile_Store}>
                            <i className={`bi bi-transparency ${style.icon_Store}`}></i>
                            <span id='Security' className={style.nav_item_Store}>Accessories</span>
                        </a></li></Link>
                       
                        <Link to="/Cart"><li id={style.li_profile}><a id={style.link_profile_Store}>
                            <i className={`bi bi-cart-check ${style.icon_Store}`}></i>
                            <span id='Security' className={style.nav_item_Store}>Cart</span>
                        </a></li></Link>
                    </ul>
                </nav>
        </>
    )
}


export default Navbar_Store;


