SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

CREATE DATABASE IF NOT EXISTS `cars` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `cars`;

DROP TABLE IF EXISTS `tbl_car`;
CREATE TABLE IF NOT EXISTS `tbl_car` (
  `auto_id` tinyint(4) NOT NULL AUTO_INCREMENT,
  `type_id` tinyint(4) NOT NULL,
  `omschrijving` varchar(35) NOT NULL,
  `basisprijs` decimal(10,0) NOT NULL,
  `verbruik` decimal(4,2) NOT NULL,
  `verkbelast` decimal(6,2) NOT NULL,
  `inverkbelast` decimal(4,0) NOT NULL,
  PRIMARY KEY (`auto_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=9 ;

INSERT INTO `tbl_car` (`auto_id`, `type_id`, `omschrijving`, `basisprijs`, `verbruik`, `verkbelast`, `inverkbelast`) VALUES
(1, 1, 'A180', '24442', '5.50', '248.29', '495'),
(2, 1, 'A 180 CDI BlueEFFICIENCY', '24800', '5.20', '250.00', '500'),
(3, 2, 'B300 CDI BlueEFFICIENCY', '30129', '4.40', '287.76', '495'),
(4, 3, 'C250 CGI BlueEFFICIENCY', '40414', '6.40', '287.76', '2478'),
(5, 3, 'C300 CDI 4MATIC BlueEFFICIENCY', '48642', '7.00', '715.70', '4957'),
(6, 3, 'C350 CGI 4MATIC BlueEFFICIENCY', '50941', '7.40', '1381.25', '4957'),
(7, 4, 'CL500 CDI 4MATIC BlueEFFICIENCY', '129954', '9.90', '2123.22', '4957'),
(8, 4, 'CL600', '170489', '13.80', '2421.80', '4957');

DROP TABLE IF EXISTS `tbl_type`;
CREATE TABLE IF NOT EXISTS `tbl_type` (
  `type_id` tinyint(4) NOT NULL AUTO_INCREMENT,
  `type` varchar(5) NOT NULL,
  PRIMARY KEY (`type_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=5 ;

INSERT INTO `tbl_type` (`type_id`, `type`) VALUES
(1, 'A'),
(2, 'B'),
(3, 'C'),
(4, 'CL');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
