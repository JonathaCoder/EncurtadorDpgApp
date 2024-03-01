/*
  Warnings:

  - Added the required column `originalUrl` to the `LinkUrl` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `LinkUrl` ADD COLUMN `originalUrl` VARCHAR(191) NOT NULL;
