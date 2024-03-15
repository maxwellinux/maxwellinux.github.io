-- MariaDB dump 10.19-11.2.2-MariaDB, for Linux (x86_64)
--
-- Host: localhost    Database: ethan
-- ------------------------------------------------------
-- Server version	11.2.2-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `collocation`
--

DROP TABLE IF EXISTS `collocation`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `collocation` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `keyword` varchar(20) NOT NULL,
  `collocation` varchar(20) NOT NULL,
  `example` varchar(20) NOT NULL,
  `class` varchar(3) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `keyword` (`keyword`,`collocation`,`example`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `collocation`
--

LOCK TABLES `collocation` WRITE;
/*!40000 ALTER TABLE `collocation` DISABLE KEYS */;
INSERT INTO `collocation` VALUES
(1,'blow','blow nose','','10'),
(2,'blow','blow up','car blows up','1'),
(3,'blow','blow up at [x]','blow up at me','1'),
(4,'blow','blow up [x]','blow up a balloon','1'),
(5,'interested','be interested in','hs is interested in ','2'),
(6,'interested','be interested to','hs is interested to ','2'),
(7,'into','be into','she is into yoga','2'),
(8,'involved','be involved with','she is involved with','2'),
(9,'jump','jump in','Let\'s jump in','1'),
(10,'kick','kick off','the movie kicks off','1'),
(11,'kick','kick off [x]','kick off the campaig','1'),
(12,'lift','lift [x]','lift a tariff','1'),
(13,'upset','upset the balance','','10');
/*!40000 ALTER TABLE `collocation` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-02-17 17:28:19
