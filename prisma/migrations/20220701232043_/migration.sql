/*
  Warnings:

  - You are about to drop the column `materia_id` on the `estudiante` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "estudiante" DROP CONSTRAINT "estudiante_materia_id_fkey";

-- AlterTable
ALTER TABLE "estudiante" DROP COLUMN "materia_id";

-- CreateTable
CREATE TABLE "matricula" (
    "id" SERIAL NOT NULL,
    "materia_id" INTEGER NOT NULL,
    "estudiante_id" INTEGER NOT NULL,

    CONSTRAINT "matricula_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "matricula" ADD CONSTRAINT "matricula_estudiante_id_fkey" FOREIGN KEY ("estudiante_id") REFERENCES "estudiante"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "matricula" ADD CONSTRAINT "matricula_materia_id_fkey" FOREIGN KEY ("materia_id") REFERENCES "materia"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
