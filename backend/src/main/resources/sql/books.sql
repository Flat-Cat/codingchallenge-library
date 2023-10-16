-- phpMyAdmin SQL Dump
-- version 4.9.5deb2
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Erstellungszeit: 29. Sep 2023 um 11:20
-- Server-Version: 10.3.38-MariaDB-0ubuntu0.20.04.1
-- PHP-Version: 7.4.3-4ubuntu2.19

-- Datebank "book_library" Erstellen und verwenden. 
CREATE DATABASE IF NOT EXISTS `book_library`;
USE `book_library`;

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Datenbank: `book_library`
--

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `books`
--

CREATE TABLE `books` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `title` varchar(255) NOT NULL,
  `author` varchar(255) NOT NULL,
  `pub_year` int(250) DEFAULT NULL,
  `isbn` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Daten für Tabelle `books`
--

INSERT INTO `books` (`id`, `title`, `author`, `pub_year`, `isbn`) VALUES
(1, 'Die 13½ Leben des Käptn Blaubär', 'Walter Moers', 1999, '978-3492247507'),
(2, 'Rumo und Die Wunder im Dunkeln', 'Walter Moers', 2003, '978-3492247668'),
(3, 'Die Stadt der Träumenden Bücher', 'Walter Moers', 2000, '978-3492248177'),
(4, 'Ensel und Krete', 'Walter Moers', 2000, '978-3492247965'),
(5, 'Das Labyrinth der Träumenden Bücher', 'Walter Moers', 2011, '978-3499242022'),
(6, 'Der Herr der Ringe', 'J.R.R. Tolkien', 1954, '978-3608939181'),
(7, 'Harry Potter und der Stein...', 'J.K. Rowling', 1997, '978-3551557414'),
(8, 'Stolz und Vorurteil', 'Jane Austen', 1813, '978-0141439518'),
(9, '1984', 'George Orwell', 1949, '978-0451524935'),
(10, 'Der kleine Prinz', 'Antoine de Saint-Exupéry', 1943, '978-3791504957'),
(11, 'To Kill a Mockingbird', 'Harper Lee', 1960, '978-0061120084'),
(12, 'Die Verwandlung', 'Franz Kafka', 1915, '978-3150090344'),
(13, 'Der Name der Rose', 'Umberto Eco', 1980, '978-3129009481'),
(14, 'Anna Karenina', 'Leo Tolstoy', 1877, '978-0143035008'),
(15, 'Fahrenheit 451', 'Ray Bradbury', 1953, '978-1451673319'),
(16, 'Teuflisches Genie', 'Catherine Jinks', 2008, '3-426-50041-8'),
(17, 'Teuflisches Team', 'Catherine Jinks', 2009, '3-426-50111-2'),
(18, 'Teuflischer Held', 'Catherine Jinks', 2010, '3-426-50112-0'),
(19, 'Rumo und Die Wunder im Dunkeln', 'Walter Moers', 2003, '978-3492247668'),
(111, 'Das Buch hat einen außergewöhnlich langen Titel', 'Thaliora Schattensang', 1923, '123-123-123-132');

--
-- Indizes der exportierten Tabellen
--

--
-- Indizes für die Tabelle `books`
--
ALTER TABLE `books`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `ID` (`id`);

--
-- AUTO_INCREMENT für exportierte Tabellen
--

--
-- AUTO_INCREMENT für Tabelle `books`
--
ALTER TABLE `books`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=125;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
