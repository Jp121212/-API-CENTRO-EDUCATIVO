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

//PUT ID
router.put('/Materias/:id', async (req, res) => {
    const { id } = req.params;
    try {
      const updatedMat = await prisma.materia.update({
        where: { id: Number(id)},
        // req.body es la info que manda el usuario para actualizar
        data: req.body
      });
      res.json(updatedMat);
    } catch(e) {
      res.json({error: `Materias con el id ${id} no existe`})
    }
  })
 //DELETE
router.delete(`/Materias/:id`, async (req, res) => {
    const { id } = req.params;
    try{
    const materia = await prisma.materia.delete({
      where: { id: Number(id)},
    });
    if(materia){
      res.json({Completado: `Materia con el id ${id} borrado exitosamente` })
      res.json(materia);
  
    }else{
      res.json({error: `Materia con el id ${id} no se puede borrar ya que no existe`})
    }
  }catch(e){
    res.json({error: `Materia con el id  ${id} no se puede borrar ya que no existe`})
  }}) 


  //GET MATERIA BY ID
router.get('/Materias/:id', async (req, res) => {
    const { id } = req.params;
    try{
      const getMat = await prisma.materia.findUnique({
        where: { id: Number(id)},include:{
            estudiantes:true
        }
      });
      if(getMat){
        res.json(getMat);
      }else{
        res.json({error: `Materias con el id ${id} no existe`})
      }
    }catch(e){
      res.json({error: `No se pueden ingresar letras: ${id} `})
    }})

 //GET MATERIA Y LOS ESTUDIANTES
 router.get('/Materias/:id/estudiantes', async (req, res) => {
    const { id } = req.params;
    // const id = req.params.id
  
    const employees = await prisma.materia.findMany({
        where: { id: Number(id)},
        include: {  estudiantes: true,
        _count:{select:{ estudiantes:true}
                    
      }}
      
    });

    res.json(employees);
   
  });
  
  
export default router;