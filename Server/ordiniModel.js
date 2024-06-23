const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'fotosito',
  password: 'postgres',
  port: 5432,
});

const getordini = async () => {
  try {
    return await new Promise(function (resolve, reject) {
      pool.query("SELECT * FROM ordini", (error, results) => {
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


const getordiniUser = (body) => {
  return new Promise(function (resolve, reject) {
    const { utente_email, get } = body;
  
    pool.query(
      'SELECT * FROM ordini WHERE utente_email = $1',
      [utente_email],
      (error, results) => {
        if (error) {
          reject(error);
        }
        if (results && results.rows) {
          resolve(results.rows);
        } else {
          resolve(
            `noGot`
          );
        }
      }
    );
  });
};




const createordini = (body) => {
  return new Promise(function (resolve, reject) {
    const { id, utente_email,prodotto_id, quantita, costo_totale, create } = body;
  
    pool.query(
      'INSERT INTO ordini (id, utente_email, prodotto_id, quantita, costo_totale) VALUES ($1, $2, $3, $4, $5) RETURNING *',
      [id, utente_email,prodotto_id, quantita, costo_totale],
      (error, results) => {
        if (error) {
          reject(error);
        }
        if (results && results.rows) {
          resolve(
            `A new order has been added: ${JSON.stringify(results.rows[0])}`
          );
        } else {
          reject(new Error("No results found"));
        }
      }
    );
  });
};


const deleteordini = (id) => {
  return new Promise(function (resolve, reject) {
    pool.query(
      "DELETE FROM ordini WHERE id = $1",
      [id],
      (error, results) => {
        if (error) {
          reject(error);
        }
        resolve(`Order deleted with ID: ${2}`);
      }
    );
  });
};


const updateordini = (body) => {
  return new Promise(function (resolve, reject) {
    const { id, id1, quantita, costo_totale } = body;
    pool.query(
      "UPDATE ordini SET id = $2, quantita = $3, costo_totale = $4 WHERE id = $1 RETURNING *",
      [id, id1, quantita, costo_totale],
      (error, results) => {
        if (error) {
          reject(error);
        }
        if (results && results.rows) {
          resolve(`order updated: ${JSON.stringify(results.rows[0])}`);
        } else {
          reject(new Error("No results found"));
        }
      }
    );
  });
};
module.exports = {
  getordini,
  getordiniUser,
  createordini,
  deleteordini,
  updateordini
};