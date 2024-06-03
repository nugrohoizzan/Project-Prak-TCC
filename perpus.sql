-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 03, 2024 at 10:26 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `perpus`
--

-- --------------------------------------------------------

--
-- Table structure for table `buku`
--

CREATE TABLE `buku` (
  `id` int(11) NOT NULL,
  `nama` varchar(255) NOT NULL,
  `kode_buku` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `buku`
--

INSERT INTO `buku` (`id`, `nama`, `kode_buku`) VALUES
(1, 'Buku Pemrograman Python', 'B001'),
(2, 'Algoritma dan Struktur Data', 'B002'),
(3, 'Pengantar Basis Data', 'B003'),
(4, 'Sistem Operasi', 'B004'),
(5, 'Jaringan Komputer', 'B005'),
(6, 'Pemrograman Web', 'B006'),
(7, 'Kecerdasan Buatan', 'B007'),
(8, 'Pembelajaran Mesin', 'B008'),
(9, 'Analisis Data', 'B009'),
(10, 'Pemrograman Java', 'B010'),
(11, 'Desain dan Analisis Algoritma', 'B011'),
(12, 'Basis Data Lanjut', 'B012'),
(13, 'Keamanan Komputer', 'B013'),
(14, 'Pemrograman C++', 'B014'),
(15, 'Pengembangan Aplikasi Mobile', 'B015'),
(16, 'Pemrograman R', 'B016'),
(17, 'Komputasi Awan', 'B017'),
(18, 'Internet of Things', 'B018');

-- --------------------------------------------------------

--
-- Table structure for table `pengunjung`
--

CREATE TABLE `pengunjung` (
  `id` int(11) NOT NULL,
  `nama` varchar(255) NOT NULL,
  `kode_induk` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `pengunjung`
--

INSERT INTO `pengunjung` (`id`, `nama`, `kode_induk`) VALUES
(1, 'Ahmad Fauzi', 'P001'),
(2, 'Budi Santoso', 'P002'),
(3, 'Citra Dewi', 'P003'),
(4, 'Dewi Ayu', 'P004'),
(5, 'Eko Prasetyo', 'P005'),
(6, 'Fajar Nugroho', 'P006'),
(7, 'Gilang Ramadhan', 'P007'),
(8, 'Hendra Wijaya', 'P008'),
(9, 'Ika Sari', 'P009'),
(10, 'Joko Widodo', 'P010'),
(11, 'Kiki Amalia', 'P011'),
(12, 'Lina Marlina', 'P012'),
(13, 'Maya Indah', 'P013'),
(14, 'Nana Supriatna', 'P014'),
(15, 'Oki Setiawan', 'P015'),
(16, 'Putri Ayu', 'P016'),
(17, 'Rizky Aditya', 'P017'),
(18, 'Susi Susanti', 'P018');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `buku`
--
ALTER TABLE `buku`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `pengunjung`
--
ALTER TABLE `pengunjung`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `buku`
--
ALTER TABLE `buku`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT for table `pengunjung`
--
ALTER TABLE `pengunjung`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
