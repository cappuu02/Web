const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'fotosito',
  password: '1234',
  port: 5432,
});

const getIndirizzi = async () => {
  try {
    return await new Promise(function (resolve, reject) {
      pool.query("SELECT * FROM indirizzi", (error, results) => {
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


const createIndirizzi = (body) => {
  return new Promise(function (resolve, reject) {
    const { utente_email, create } = body;
  
    pool.query(
      'INSERT INTO indirizzi (utente_email, nome, cognome, telefono, via, civico, cap, citta, regione, nazione) VALUES ($1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL) RETURNING *',
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

const updateIndirizzi = (body) => {
  return new Promise(function (resolve, reject) {
    const { utente_email, nome, cognome, via, civico, cap, citta, regione, nazione, update } = body;


    pool.query(
      'UPDATE indirizzi SET nome = $2, cognome = $3, via = $4, civico = $5, cap = $6, citta = $7, regione = $8, nazione = $9 WHERE utente_email = $1 RETURNING *',
      [utente_email, nome, cognome, via, civico, cap, citta, regione, nazione],
      (error, results) => {
        if (error) {
          reject(error);
        }
        if (results && results.rows) {
          resolve(
            `change`
          );
        } else {
          resolve('nochange');
        }
      }
    );
  });
};


const updateTelefono = (body) => {
  return new Promise(function (resolve, reject) {
    const { utente_email, telefono, newTel } = body;


    pool.query(
      'UPDATE indirizzi SET telefono = $2 WHERE utente_email = $1 RETURNING *',
      [utente_email, telefono],
      (error, results) => {
        if (error) {
          reject(error);
        }
        if (results && results.rows) {
          resolve(
            `tel`
          );
        } else {
          resolve('telnot');
        }
      }
    );
  });
};


const checkTelefono = (body) => {
  return new Promise(function (resolve, reject) {
    const { utente_email, telefono, checkTel } = body;
    pool.query(
      "SELECT COUNT(*) FROM indirizzi WHERE telefono = $2 AND utente_email != $1",
      [utente_email, telefono],
      (error, results) => {
        if (error) {
          reject(error);
        }
        if (results.rows[0].count < 1) {
          pool.query(
            "UPDATE indirizzi SET telefono = $2 WHERE utente_email = $1 RETURNING *",
            [utente_email, telefono],
            (error, results) => {
              if (error) {
                reject(error);
              }
              if (results && results.rows) {
                resolve(`GoodNumber`);
              } else {
                reject(new Error("No results found"));
              }
            }
          );
        } else {
          resolve("BadNumber");
        }
      }
    );
  });
};


module.exports = {
    getIndirizzi,
    createIndirizzi,
    updateIndirizzi,
    updateTelefono,
    checkTelefono,
  };