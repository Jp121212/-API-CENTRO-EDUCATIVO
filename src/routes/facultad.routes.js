import { Router } from "express";
import { PrismaClient } from "@prisma/client";

const router = Router();
const prisma = new PrismaClient();


//CRUD FACULTAD

//POST FACULTAD
router.post('/facultad', async (req, res) => {
    const result = await prisma.facultad.create({
      // req.body es la info que manda el usuario para crear
      data: req.body
    });
    res.json(result);
  })

//GET TODO DE CADA FACULTAD
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

//DELETE FACULTAD
router.delete(`/Facultad/:id`, async (req, res) => {
    const { id } = req.params;
    try{
    const facultad = await prisma.facultad.delete({
      where: { id: Number(id)},
    });
    if(facultad){
      res.json({Completado: `Facultad con el id ${id} borrado exitosamente` })
      res.json(estudiante);
  
    }else{
      res.json({error: `Facultad con el id ${id} no se puede borrar ya que no existe`})
    }
  }catch(e){
    res.json({error: `Facultad con el id  ${id} no se puede borrar ya que no existe`})
  }})
  
//PUT FACULTAD
router.put('/Facultad/:id', async (req, res) => {
    const { id } = req.params;
    try {
      const updateFac = await prisma.facultad.update({
        where: { id: Number(id)},
        // req.body es la info que manda el usuario para actualizar
        data: req.body
      });
      res.json(updateFac);
    } catch(e) {
      res.json({error: `Facultad con el id ${id} no existe`})
    }
  })

//GET MATERIAS DE UNA FACULTAD
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

//GET ESTUDIANTES ID DE UNA FACULTAD
  router.get('/facultad/:id/estudiantes', async (req, res) => {
    const { id } = req.params;
    // const id = req.params.id
  
    const employees = await prisma.estudiante.findMany({
      where: {
        facultad_id: Number(id)
      }
    });
  
    res.json(employees);
  });
  

//GET PROFESORES ID DE UNA FACULTAD
router.get('/facultad/:id/profesores', async (req, res) => {
    const { id } = req.params;
    // const id = req.params.id
  
    const employees = await prisma.profesor.findMany({
      where: {
        facultad_id: Number(id)
      }
    });
  
    res.json(employees);
  });
  
//GET BY ID
router.get('/Facultad/:id', async (req, res) => {
    const { id } = req.params;
    try{
      const getFac = await prisma.facultad.findUnique({
        where: { id: Number(id)},
        include: {  materias: true,
                    estudiants: true,
                    profesores: true
      }
      });
      if(getFac){
        res.json(getFac);
      }else{
        res.json({error: `Facultad con el id ${id} no existe`})
      }
    }catch(e){
      res.json({error: `No se pueden ingresar letras : ${id} `})
    }})


export default router;