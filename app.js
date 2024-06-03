const express = require("express");
const cors = require("cors");
const pengunjungRouter = require("./pengunjung");
const port = "8080"; // Sesuaikan port jika diperlukan
const app = express();

app.use(cors());
app.use(express.json());
app.use("/pengunjung", pengunjungRouter);

app.get("/", (req, res) => {
  res.send("Selamat datang di Pengunjung Service!");
});

app.listen(port, () => {
  console.log("Server Connected on PORT: " + port + "/");
});