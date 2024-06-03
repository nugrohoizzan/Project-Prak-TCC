const mysql = require("mysql2");

const config = {
  host: "34.42.154.176",
  user: "root",
  password: "nugrohoizza29",
  database: "perpus",
};

const connect = mysql.createConnection(config);

// Koneksi DB
connect.connect((err) => {
  if (err) throw err;
  console.log("MySQL Connected");
});

module.exports = connect;