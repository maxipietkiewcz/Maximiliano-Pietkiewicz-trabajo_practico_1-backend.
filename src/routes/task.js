const { Router } = require("express");
const { crearTarea } = require("../controllers/task");
const routes = Router();
routes.post("/tareas", crearTarea);

module.exports = routes;
