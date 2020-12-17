/*
 Navicat Premium Data Transfer

 Source Server         : localhost
 Source Server Type    : MySQL
 Source Server Version : 50617
 Source Host           : localhost:3306
 Source Schema         : lcsys

 Target Server Type    : MySQL
 Target Server Version : 50617
 File Encoding         : 65001

 Date: 17/12/2020 20:33:19
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `userPhone` varchar(2552) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `userPwd` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 8 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES (1, '18225149891', '123456');
INSERT INTO `user` VALUES (2, '15361420725', '123456');
INSERT INTO `user` VALUES (3, '18226149890', '123456');
INSERT INTO `user` VALUES (4, '18030942489', '123456');
INSERT INTO `user` VALUES (5, '18030982789', '123456');
INSERT INTO `user` VALUES (6, '17879873289', '123456');
INSERT INTO `user` VALUES (7, '18039087598', 'asdfghjkl.');

-- ----------------------------
-- Table structure for webcart
-- ----------------------------
DROP TABLE IF EXISTS `webcart`;
CREATE TABLE `webcart`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` mediumtext CHARACTER SET utf8 COLLATE utf8_general_ci NULL,
  `imgIcon` varbinary(2555) NULL DEFAULT NULL,
  `imgIconN` mediumtext CHARACTER SET utf8 COLLATE utf8_general_ci NULL,
  `number` int(11) NULL DEFAULT NULL,
  `price` float(10, 2) NULL DEFAULT NULL,
  `total` float(255, 0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 33 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

SET FOREIGN_KEY_CHECKS = 1;
