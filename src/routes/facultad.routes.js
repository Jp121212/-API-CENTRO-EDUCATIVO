import { Router } from "express";
import { PrismaClient } from "@prisma/client";

const router = Router();
const prisma = new PrismaClient();


//POST FACULTAD
router.post('/facultad', async (req, res) => {
    const result = await prisma.facultad.create({
      // req.body es la info que manda el usuario para crear
      data: req.body
    });
    res.json(result);
  })

//GET
router.get('/facultad', async (req, res) => {
    const facultad = await prisma.facultad.findMany({
      include:{
        materias: true,
        estudiants: true,
        profesores: true
  
      }
    });
    res.json(facultad);
  })

router.get('/facultad/:id/materias', async (req, res) => {
    const { id } = req.params;
    // const id = req.params.id
  
    const employees = await prisma.materia.findMany({
      where: {
        facultad_id: Number(id)
      }
    });
  
    res.json(employees);
  });

  
export default router;