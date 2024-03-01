/*
  Warnings:

  - The primary key for the `LinkUrl` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `LinkUrl` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.

*/
-- AlterTable
ALTER TABLE `LinkUrl` DROP PRIMARY KEY,
    ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    MODIFY `id` INTEGER NOT NULL AUTO_INCREMENT,
    MODIFY `link` VARCHAR(255) NOT NULL,
    MODIFY `originalUrl` TEXT NOT NULL,
    ADD PRIMARY KEY (`id`);
