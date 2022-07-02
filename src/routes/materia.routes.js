import { Router } from "express";
import { PrismaClient } from "@prisma/client";

const router = Router();
const prisma = new PrismaClient();

 //GET
 router.get('/Materia', async (req, res) => {
    const materias = await prisma.materia.findMany();
    res.json(materias);
  })

  //POST MATERIA
router.post('/Materia', async (req, res) => {
    const result = await prisma.materia.create({
      // req.body es la info que manda el usuario para crear
      data: req.body
  
    });
    res.json(result);
  })

  
export default router;