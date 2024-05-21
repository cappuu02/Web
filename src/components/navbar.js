import React, { useState, yarn} from 'react';
import { Link } from 'react-router-dom';
import Store from './Store';



//funzione navbar che rappresenta il componente
function Navbar(){

    const [isSearchVisible, setSearchVisible] = useState(false);
   
        
    
   
    return(
        
        <header className="header">
            <div className="header__content">
          <a className="header__logo" href="">
        <h1 className='header__logo'>Mi-Reflex</h1>
          </a>
          <ul  className="header__menu" >
                        <li >
                            <a to="./Pages/Store" className="nav-link active" aria-current="page" >Store</a>
                        </li>
                        <li >
                            <a id="nav_item" className="nav-link" href="#">Camera</a>
                        </li>
                        <li >
                            <a id="nav_item" className="nav-link" href="#">Lenses</a>
                        </li> 
                        <li >
                            <a id="nav_item" className="nav-link" href="#">Accessories</a>
                        </li> 
                        <li >
                            <a id="nav_item" className="nav-link" href="#">Support</a>
                        </li> 
                    
                </ul>
               <div className='header__icons'>
                <div id="cart_icon" className="me-5 "><a href="#"><i className="bi bi-cart-check "></i></a></div>
                        <div id="profile_icon" className="me-5 header__icons"><a href="#"><i className="bi bi-person-circle"></i></a></div>
                <form id='Icone' className="d-flex" role="search">
                        {isSearchVisible && <input id='cerca' className="form-control show" type="search" placeholder="Search" aria-label="Search"/>}
                        <div  id="search_icon" className="me-5 "><a onClick={() => setSearchVisible(!isSearchVisible)}><i className="bi bi-search"  id="search_bar"></i></a></div>
                       
                </form>  
                </div>  
                <div  className="icon-ham">
                    <span>
                    </span>
                    <span>
                    </span>
                </div>
                
            </div>
                
        </header>        
    )
}

export default Navbar;


