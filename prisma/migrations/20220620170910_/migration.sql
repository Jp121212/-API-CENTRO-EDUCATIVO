/*
  Warnings:

  - You are about to drop the column `materia_cursada` on the `estudiante` table. All the data in the column will be lost.
  - Changed the type of `carrera` on the `estudiante` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "estudiante" DROP COLUMN "materia_cursada",
ADD COLUMN     "materias_cursadas" JSONB,
ALTER COLUMN "edad" SET DATA TYPE TEXT,
DROP COLUMN "carrera",
ADD COLUMN     "carrera" INTEGER NOT NULL;
