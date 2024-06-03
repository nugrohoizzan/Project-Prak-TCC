const mysql = require("mysql2");

const config = {
  host: "localhost",
  user: "root",
  password: "",
  database: "perpus",
};

const connect = mysql.createConnection(config);

connect.connect((err) => {
  if (err) throw err;
  console.log("MySQL Connected");
});

module.exports = connect;