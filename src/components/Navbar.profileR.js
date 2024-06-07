import React, { useState } from 'react';
import'../NavbarR.css';
import settingimage from '../Images/setting.png'
import { Link } from 'react-router-dom';
function SideNavbar({ showToggleButton }) {
    const [isNavbarOpen, setIsNavbarOpen] = useState(false);

    const handleToggleClick = () => {
      setIsNavbarOpen(!isNavbarOpen);
    };
  
    return (
      <div className={`side-navbar-container ${isNavbarOpen ? 'open' : ''}`}>
        {showToggleButton && (
          <div className={`toggle-area ${isNavbarOpen ? 'open' : ''}`} onClick={handleToggleClick}>
            <div className="toggle-button" />
          </div>
        )}
      
        <i id='icon_list' className={`bi bi-list`}></i>
        <nav className={`side-navbar ${isNavbarOpen ? 'visible' : 'hidden'}`}>
                    <ul id='elenco_ul'>
                        <li>
                            <div className='logoProfile'>
                                <img src={settingimage} className='imgProfile' alt="cameraNAV" />
                                <span  className='nav_item'>Account Settings</span>
                            </div>
                            
                        </li>
                        <Link to="/Profile_Account"><li id='li_profile'><a id='link_profile'>
                            <i id='icone_sidebar_resp' className={`bi bi-person-vcard-fill ='icon'}`}></i>
                            <span id='Account' className='nav_item'>Account</span>
                        </a></li></Link>
                        <Link to="/Profile_Orders" ><li id='li_profile'><a id='link_profile'>
                            <i id='icone_sidebar_resp' className={`bi bi-credit-card-fill ='icon'}`}></i>
                            <span id='Orders' className='nav_item'>Orders</span>
                        </a></li></Link>
                        <Link to="/Profile_Security"><li id='li_profile'><a id='link_profile'>
                            <i id='icone_sidebar_resp' className={`bi bi-shield-check ='icon'}`}></i>
                            <span id='Security' className='nav_item'>Security</span>
                        </a></li></Link>
                        <li id='li_profile'><a id='link_profile'>
                            <i id='icone_sidebar_resp' className={`bi bi-box-arrow-left ='icon'}`}></i>
                            <span className='nav_item'>Logout</span>
                        </a></li>
                    </ul>
                </nav>
      </div>
    );
  }
  

export default SideNavbar;