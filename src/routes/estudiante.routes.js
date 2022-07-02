import { Router } from "express";
import { PrismaClient } from "@prisma/client";

const router = Router();
const prisma = new PrismaClient();


//CRUD PRINCIPAL ESTUDIANTE
//POST Estudiante
router.post('/Estudiante', async (req, res) => {
    const result = await prisma.estudiante.create({
      // req.body es la info que manda el usuario para crear
      data: req.body
  
    });
    res.json(result);
  })

  
//GET ESTUDIANTE
router.get('/Estudiante', async (req, res) => {
    const materias = await prisma.estudiante.findMany({
      include:{
        materias: true
      }
    });
    res.json(materias);
  })


//DELETE ESTUDIANTE
router.delete(`/Estudiante/:id`, async (req, res) => {
    const { id } = req.params;
    try{
    const estudiante = await prisma.estudiante.delete({
      where: { id: Number(id)},
    });
    if(estudiante){
      res.json({Completado: `Estudiante con el id ${id} borrado exitosamente` })
      res.json(estudiante);
  
    }else{
      res.json({error: `Estudiante con el id ${id} no se puede borrar ya que no existe`})
    }
  }catch(e){
    res.json({error: `Estudiante con el id  ${id} no se puede borrar ya que no existe`})
  }})
  

//PUT
router.put('/Estudiante/:id', async (req, res) => {
    const { id } = req.params;
    try {
      const updateEst = await prisma.estudiante.update({
        where: { id: Number(id)},
        // req.body es la info que manda el usuario para actualizar
        data: req.body
      });
      res.json(updateEst);
    } catch(e) {
      res.json({error: `Estudiante con el id ${id} no existe`})
    }
  })
  
//GET ESTUDIANTE ID

//GET BY ID
router.get('/Estudiante/:id', async (req, res) => {
    const { id } = req.params;
    try{
      const getEst = await prisma.estudiante.findUnique({
        where: { id: Number(id)},
        include: {   
            materias: true
        }
      });
      if(getEst){
        res.json(getEst);
      }else{
        res.json({error: `Estudiante con el id ${id} no existe`})
      }
    }catch(e){
      res.json({error: `No se pueden ingresar letras : ${id} `})
    }})
export default router;

//GET ESTUDIANTES ASIGNADOS A UN PROFESOR
router.get('/Estudiante/:id/profesores', async (req, res) => {
    const { id } = req.params;
    // const id = req.params.id
  
    const employees = await prisma.profesor.findMany({
      where: {
        id: Number(id)},
        include:{
            _count:{
                select:{
                    materias: true
                }
            }
        }
      }
    );
  
    res.json(employees);
  });
  