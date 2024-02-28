/*
  Warnings:

  - Added the required column `director` to the `Movie` table without a default value. This is not possible if the table is not empty.
  - Added the required column `yearPublished` to the `Movie` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Movie" ADD COLUMN     "Actors" TEXT[],
ADD COLUMN     "director" TEXT NOT NULL,
ADD COLUMN     "yearPublished" INTEGER NOT NULL;
