/*
  Warnings:

  - You are about to drop the column `materias_cursadas` on the `estudiante` table. All the data in the column will be lost.
  - You are about to drop the column `iniciales_profesor` on the `materia` table. All the data in the column will be lost.
  - You are about to drop the column `profesor` on the `materia` table. All the data in the column will be lost.
  - You are about to drop the `Job` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `facultad_id` to the `estudiante` table without a default value. This is not possible if the table is not empty.
  - Added the required column `materia_id` to the `estudiante` table without a default value. This is not possible if the table is not empty.
  - Added the required column `facultad_id` to the `materia` table without a default value. This is not possible if the table is not empty.
  - Added the required column `profesor_id` to the `materia` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "estudiante" DROP COLUMN "materias_cursadas",
ADD COLUMN     "facultad_id" INTEGER NOT NULL,
ADD COLUMN     "materia_id" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "materia" DROP COLUMN "iniciales_profesor",
DROP COLUMN "profesor",
ADD COLUMN     "facultad_id" INTEGER NOT NULL,
ADD COLUMN     "profesor_id" INTEGER NOT NULL;

-- DropTable
DROP TABLE "Job";

-- CreateTable
CREATE TABLE "facultad" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "nombre_decano" TEXT NOT NULL,
    "Abreviacion" TEXT NOT NULL,

    CONSTRAINT "facultad_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "profesor" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "apellido" TEXT NOT NULL,
    "facultad_id" INTEGER NOT NULL,

    CONSTRAINT "profesor_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "estudiante" ADD CONSTRAINT "estudiante_materia_id_fkey" FOREIGN KEY ("materia_id") REFERENCES "materia"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "estudiante" ADD CONSTRAINT "estudiante_facultad_id_fkey" FOREIGN KEY ("facultad_id") REFERENCES "facultad"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "materia" ADD CONSTRAINT "materia_facultad_id_fkey" FOREIGN KEY ("facultad_id") REFERENCES "facultad"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "materia" ADD CONSTRAINT "materia_profesor_id_fkey" FOREIGN KEY ("profesor_id") REFERENCES "profesor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "profesor" ADD CONSTRAINT "profesor_facultad_id_fkey" FOREIGN KEY ("facultad_id") REFERENCES "facultad"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
