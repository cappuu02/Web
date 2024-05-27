import React from 'react';
import camiona from '../Images/camiona.webp';
import ok from '../Images/ok.webp';
import boh from '../Images/boh.webp';

function terzo(){
    return(
        <div class="card-container">
        <h1 className='h1-terza'>WHY BUY MI-REFLEX PRODUCTS ONLINE?</h1>
        <div class="benefits">
            <div class="benefit">
                <img src={camiona} alt="Consegna e resi gratuiti"/>
                <h2>Free delivery and returns</h2>
                <p>FREE standard shipping and free returns within 30 days on all orders starting from €30.00</p>
                <a href="#">to know more</a>
            </div>
            <div class="benefit">
                <img src={ok} alt="Garanzia di 2 anni del produttore"/>
                <h2>2-year manufacturer's warranty*</h2>
                <p>We offer all the security of a 2-year manufacturer's guarantee (European Warranty System) on our products. Exceptions apply</p>
                <a href="#">to know more</a>
            </div>
            <div class="benefit">
                <img src={boh} alt="Ampia gamma di prodotti"/>
                <h2>Wide range of products</h2>
                <p>Discover our full range of products in one place, including those exclusive to the MI-Reflex website</p>
                <a href="#">to know more</a>
            </div>
        </div>
    </div>

    )
}
export default terzo;