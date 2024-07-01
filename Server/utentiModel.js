const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'fotosito',
  password: '1234',
  port: 5432,
});

const getUtenti = async () => {
  try {
    return await new Promise(function (resolve, reject) {
      pool.query("SELECT * FROM utenti", (error, results) => {
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


const createUtenti = (body) => {
  return new Promise(function (resolve, reject) {
    const { email,password, reg } = body;
    pool.query(
      "SELECT COUNT(*) FROM utenti WHERE email = $1",
      [email],
      (error, results) => {
        if (error) {
          reject(error);
        }
        if (results.rows[0].count > 0) {
          resolve("This email is already used");
        } else {
          pool.query(
            "INSERT INTO utenti (email, password) VALUES ($1,$2) RETURNING *",
            [email,password],
            (error, results) => {
              if (error) {
                reject(error);
              }
              if (results && results.rows) {
                resolve(
                  `Registration successful`
                );
              } else {
                reject(new Error("No results found"));
              }
            }
          );
        }
      }
    );
  });
};

const checkUtenti = (body) => {
  return new Promise(function (resolve, reject) {
    const { email,password, reg } = body;
    pool.query(
      "SELECT COUNT(*) FROM utenti WHERE email = $1",
      [email],
      (error, results) => {
        if (error) {
          reject(error);
        }
        if (results.rows[0].count < 1) {
          resolve("This email is not registered");
        } else {
          pool.query(
            "SELECT EXISTS (SELECT 1 FROM utenti WHERE email = $1 AND password = $2);",
            [email,password],
            (error, results) => {
              if (error) {
                reject(error);
              }
              
              console.log(results.rows[0].exists);
              if (results.rows[0].exists) {
                resolve(
                  `Login successful`
                );
              } else {
                resolve("This email is not registered");
              }
            }
          );
        }
      }
    );
  });
};

const checkEmail = (body) => {
  return new Promise(function (resolve, reject) {
    const { email, rec } = body;
    pool.query(
      "SELECT COUNT(*) FROM utenti WHERE email = $1",
      [email],
      (error, results) => {
        if (error) {
          reject(error);
        }
        if (results.rows[0].count < 1) {
          resolve("email not in use");
        } else {
          resolve("Email sent")
        }
      }
    );
  });
};

const checkEmailChange = (body) => {
  return new Promise(function (resolve, reject) {
    const { email, rec } = body;
    pool.query(
      "SELECT COUNT(*) FROM utenti WHERE email = $1",
      [email],
      (error, results) => {
        if (error) {
          reject(error);
        }
        if (results.rows[0].count > 0) {
          resolve("Email already used");
        } else {
          resolve("Email sent")
        }
      }
    );
  });
};

const emailUpdate = (body) => {
  return new Promise(function (resolve, reject) {
    
    const { utente_email, email, emailupdate } = body;
    
    pool.query(
      "UPDATE utenti SET email = $2 WHERE email = $1 RETURNING *",
      [utente_email, email],
      (error, results) => {
        if (error) {
          reject(error);
        }
        if (results && results.rows) {
          resolve(`user updated: ${JSON.stringify(results.rows[0])}`);
        } else {
          reject(new Error("No results found"));
        }
      }
    );
  });
};


const checkupPass = (body) => {
  return new Promise(function (resolve, reject) {
    const { email,pass, newPass } = body;
    pool.query(
      "SELECT COUNT(*) FROM utenti WHERE email = $1 AND password = $2 ",
      [email, pass],
      (error, results) => {
        if (error) {
          reject(error);
        }
        if (results.rows[0].count > 0) {
          resolve("pass exists");
        } else {
          pool.query(
            "UPDATE utenti SET password = $2 WHERE email = $1 RETURNING *",
            [email,pass],
            (error, results) => {
              if (error) {
                reject(error);
              }
              
              console.log(results.rows[0].exists);
              if (results && results.rows) {
                resolve(
                  `pass changed`
                );
              } else {
                reject(new Error("No results found"));
              }
            }
          );
        }
      }
    );
  });
};


const deleteUtenti = (id) => {
  return new Promise(function (resolve, reject) {
    pool.query(
      "DELETE FROM utenti WHERE id = utenti",
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


const updateUtenti = (id, body) => {
  return new Promise(function (resolve, reject) {
    const { name, email } = body;
    pool.query(
      "UPDATE utenti SET id = $1, email = $2 WHERE id = $3 RETURNING *",
      [name, email, id],
      (error, results) => {
        if (error) {
          reject(error);
        }
        if (results && results.rows) {
          resolve(`user updated: ${JSON.stringify(results.rows[0])}`);
        } else {
          reject(new Error("No results found"));
        }
      }
    );
  });
};
module.exports = {
  getUtenti,
  createUtenti,
  checkUtenti,
  checkEmail,
  checkEmailChange,
  emailUpdate,
  checkupPass,
  deleteUtenti,
  updateUtenti
};