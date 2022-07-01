/*
  Warnings:

  - You are about to drop the `Materias` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Materias";

-- CreateTable
CREATE TABLE "materia" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "codigo" TEXT NOT NULL,
    "profesor" TEXT NOT NULL,
    "iniciales_profesor" TEXT NOT NULL,
    "creditos" INTEGER NOT NULL,
    "carrera" TEXT NOT NULL,

    CONSTRAINT "materia_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "estudiante" (
    "id" SERIAL NOT NULL,
    "primer_nombre" TEXT NOT NULL,
    "primer_apellido" TEXT NOT NULL,
    "edad" INTEGER NOT NULL,
    "pais_origen" TEXT NOT NULL,
    "carrera" TEXT NOT NULL,
    "materia_cursada" TEXT NOT NULL,
    "es_moroso" TEXT NOT NULL,
    "deuda_ciclo_actual" INTEGER NOT NULL,

    CONSTRAINT "estudiante_pkey" PRIMARY KEY ("id")
);


