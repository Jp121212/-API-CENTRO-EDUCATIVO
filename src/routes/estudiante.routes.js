import { Router } from "express";
import { PrismaClient } from "@prisma/client";

const router = Router();
const prisma = new PrismaClient();

//POST Estudiante
router.post('/Estudiante', async (req, res) => {
    const result = await prisma.estudiante.create({
      // req.body es la info que manda el usuario para crear
      data: req.body
  
    });
    res.json(result);
  })

  
//ESTUDIANTE
router.get('/Estudiante', async (req, res) => {
    const materias = await prisma.estudiante.findMany({
      include:{
        materias: true
        
  
      }
    });
    res.json(materias);
  })



  
export default router;