-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: localhost    Database: carehomedb
-- ------------------------------------------------------
-- Server version	8.0.34

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `carehome`
--

DROP TABLE IF EXISTS `carehome`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `carehome` (
  `id` int NOT NULL DEFAULT '0',
  `image` varchar(255) DEFAULT NULL,
  `home` varchar(255) DEFAULT NULL,
  `holding` varchar(255) DEFAULT NULL,
  `area` varchar(255) DEFAULT NULL,
  `postal` varchar(255) DEFAULT NULL,
  `tags` varchar(255) DEFAULT NULL,
  `facilities` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `carehome`
--

LOCK TABLES `carehome` WRITE;
/*!40000 ALTER TABLE `carehome` DISABLE KEYS */;
INSERT INTO `carehome` VALUES (5,'http://localhost:5000/images/deltahero.png','delta health care, rampura limited','381/A, West Rampura, DIT Rd','rampura','1219','[\"hospita\",\"dental\",\"healthcare for kids\",\"medical counseling\"]','[\"modern equipments\",\"gynecology\",\"surgery\",\"qualified doctors\",\"laboratory\",\"Pharmacy\",\"Ambulance\"]'),(6,'http://localhost:5000/images/betterlifehero.png','better life hospital','1, 1 Sahid Muktijoddha Faruk Iqbal And Taslim Rd','rampura','1219','[\"hospita\",\"healthcare for kids\",\"medical counseling\",\"blood bank\"]','[\"modern equipments\",\"qualified doctors\",\"laboratory\",\"Pharmacy\",\"Ambulance\"]'),(7,'http://localhost:5000/images/bdmulticare.jpg','bangladesh multicare hospital','382, West Rampura, DIT Rd','rampura','1219','[\"hospita\",\"medical counseling\",\"ENT\",\"dental\",\"Burn & Plastic Surgery\"]','[\"modern equipments\",\"qualified doctors\",\"laboratory\",\"Pharmacy\",\"Ambulance\"]'),(8,'http://localhost:5000/images/fazay.jpg','farazy hospital limited','House#15-19, Block-E, Banasree Main Road','rampura','1219','[\"hospita\",\"kids care\",\"medical counseling\",\"ENT\",\"dental\"]','[\"modern equipments\",\"qualified doctors\",\"laboratory\",\"Pharmacy\",\"Ambulance\"]'),(9,'http://localhost:5000/images/labaidgulshan.jpg','labaid hospital','House # 13/A (4th Floor), Road#35','gulshan','1212','[\"hospita\",\"medical counseling\"]','[\"qualified doctors\",\"laboratory\",\"Pharmacy\"]'),(10,'http://localhost:5000/images/diagnostic.jpg','fairways medical centre ltd','Plot-76/A, Road-11 Bir Uttam Khademul Bashar Road',' Banani','1213','[\"medical center\"]','[\"laboratory\"]'),(11,'http://localhost:5000/images/diagnostic2.jpg','popular diagnostic centre ltd','Cha-90/2, Pragoti Sharoni','gulshan','1212','[\"medical counseling\",\"diagnostic\"]','[\"modern equipments\",\"qualified doctors\",\"laboratory\"]'),(12,'http://localhost:5000/images/popularhc.jpg','popular medical college hospital','House: 08, Road: 02',', Dhanmondi','1205','[\"hospita\",\"medical counseling\",\"blood bank\",\"college\",\"ENT\"]','[\"modern equipments\",\"gynecology\",\"surgery\",\"qualified doctors\",\"laboratory\",\"Ambulance\"]'),(13,'http://localhost:5000/images/farazydiag.jpg','farazy diagnostic and hospital ltd','1204, Madani Avenue, 100 Feet Road, Natun Bazar','Baridhara','1212','[\"hospita\",\"medical counseling\",\"dagnostic\"]','[\"modern equipments\",\"qualified doctors\",\"laboratory\",\"Pharmacy\",\"Ambulance\"]');
/*!40000 ALTER TABLE `carehome` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-10-28 12:37:38
