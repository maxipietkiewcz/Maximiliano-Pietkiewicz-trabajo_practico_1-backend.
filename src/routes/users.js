const { Router } = require("express");
const { crearUsuario } = require("../controllers/users");
const routes = Router();
routes.post("/usuarios", crearUsuario);

module.exports = routes;
