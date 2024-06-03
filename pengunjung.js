// Mengimport package
const express = require("express");
const router = express.Router();
const connection = require("./config");

// [GET] Mengambil daftar pengunjung
router.get("/", async (req, res) => {
  try {
    // Execute query ke database
    const command = "SELECT * FROM pengunjung";
    const data = await connection.promise().query(command);

    // Mengirimkan respons jika berhasil
    res.status(200).json({
      status: "Success",
      message: "Berhasil mengambil daftar pengunjung",
      data: data[0],
    });
  } catch (error) {
    // mengirimkan respons jika gagal
    res.status(error.statusCode || 500).json({
      status: "Error",
      message: error.message,
    });
  }
});

// [POST] Memasukkan pengunjung baru ke dalam daftar pengunjung
router.post("/", async (req, res) => {
  try {
    // mengambil nama dan kode_induk dari request body
    const { nama, kode_induk } = req.body;

    // kalau nama/kode_induk kosong atau gaada kolom nama/kode_induk di request body
    if (!nama || !kode_induk) {
      const msg = `${!nama ? "Nama" : "Kode Induk"} gabole kosong 😠`;
      const error = new Error(msg);
      error.statusCode = 401;
      throw error;
    }

    // Execute query ke database
    const command = "INSERT INTO pengunjung (nama, kode_induk) VALUES (?, ?)";
    await connection.promise().query(command, [nama, kode_induk]);

    // mengirimkan respons jika berhasil
    res.status(201).json({
      status: "Success",
      message: "Berhasil menambahkan pengunjung",
    });
  } catch (error) {
    // mengirimkan respons jika gagal
    res.status(error.statusCode || 500).json({
      status: "Error",
      message: error.message,
    });
  }
});

// [PUT] Mengubah data pengunjung berdasarkan id
router.put("/:id", async (req, res) => {
  try {
    // mengambil nama dan kode_induk dari request body
    const { id } = req.params;
    const { nama, kode_induk } = req.body;

    // kalau nama/kode_induk kosong atau gaada kolom nama/kode_induk di request body
    if (!nama || !kode_induk) {
      const msg = `${!nama ? "Nama" : "Kode Induk"} DILARANG KOSONG!`;
      const error = new Error(msg);
      error.statusCode = 401;
      throw error;
    }

    // Execute query ke database
    const command = "UPDATE pengunjung SET nama = ?, kode_induk = ? WHERE id = ?";
    await connection.promise().query(command, [nama, kode_induk, id]);

    // mengirimkan respons jika berhasil
    res.status(201).json({
      status: "Success",
      message: "Berhasil mengubah pengunjung",
    });
  } catch (error) {
    // mengirimkan respons jika gagal
    res.status(error.statusCode || 500).json({
      status: "Error",
      message: error.message,
    });
  }
});

// [DELETE] Menghapus pengunjung berdasarkan id
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    // Execute query ke database
    const command = "DELETE FROM pengunjung WHERE id = ?";
    await connection.promise().query(command, [id]);

    // mengirimkan respons jika berhasil
    res.status(200).json({
      status: "Success",
      message: "Berhasil menghapus pengunjung",
    });
  } catch (error) {
    // mengirimkan respons jika gagal
    res.status(error.statusCode || 500).json({
      status: "Error",
      message: error.message,
    });
  }
});

// [GET] Mengambil pengunjung berdasarkan ID
router.get("/:id", async (req, res) => {
  try {
    // mengambil id dari parameter
    const { id } = req.params;

    // Execute query ke database
    const command = "SELECT * FROM pengunjung WHERE id = ?";
    const [[data]] = await connection.promise().query(command, [id]);

    if (!data) {
      const error = new Error("Pengunjung tidak ditemukan.");
      error.statusCode = 404;
      throw error;
    }

    // Mengirimkan respons jika berhasil
    res.status(200).json({
      status: "Success",
      message: "Berhasil mengambil pengunjung",
      data: data,
    });
  } catch (error) {
    // mengirimkan respons jika gagal
    res.status(error.statusCode || 500).json({
      status: "Error",
      message: error.message,
    });
  }
});

module.exports = router;