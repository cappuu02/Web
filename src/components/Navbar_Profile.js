import style from '../profile.module.css';
import settingimage from '../Images/setting.png'
import { Link } from 'react-router-dom';


function Navbar_Profile(){

<<<<<<< Updated upstream
<<<<<<< Updated upstream
    const deleteCookie = () => {
        document.cookie = 'isAuthenticated=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/';
      };

    return(
=======
    const handleLogout = async () => {
        document.cookie = `isAuthenticated=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`;
=======
    const handleLogout = async () => {
        document.cookie = `isAuthenticated=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`;
        const cookies = document.cookie.split(';');


for (let i = 0; i < cookies.length; i++) {

    const cookie = cookies[i].trim();

    const [name, value] = cookie.split('=');


    if (name.startsWith('cart_')) {

        document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`;

    }

}
>>>>>>> Stashed changes
        window.location.href = "/";
    }
    
        return(
        <>
        <i id={style.icon_list} className={`bi bi-list`}></i>
>>>>>>> Stashed changes
        <nav id={style.navbar_profile}>
                    <ul id={style.elenco_ul}>
                        <li>
                            <div className={style.logoProfile}>
                                <img src={settingimage} className={style.imgProfile} alt="cameraNAV" />
                                <span  className={style.nav_item}>Account Settings</span>
                            </div>
                        </li>
                        <Link to="/Profile_Account"><li id={style.li_profile}><a id={style.link_profile}>
                            <i className={`bi bi-person-vcard-fill ${style.icon}`}></i>
                            <span id='Account' className={style.nav_item}>Account</span>
                        </a></li></Link>
                        <li id={style.li_profile}><a id={style.link_profile}>
                            <i className={`bi bi-credit-card-fill ${style.icon}`}></i>
                            <span id='Orders' className={style.nav_item}>Orders</span>
                        </a></li>
                        <Link to="/Profile_Security"><li id={style.li_profile}><a id={style.link_profile}>
                            <i className={`bi bi-shield-check ${style.icon}`}></i>
                            <span id='Security' className={style.nav_item}>Security</span>
                        </a></li></Link>
<<<<<<< Updated upstream
<<<<<<< Updated upstream
                        <Link to="/"><li onClick={deleteCookie} id={style.li_profile}><a id={style.link_profile}>
=======
                        <li id={style.li_profile} onClick={handleLogout}><a id={style.link_profile}>
>>>>>>> Stashed changes
=======
                        <li id={style.li_profile} onClick={handleLogout}><a id={style.link_profile}>
>>>>>>> Stashed changes
                            <i id='Logout' className={`bi bi-box-arrow-left ${style.icon}`}></i>
                            <span className={style.nav_item}>Logout</span>
                        </a></li></Link>
                        
                    </ul>
                </nav>
    )
}


export default Navbar_Profile;


