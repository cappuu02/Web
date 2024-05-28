import React, { useState, useEffect,useRef } from 'react';
import { Link } from 'react-router-dom';




//funzione navbar che rappresenta il componente
function Navbar(){

    const [isSearchVisible, setSearchVisible] = useState(false);

    const [isAuthenticated, setIsAuthenticated] = useState(false);


    useEffect(() => {
      const cookie = document.cookie
       .split('; ')
       .find((row) => row.startsWith('isAuthenticated='));
  
      if (cookie) {
        setIsAuthenticated(true);
      } else {
        
      }
    }, []);

    return(
        
        <nav id="navbar_principale"class="navbar navbar-expand-lg  justify-content-center" data-bs-theme="light"  >
        <div class="container-fluid">
            <li><Link to="/" className="navbar-brand text-black ms-2 fs-1  p-2">Mi-Reflex</Link></li>
            <div class="collapse navbar-collapse" id="navbarSupportedContent" >
                <ul id="navbar_full" class="navbar-nav me-auto mb-2 mb-lg-0 " >
                    <div class="d-flex justify-content-center ms-5 ps-5 fs-4 " data-bs-theme="light">
                        <li id="nav_item_princ" class="nav-item p-1 m-3 ">
                            <li><Link to="/Store"  class="nav-link" aria-current="page" >Store</Link></li>
                        </li>
                        <li id="nav_item_princ" class="nav-item p-1 m-3 ">
                            <a class="nav-link" href="#">Camera</a>
                        </li>
                        <li id="nav_item_princ"class="nav-item p-1 m-3  ">
                            <a class="nav-link" href="#">Lenses</a>
                        </li> 
                        <li id="nav_item_princ" class="nav-item p-1 m-3 ">
                            <a class="nav-link" href="#">Accessories</a>
                        </li> 
                        <li id="nav_item_princ" class="nav-item p-1 m-3 ">
                            <a class="nav-link" href="#">Support</a>
                        </li> 
                    </div>
                </ul>      
                <form id="Icone" class="d-flex" role="search">
                        {isSearchVisible && <input id='cerca' class="form-control " type="search" placeholder="Search" aria-label="Search"/>}
                        <div  id="search_icon" class="me-5 mb-4"><a onClick={() => setSearchVisible(!isSearchVisible)}><i class="bi bi-search"  id="search_bar"></i></a></div>
                        <div id="cart_icon" class="me-5 mb-4"><Link to="/Profile_Account"><i class="bi bi-cart"></i></Link></div>
                        {isAuthenticated? (
                            <div id="profile_icon" class="me-5 mb-4"><Link to="/Profile_Account"><i class="bi bi-person-check"></i></Link></div>
                        ) :(
                            <div id="profile_icon" class="me-5 mb-4"><Link to="/Login"><i class="bi bi-person"></i></Link></div>

                        )}
                </form>     
            </div>
        </div>
        </nav>           
    )
}

export default Navbar;


