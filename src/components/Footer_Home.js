import React from 'react';
import { Link } from 'react-router-dom';


function Footer_Home(){
    return(
        
        <div class="footer-container">
            <hr></hr>
            <div class="footer-section1">
                <h2 id='titolo_footer'>Support services</h2>
                <ul>
                    <li id="li_hide_footer">Contact us via:</li>
                    <ul>
                      <li>Email: <a href="https://www.google.com/intl/it/gmail/about/">mireflexstoreshop@gmail.com</a></li>
                      <li>Telephone: +39 3920591860</li>
                      
                    </ul>
                </ul>
            </div>
            <div class="footer-section2">
                <h2 id='titolo_footer'>Informazioni</h2>
                <ul>
                    <li>Why buy from us?</li>
                    <li><a href="https://europa.eu/youreurope/citizens/consumers/shopping/guarantees-returns/faq/index_it.htm#:~:text=Nell'UE%20il%20periodo%20di,esistenza%20al%20momento%20della%20consegna.">Product warranty</a></li>
                    <li><a href="https://www.eccnet.eu/consumer-rights/what-are-my-consumer-rights/shopping-rights/online-shopping-rights">Buy online safely</a></li>
                </ul>
            </div>
            <div class="footer-section3">
                <h2 id='titolo_footer'>Acquisto</h2>
                <ul>
                <Link to="/Store_Camera">Cameras</Link>
                <tr></tr>
                <Link to="/Store_Lens">Lenses</Link>
                <tr></tr>
                <Link to="/Store_Accessori">Accessories</Link>
                </ul>
            </div>
            <div class="footer-section newsletter">
                <h2 id="li_hide_footer">Sign up</h2>
                <p id="li_hide_footer">Sign up and buy now from our expansive store</p>
                <Link to="/Login"><button id='register_button_footer' class="register-button">Sign Up</button></Link>
                
            </div>
            
        </div>
    )
}
export default Footer_Home;