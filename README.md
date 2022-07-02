# API POST
API CREADA PARA EL REGISTRO DE UNA SEDE DE EDUCACION CONS SUS RESPECTIVOS CRUDS Y RELACIONES HECHA EN JS,NODE.JS,POSTGRSS,EXPRESS,PRISMA
## Ejemplo de POST 
POST PROFESOR
   {
     "nombre": "Eduardo",
     "apellido": "Jimenez",
     "facultad_id": 1
    } 
POST FACULTAD
   {
     "nombre": "Universidad America",
     "nombre_decano": "Armando Alonso",
     "Abreviacion": "UVA"
    }      

POST ESTUDIANTE
   {
     "primer_nombre": "Dodanim",
     "primer_apellido": "Junior",
     "edad": "19",
     "pais_origen": "Costa Rica",
     "carrera": "Ingenieria en Sistemas",
     "es_moroso": "No",
     "facultad_id": 1,
     "deuda_ciclo_actual":0
     
    }     
POST MATERIA
   {
     "nombre": "Programacion 1",
     "codigo": "S4SA",
     "creditos": 3,
     "carrera": "Ingenieria en Sistemas",
     "facultad_id": 1,
     "profesor_id": 1
    }     