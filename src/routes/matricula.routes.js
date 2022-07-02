import { Router } from "express";
import { PrismaClient } from "@prisma/client";

const router = Router();
const prisma = new PrismaClient();

//POST Matricula
router.post('/Matricula', async (req, res) => {
    const result = await prisma.matricula.create({
      // req.body es la info que manda el usuario para crear
      data: req.body
  
    });
    res.json(result);
  })
//GET MATRICULA
router.get('/Matriculas', async (req, res) => {
    const materias = await prisma.matricula.findMany();
    res.json(materias);
  })