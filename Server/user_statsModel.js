const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'fotosito',
  password: 'postgres',
<<<<<<< Updated upstream
  port: 5433,
=======
  port: 5432,
>>>>>>> Stashed changes
});

const getUser_stats = async () => {
  try {
    return await new Promise(function (resolve, reject) {
      pool.query("SELECT * FROM user_stats", (error, results) => {
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


const createUser_stats = (body) => {
    return new Promise(function (resolve, reject) {
      const { email, data_registrazione, create } = body;
      pool.query(
        "INSERT INTO user_stats (utente_email, data_registrazione, accessi) VALUES ($1, $2, 0) RETURNING *",
        [email, data_registrazione],
        (error, results) => {
          if (error) {
            reject(error);
          }
          if (results && results.rows) {
            resolve(
              `A new user_stat has been added: ${JSON.stringify(results.rows[0])}`
            );
          } else {
            reject(new Error("No results found"));
          }
        }
      );
    });
  };


const deleteUser_stats = (id) => {
  return new Promise(function (resolve, reject) {
    pool.query(
      "DELETE FROM user_stats WHERE utente_email = $1",
      [id],
      (error, results) => {
        if (error) {
          reject(error);
        }
        resolve(`User deleted with ID: ${id}`);
      }
    );
  });
};


const updateUser_stats = (body) => {
  return new Promise(function (resolve, reject) {
    const { email, accessi, data_ultimo_accesso, log} = body;
    pool.query(
      "UPDATE user_stats SET accessi = accessi + 1, data_ultimo_accesso = $2 WHERE utente_email = $1 RETURNING *",
      [email, data_ultimo_accesso],
      (error, results) => {
        if (error) {
          reject(error);
        }
        if (results && results.rows) {
          resolve(`user_stats updated: ${JSON.stringify(results.rows[0])}`);
        } else {
          reject(new Error("No results found"));
        }
      }
    );
  });
};

module.exports = {
  getUser_stats,
  createUser_stats,
  deleteUser_stats,
  updateUser_stats,
};