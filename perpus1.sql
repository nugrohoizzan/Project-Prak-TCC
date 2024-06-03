-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 03, 2024 at 04:48 PM
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
(1, 'The Prequel', 'B001'),
(2, 'Harry Potter and The Sorcerer\'s stone', 'B002'),
(3, 'Harry Potter and The Chamber Of Secret', 'B003'),
(4, 'Harry Potter and The Prisoner of Azkaban', 'B004'),
(5, 'Harry Potter and The Goblet of Fire', 'B005'),
(6, 'Harry Potter and The Order of the Phoenix', 'B006'),
(7, 'Harry Potter and the Half-Blood Prince', 'B007'),
(8, 'Harry Potter and the Deathly Hallows: Part One', 'B008'),
(9, 'Harry Potter and the Deathly Hallows: Part Two', 'B009');

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
(1, 'Harry Potter', 'H001'),
(2, 'Hermione Granger', 'H002'),
(3, 'Ron Weasley', 'H003'),
(4, 'Draco Malfoy', 'H004'),
(5, 'Ginny Weasley', 'H005'),
(6, 'Luna Lovegood', 'H006'),
(7, 'Neville Longbottom', 'H007'),
(8, 'Fred Weasley', 'H008'),
(9, 'George Weasley', 'H009'),
(10, 'Cedric Diggory', 'H010'),
(11, 'Oliver Wood', 'H011'),
(12, 'Seamus Finnigan', 'H012'),
(13, 'Katie Bell', 'H013');

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
