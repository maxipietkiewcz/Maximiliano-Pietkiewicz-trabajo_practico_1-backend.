const { Router } = require("express");
const {
  traerProyectos,
  traerProyecto,
  crearProyecto,
  actualizarProyecto,
  eliminarProyecto,
} = require("../controllers/project");
const routes = Router();

routes.get("/proyectos", traerProyectos);
routes.get("/proyectos/:id", traerProyecto);
routes.post("/nuevo-proyecto", crearProyecto);
routes.put("/actualizar-proyecto/:id", actualizarProyecto);
routes.delete("/eliminar-proyecto/:id", eliminarProyecto);

module.exports = routes;
