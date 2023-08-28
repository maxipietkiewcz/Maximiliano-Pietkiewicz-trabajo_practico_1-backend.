const { Router } = require("express");
const {
  traerProyectos,
  traerProyecto,
  crearProyecto,
  actualizarProyecto,
  eliminarProyecto,
} = require("../controllers/project");
const projectValidateSchema = require("../middlewares/projectValidateSchema");
const createProjectSchema = require("../models/projectSchema");
const routes = Router();

routes.get("/proyectos", traerProyectos);
routes.get("/proyectos/:id", traerProyecto);
routes.post("/nuevo-proyecto",createProjectSchema , projectValidateSchema ,crearProyecto);
routes.put("/actualizar-proyecto/:id", createProjectSchema, projectValidateSchema , actualizarProyecto);
routes.delete("/eliminar-proyecto/:id", eliminarProyecto);

module.exports = routes;
