/*
  Warnings:

  - Added the required column `isComplete` to the `Task` table without a default value. This is not possible if the table is not empty.
  - Added the required column `isDelete` to the `Task` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Task" ADD COLUMN     "isComplete" BOOLEAN NOT NULL,
ADD COLUMN     "isDelete" BOOLEAN NOT NULL;
