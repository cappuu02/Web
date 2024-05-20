import React, { useState, useEffect,useRef } from 'react';
import {useClickAway} from "react-use";


//funzione navbar che rappresenta il componente
function Navbar(){

    const [isSearchVisible, setSearchVisible] = useState(false);

    return(
        
        <nav id="navbar1"class="navbar navbar-expand-lg bg-black justify-content-center opacity-75" data-bs-theme="light"  >
        <div class="container-fluid" >
            <a id="NomeSito" class="navbar-brand text-white ms-2 fs-1 opacity-100"  href="#">Mi-Reflex</a>
            <div class="collapse navbar-collapse" id="navbarSupportedContent" >
                <ul id="navbar_full" class="navbar-nav me-auto mb-2 mb-lg-0 opacity-100" >
                    <div class="d-flex justify-content-center ms-5 ps-5 fs-4 " data-bs-theme="light">
                        <li id="nav_item" class="nav-item p-1 m-3 ">
                            <a class="nav-link active" aria-current="page"  href="#">Store</a>
                        </li>
                        <li id="nav_item" class="nav-item p-1 m-3">
                            <a class="nav-link" href="#">Camera</a>
                        </li>
                        <li id="nav_item"class="nav-item p-1 m-3  ">
                            <a class="nav-link" href="#">Lenses</a>
                        </li> 
                        <li id="nav_item" class="nav-item p-1 m-3 ">
                            <a class="nav-link" href="#">Accessories</a>
                        </li> 
                        <li id="nav_item" class="nav-item p-1 m-3 ">
                            <a class="nav-link" href="#">Support</a>
                        </li> 
                    </div>
                </ul>      
                <form id="Icone" class="d-flex" role="search">
                        {isSearchVisible && <input id='cerca' class="form-control " type="search" placeholder="Search" aria-label="Search"/>}
                        <div  id="search_icon" class="me-5"><a onClick={() => setSearchVisible(!isSearchVisible)}><i class="bi bi-search"  id="search_bar"></i></a></div>
                        <div id="cart_icon" class="me-5"><a href="#"><i class="bi bi-cart-check"></i></a></div>
                        <div id="profile_icon" class="me-5"><a href="#"><i class="bi bi-person-circle"></i></a></div>
                </form>     
            </div>
        </div>
        </nav>           
    )
}

export default Navbar;


