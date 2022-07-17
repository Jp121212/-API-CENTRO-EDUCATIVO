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
const cors = require('cors');
app.use(cors({
    origin: 'https://jp-bd.herokuapp.com',
}));
app.use(express.json())
app.use(morgan("dev"));
app.set('port', (process.env.PORT || 5000));

app.use(express.json());
app.use(estudianteRoutes);
app.use(materiaRoutes);
app.use(profesoreRoutes);
app.use(facultadRoutes);
app.use(matriculasRoutes);

//For avoidong Heroku $PORT error
app.get('/', function(req, response) {
  var result = 'App is running'
  response.send(result);
}).listen(app.get('port'), function() {
  console.log('App is running, server is listening on port ', app.get('port'));
});
 








