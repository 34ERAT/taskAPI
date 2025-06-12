/*
  Warnings:

  - You are about to drop the column `isComplete` on the `Task` table. All the data in the column will be lost.
  - You are about to drop the column `isDelete` on the `Task` table. All the data in the column will be lost.
  - Added the required column `isCompleted` to the `Task` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Task" DROP COLUMN "isComplete",
DROP COLUMN "isDelete",
ADD COLUMN     "isCompleted" BOOLEAN NOT NULL,
ADD COLUMN     "isDeleted" BOOLEAN NOT NULL DEFAULT false;
