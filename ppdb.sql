-- phpMyAdmin SQL Dump
-- version 5.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 28, 2020 at 05:03 AM
-- Server version: 10.4.11-MariaDB
-- PHP Version: 7.2.27

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ppdb`
--

-- --------------------------------------------------------

--
-- Table structure for table `accounts`
--

CREATE TABLE `accounts` (
  `id` int(11) NOT NULL,
  `username` varchar(50) NOT NULL,
  `password` varchar(255) NOT NULL,
  `email` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `accounts`
--


-- --------------------------------------------------------

--
-- Table structure for table `ppdb`
--

CREATE TABLE `ppdb` (
  `id` int(11) NOT NULL,
  `jenis_pendaftaran` varchar(255) NOT NULL,
  `jalur_pendaftaran` varchar(255) NOT NULL,
  `pilih_kejuruan` varchar(255) NOT NULL,
  `tk` varchar(255) NOT NULL,
  `paud` varchar(255) NOT NULL,
  `no_un` int(255) NOT NULL,
  `skhun` int(255) NOT NULL,
  `ijazah` int(255) NOT NULL,
  `hobi` varchar(255) NOT NULL,
  `cita` varchar(255) NOT NULL,
  `nm` varchar(255) NOT NULL,
  `gender` varchar(255) NOT NULL,
  `nisn` int(255) NOT NULL,
  `nik` int(255) NOT NULL,
  `tempat_lahir` varchar(255) NOT NULL,
  `tgl` date NOT NULL,
  `agama` varchar(255) NOT NULL,
  `kebutuhan_khusus` varchar(255) NOT NULL,
  `alamat` varchar(255) NOT NULL,
  `rt` int(255) NOT NULL,
  `rw` int(255) NOT NULL,
  `dusun` varchar(255) NOT NULL,
  `kel` varchar(255) NOT NULL,
  `kec` varchar(255) NOT NULL,
  `kota` varchar(255) NOT NULL,
  `pos` int(255) NOT NULL,
  `tempat_tinggal` varchar(255) NOT NULL,
  `tranportasi` varchar(255) NOT NULL,
  `no_hp` int(255) NOT NULL,
  `sktm` int(255) NOT NULL,
  `kks` int(255) NOT NULL,
  `kps` int(255) NOT NULL,
  `kip` int(255) NOT NULL,
  `kis` int(255) NOT NULL,
  `photo` varchar(255) NOT NULL,
  `kewarganegaraan` varchar(255) NOT NULL,
  `nm_bpk` varchar(255) NOT NULL,
  `thn_lahir_bpk` int(255) NOT NULL,
  `pendidikan_bpk` varchar(255) NOT NULL,
  `pekerjaan_bpk` int(255) NOT NULL,
  `penghasilan_bln_bpk` varchar(255) NOT NULL,
  `kebutuhan_khusus_bpk` varchar(255) NOT NULL,
  `nm_ibu` varchar(255) NOT NULL,
  `thn_lahir_ibu` int(255) NOT NULL,
  `pendidikan_ibu` varchar(255) NOT NULL,
  `pekerjaan_ibu` varchar(255) NOT NULL,
  `penghasilan_bln_ibu` varchar(255) NOT NULL,
  `kebutuhan_khusu_ibu` varchar(255) NOT NULL,
  `nm_wali` varchar(255) NOT NULL,
  `thn_lahir_wali` int(255) NOT NULL,
  `pendidikan_wali` varchar(255) NOT NULL,
  `pekerjaan_wali` varchar(255) NOT NULL,
  `penghasilan_bln_wali` varchar(255) NOT NULL,
  `tinggi_bdn` varchar(255) NOT NULL,
  `berat_bdn` varchar(255) NOT NULL,
  `jrk_rmh` varchar(255) NOT NULL,
  `tempuh_sekolah` varchar(255) NOT NULL,
  `jml_sdr` varchar(255) NOT NULL,
  `pernyataan` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `ppdb`
--
ALTER TABLE `ppdb`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `ppdb`
--
ALTER TABLE `ppdb`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
