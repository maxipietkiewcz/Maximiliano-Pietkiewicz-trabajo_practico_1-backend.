const Tarea = require("../models/task");

async function crearTarea(req, res) {
  try {
    const { titulo, descripcion } = req.body;
    const tarea = await Tarea.create({ titulo, descripcion });
    res.status(201).json(tarea);
  } catch (error) {
    res.status(500).json({ error: "Error al crear la tarea" });
  }
}

module.exports = {
  crearTarea,
};
