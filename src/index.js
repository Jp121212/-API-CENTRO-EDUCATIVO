import express from 'express';
import { PrismaClient } from '@prisma/client';

const app = express()
const prisma = new PrismaClient()
app.use(express.json())

app.get('/', (req, res) => {
  res.send('- Si sirve la API 👩 -')
})

app.listen(8002, () => {
  console.log(`:S Example app listening on port 8002`)
})

 
app.post('/facultad', async (req, res) => {
  const result = await prisma.facultad.create({
    // req.body es la info que manda el usuario para crear
    data: req.body
  });
  res.json(result);
})
//GET
app.get('/facultad', async (req, res) => {
  const materias = await prisma.facultad.findMany({
    include:{
      materias: true,
      estudiants: true,
      profesores: true

    }
  });
  res.json(materias);
})
 //GET
app.get('/Materia', async (req, res) => {
  const materias = await prisma.materia.findMany();
  res.json(materias);
})
//POST MATERIA
app.post('/Estudiante', async (req, res) => {
  const result = await prisma.estudiante.create({
    // req.body es la info que manda el usuario para crear
    data: req.body

  });
  res.json(result);
})

//POST MATERIA
app.post('/Profesor', async (req, res) => {
  const result = await prisma.profesor.create({
    // req.body es la info que manda el usuario para crear
    data: req.body

  });
  res.json(result);
})

//POST Matricula
app.post('/Matricula', async (req, res) => {
  const result = await prisma.matricula.create({
    // req.body es la info que manda el usuario para crear
    data: req.body

  });
  res.json(result);
})

//POST MATERIA
app.post('/Materia', async (req, res) => {
  const result = await prisma.materia.create({
    // req.body es la info que manda el usuario para crear
    data: req.body

  });
  res.json(result);
})

app.get('/facultad/:id/materias', async (req, res) => {
  const { id } = req.params;
  // const id = req.params.id

  const employees = await prisma.materia.findMany({
    where: {
      facultad_id: Number(id)
    }
  });

  res.json(employees);
});


