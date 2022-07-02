import { Router } from "express";
import { PrismaClient } from "@prisma/client";

const router = Router();
const prisma = new PrismaClient();

//POST MATERIA
router.post('/Profesor', async (req, res) => {
    const result = await prisma.profesor.create({
      // req.body es la info que manda el usuario para crear
      data: req.body
  
    });
    res.json(result);
  })

  
export default router;