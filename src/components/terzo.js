import React from 'react';
import camiona from '../Images/camiona.webp';
import ok from '../Images/ok.webp';
import boh from '../Images/boh.webp';

function terzo(){
    return(
        <div class="card-container">
        <h1 className='h1-terza'>PERCHÉ ACQUISTARE I PRODOTTI CANON ONLINE?</h1>
        <div class="benefits">
            <div class="benefit">
                <img src={camiona} alt="Consegna e resi gratuiti"/>
                <h2>Consegna e resi gratuiti</h2>
                <p>Spedizione standard GRATUITA e resi gratuiti entro 30 giorni su tutti gli ordini a partire da € 30,00</p>
                <a href="#">Per saperne di più</a>
            </div>
            <div class="benefit">
                <img src={ok} alt="Garanzia di 2 anni del produttore"/>
                <h2>Garanzia di 2 anni del produttore*</h2>
                <p>Offriamo tutta la sicurezza di una garanzia del produttore di 2 anni (European Warranty System) sui nostri prodotti. Sono previste eccezioni</p>
                <a href="#">Per saperne di più</a>
            </div>
            <div class="benefit">
                <img src={boh} alt="Ampia gamma di prodotti"/>
                <h2>Ampia gamma di prodotti</h2>
                <p>Scopri in un unico punto la nostra gamma completa di prodotti, tra cui quelli in esclusiva per il sito Canon</p>
                <a href="#">Per saperne di più</a>
            </div>
        </div>
    </div>

    )
}
export default terzo;