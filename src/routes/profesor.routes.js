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
//Profesor GET
router.get('/Profesor', async (req, res) => {
    const materias = await prisma.profesor.findMany({
        include:{materias:true}
    });
    res.json(materias);
  })  
export default router;


//DELETE PROFESOR
router.delete(`/Profesor/:id`, async (req, res) => {
    const { id } = req.params;
    try{
    const facultad = await prisma.profesor.delete({
      where: { id: Number(id)},
    });
    if(facultad){
      res.json({Completado: `Profesor con el id ${id} borrado exitosamente` })
      res.json(estudiante);
  
    }else{
      res.json({error: `Profesor con el id ${id} no se puede borrar ya que no existe`})
    }
  }catch(e){
    res.json({error: `Profesor con el id  ${id} no se puede borrar ya que no existe`})
  }})
  
//PUT PROFESOR
router.put('/Profesor/:id', async (req, res) => {
    const { id } = req.params;
    try {
      const updateFac = await prisma.profesor.update({
        where: { id: Number(id)},
        // req.body es la info que manda el usuario para actualizar
        data: req.body
      });
      res.json(updateFac);
    } catch(e) {
      res.json({error: `Profesor con el id ${id} no existe`})
    }
  })
