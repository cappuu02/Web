import React from 'react';
import '../profile.module.css';

function infoOrdine() {
  return (
    <div className="container">
      <div className="left">
        <p>Nome: Mario</p>
        <p>Cognome: Rossi</p>
        <p>Telefono: 1234567890</p>
        <p>Indirizzo di Fatturazione: Via Roma 1, Milano</p>
        <p>Email: mario.rossi@example.com</p>
      </div>
      <div className="right">
        <p>Numero di Carta: 1234 5678 9012 3456</p>
        <p>Scadenza: 12/25</p>
        <p>Titolare: Mario Rossi</p>
      </div>
    </div>
  );
}

export default infoOrdine;
