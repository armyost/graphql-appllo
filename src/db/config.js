import mysql from "promise-mysql";

const dbConfig = {
  host: "----",
  port: ----,
  user: "----",
  password: "----",
  database: "----",
};

export default mysql.createPool(dbConfig);