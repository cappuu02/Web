const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'fotosito',
  password: 'postgres',
  port: 5433,
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
module.exports = {
    getIndirizzi,
  };