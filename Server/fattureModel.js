const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'fotosito',
  password: '1234',
  port: 5432,
});

const getFatture = async () => {
  try {
    return await new Promise(function (resolve, reject) {
      pool.query("SELECT * FROM fatture", (error, results) => {
        if (error) {
          reject(error);
        }
        if (results && results.rows) {
          resolve(results.rows);
        } else {
          reject(new Error("No results found"));
        }
      });
    });
  } catch (error_1) {
    console.error(error_1);
    throw new Error("Internal server error");
  }
};

const createFatture = (body) => {
  return new Promise(function (resolve, reject) {
    const { utente_email, create } = body;
  
    pool.query(
      'INSERT INTO fatture (utente_email, metodo_pagamento, carta_credito, data_scadenza, cod_sicurezza) VALUES ($1,NULL,NULL,NULL,NULL) RETURNING *',
      [utente_email],
      (error, results) => {
        if (error) {
          reject(error);
        }
        if (results && results.rows) {
          resolve(
            `change`
          );
        } else {
          resolve('no change');
        }
      }
    );
  });
};

const updateFatture = (body) => {
  return new Promise(function (resolve, reject) {
    const { utente_email, metodo_pagamento, carta_credito, data_scadenza, cod_sicurezza, update } = body;
  
    pool.query(
      'UPDATE fatture SET metodo_pagamento = $2, carta_credito = $3, data_scadenza = $4, cod_sicurezza = $5 WHERE utente_email = $1 RETURNING *',
      [utente_email, metodo_pagamento, carta_credito, data_scadenza, cod_sicurezza],
      (error, results) => {
        if (error) {
          reject(error);
        }
        if (results && results.rows) {
          resolve(
            `change`
          );
        } else {
          resolve('no change');
        }
      }
    );
  });
};


module.exports = {
    getFatture,
    createFatture,
    updateFatture,
  };