const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'fotosito',
  password: 'postgres',
  port: 5433,
});

const getOrdine = async () => {
  try {
    return await new Promise(function (resolve, reject) {
      pool.query("SELECT * FROM ordine", (error, results) => {
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


const createOrdine = (body) => {
  return new Promise(function (resolve, reject) {
    const { id, quantita, costo_totale } = body;
  
    pool.query(
      'INSERT INTO ordine (id, quantita, costo_totale) VALUES ($1, $2, $3) RETURNING *',
      [id, quantita, costo_totale],
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


const deleteOrdine = (id) => {
  return new Promise(function (resolve, reject) {
    pool.query(
      "DELETE FROM ordine WHERE id = $1",
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


const updateOrdine = (body) => {
  return new Promise(function (resolve, reject) {
    const { id, id1, quantita, costo_totale } = body;
    pool.query(
      "UPDATE ordine SET id = $2, quantita = $3, costo_totale = $4 WHERE id = $1 RETURNING *",
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
  getOrdine,
  createOrdine,
  deleteOrdine,
  updateOrdine
};