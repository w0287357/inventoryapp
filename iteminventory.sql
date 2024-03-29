-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3307
-- Generation Time: Mar 29, 2024 at 08:19 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `iteminventory`
--

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `name`) VALUES
(1, 'Fruit'),
(2, 'Vegetables'),
(3, 'Dairy'),
(4, 'Meat'),
(5, 'Grains'),
(6, 'Snacks'),
(7, 'Beverages'),
(8, 'Frozen'),
(9, 'Cleaning'),
(10, 'Other'),
(11, 's'),
(14, '');

-- --------------------------------------------------------

--
-- Table structure for table `items`
--

CREATE TABLE `items` (
  `id` int(11) UNSIGNED NOT NULL,
  `category_id` int(10) UNSIGNED DEFAULT NULL,
  `title` varchar(255) NOT NULL,
  `description` text DEFAULT NULL,
  `price` decimal(10,2) NOT NULL,
  `quantity` int(11) NOT NULL,
  `sku` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `items`
--

INSERT INTO `items` (`id`, `category_id`, `title`, `description`, `price`, `quantity`, `sku`) VALUES
(1, 1, 'Apples', 'Apples from the Valley of Nova Scotia!', 1.02, 101, 'FRU004'),
(2, 2, 'Carrot', 'Fresh Picked Carrots!', 1.39, 19, 'VEG010'),
(3, 3, 'Eggs', '12 Fresh Eggs from Nova Fresh', 6.29, 56, 'DAI005'),
(4, 5, 'Bread', 'Uncle Bens Whole Grian', 5.49, 44, 'GRA011'),
(5, 7, 'Dasani Water (24pk)', 'Spring Water 24 Pack', 9.99, 9, 'BEV002'),
(6, 8, 'TV Dinner', 'Cheap, quick and super easy dinner!', 2.89, 17, 'FRO189'),
(7, 10, 'Toilet Paper', 'Charmin Ultra Soft 12Pk', 16.89, 88, 'OTH002'),
(8, 1, 'Banana', 'Banana from Ecuador! Enjoy!', 0.86, 189, 'FRU009'),
(9, 1, 'Tomato', 'Roma Tomato', 1.13, 44, 'FRU012'),
(10, 10, 'Yogurt', 'Vanilla Greek Yogurt (4pk)', 7.99, 23, 'DAI019'),
(27, 14, '', '', 0.00, 0, '');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `items`
--
ALTER TABLE `items`
  ADD PRIMARY KEY (`id`),
  ADD KEY `category_id` (`category_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `items`
--
ALTER TABLE `items`
  MODIFY `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `items`
--
ALTER TABLE `items`
  ADD CONSTRAINT `items_ibfk_1` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
