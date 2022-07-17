import express from 'express';
import { PrismaClient } from '@prisma/client';

import estudianteRoutes from "./routes/estudiante.routes.js";
import materiaRoutes from "./routes/materia.routes.js";
import profesoreRoutes from "./routes/profesor.routes.js";
import facultadRoutes from "./routes/facultad.routes.js";
import matriculasRoutes from "./routes/matricula.routes.js";
import morgan from "morgan";
import cors from "cors";


const app = express()
const prisma = new PrismaClient()
const cors = cors;

app.use(express.json())
app.use(morgan("dev"));
app.set('port', (process.env.PORT || 5000));
const corrOptions = {
    origin: 'https://jp-bd.herokuapp.com',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}


app.use(express.json());
app.use(estudianteRoutes);
app.use(materiaRoutes);
app.use(profesoreRoutes);
app.use(facultadRoutes);
app.use(matriculasRoutes);
app.use(cors(corrOptions));

//For avoidong Heroku $PORT error
app.get('/', function(req, response) {
  var result = 'App is running'
  response.send(result);
}).listen(app.get('port'), function() {
  console.log('App is running, server is listening on port ', app.get('port'));
});
 







