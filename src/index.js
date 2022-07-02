import express from 'express';
import { PrismaClient } from '@prisma/client';

import estudianteRoutes from "./routes/estudiante.routes.js";
import materiaRoutes from "./routes/materia.routes.js";
import profesoreRoutes from "./routes/profesor.routes.js";
import facultadRoutes from "./routes/facultad.routes.js";
import matriculasRoutes from "./routes/matricula.routes.js";
import morgan from "morgan";

const app = express()
const prisma = new PrismaClient()
app.use(express.json())
app.use(morgan("dev"));

app.use(express.json());
app.use(estudianteRoutes);
app.use(materiaRoutes);
app.use(profesoreRoutes);
app.use(facultadRoutes);
app.use(matriculasRoutes);

app.get('/', (req, res) => {
  res.send('- Si sirve la API 👩 -')
})

app.listen(8002, () => {
  console.log(`:S Example app listening on port 8002`)
})

 








