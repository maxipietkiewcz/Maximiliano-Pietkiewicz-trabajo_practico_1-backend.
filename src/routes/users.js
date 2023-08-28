const { Router } = require("express");
const { crearUsuario, listarUsuarios } = require("../controllers/users");
const routes = Router();
const createUserSchema = require("../models/usersSchema");
const userValidateSchema = require("../middlewares/userValidateSchema");


routes.post("/usuarios", createUserSchema, userValidateSchema, crearUsuario);
routes.get("/usuarios", listarUsuarios);

module.exports = routes;
