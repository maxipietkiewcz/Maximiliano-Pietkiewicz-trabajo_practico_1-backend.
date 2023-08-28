const {Task} = require("../models/index");

async function crearTarea(req, res) {
  try {
    const tarea = await Task.create(req.body);
    res.status(201).json(tarea);
  } catch (error) {
    res.status(500).json({ error: "Error al crear la tarea" });
  }
}

module.exports = {
  crearTarea,
};
