const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'fotosito',
  password: '1234',
  port: 5432,
});

const getProdotti = async () => {
  try {
    return await new Promise(function (resolve, reject) {
      pool.query("SELECT * FROM prodotti", (error, results) => {
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

const getSpecProdotti = (body) => {
  return new Promise(function (resolve, reject) {
    const { id, get } = body;
    pool.query(
      "SELECT * FROM prodotti WHERE id = $1",
      [id],
      (error, results) => {
        if (error) {
          reject(error);
        }
        if (results && results.rows) {
          resolve(results.rows);
        } else {
          reject(new Error("No results found"));
        }
      }
    );
  });
};


const createProdotti = (body) => {
  return new Promise(function (resolve, reject) {
    const { name, email } = body;
    pool.query(
      "INSERT INTO prodotti (name, email) VALUES ($1, $2) RETURNING *",
      [name, email],
      (error, results) => {
        if (error) {
          reject(error);
        }
        if (results && results.rows) {
          resolve(
            `A new product has been added: ${JSON.stringify(results.rows[0])}`
          );
        } else {
          reject(new Error("No results found"));
        }
      }
    );
  });
};


const deleteProdotti = (id) => {
  return new Promise(function (resolve, reject) {
    pool.query(
      "DELETE FROM prodotti WHERE id = $1",
      [id],
      (error, results) => {
        if (error) {
          reject(error);
        }
        resolve(`Product deleted with ID: ${id}`);
      }
    );
  });
};


const updateProdotti = (id, body) => {
  return new Promise(function (resolve, reject) {
    const { name, email } = body;
    pool.query(
      "UPDATE prodotti SET id = $1, email = $2 WHERE id = $3 RETURNING *",
      [name, email, id],
      (error, results) => {
        if (error) {
          reject(error);
        }
        if (results && results.rows) {
          resolve(`product updated: ${JSON.stringify(results.rows[0])}`);
        } else {
          reject(new Error("No results found"));
        }
      }
    );
  });
};

const updateQtaProdotti = (body) => {
  return new Promise(function (resolve, reject) {
    const { id, quantity, updateQta } = body;
    pool.query(
      "UPDATE prodotti SET quantita = quantita - $2 WHERE id = $1 RETURNING *",
      [id, quantity],
      (error, results) => {
        if (error) {
          reject(error);
        }
        if (results && results.rows) {
          resolve(`product updated: ${JSON.stringify(results.rows[0])}`);
        } else {
          reject(new Error("No results found"));
        }
      }
    );
  });
};
module.exports = {
  getProdotti,
  getSpecProdotti,
  createProdotti,
  deleteProdotti,
  updateProdotti,
  updateQtaProdotti
};