const pgp = require("pg-promise")();

//Connection Object 
const cn = {
    host: process.env.PG_HOST,
    port: process.env.PG_PORT,
    database: process.env.PG_DATABASE,
    user: process.env.PG_USER,
  };
  

  //Connection open
  const db = pgp(cn);

module.exports = db;