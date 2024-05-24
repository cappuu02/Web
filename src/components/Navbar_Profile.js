import style from '../profile.module.css';
import settingimage from '../Images/setting.png'

function Navbar_Profile(){
    return(
        <nav id={style.navbar_profile}>
                    <ul>
                        <li>
                            <div className={style.logoProfile}>
                                <img src={settingimage} className={style.imgProfile} alt="cameraNAV" />
                                <span className={style.nav_item}>Account Settings</span>
                            </div>
                        </li>
                        <li id={style.li_profile}><a id={style.link_profile}>
                            <i className={`bi bi-person-vcard-fill ${style.icon}`}></i>
                            <span className={style.nav_item}>Account</span>
                        </a></li>
                        <li id={style.li_profile}><a id={style.link_profile}>
                            <i className={`bi bi-credit-card-fill ${style.icon}`}></i>
                            <span className={style.nav_item}>Orders</span>
                        </a></li>
                        <li id={style.li_profile}><a id={style.link_profile}>
                            <i className={`bi bi-shield-check ${style.icon}`}></i>
                            <span className={style.nav_item}>Security</span>
                        </a></li>
                    </ul>
                </nav>
    )
}


export default Navbar_Profile;