const Proyecto = require("../models/project");

async function traerProyectos(req, res) {
  try {
    const proyectos = await Proyecto.findAll();
    res.status(200).json(proyectos);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener los proyectos" });
  }
}

async function traerProyecto(req, res) {
  const { id } = req.params;
  try {
    const proyecto = await Proyecto.findByPk(id);
    if (proyecto) {
      res.status(200).json(proyecto);
    } else {
      res.status(404).json({ mensaje: "Proyecto no encontrado" });
    }
  } catch (error) {
    res.status(500).json({ error: "Error al obtener el proyecto" });
  }
}

async function crearProyecto(req, res) {
  try {
    const { titulo, descripcion } = req.body;
    const proyecto = await Proyecto.create({ titulo, descripcion });
    res.status(201).json(proyecto);
  } catch (error) {
    res.status(500).json({ error: "Error al crear el proyecto" });
  }
}

async function actualizarProyecto(req, res) {
  const { id } = req.params;
  const { titulo, descripcion } = req.body;
  try {
    const proyecto = await Proyecto.findByPk(id);
    if (proyecto) {
      await proyecto.update({ titulo, descripcion });
      res.status(200).json(proyecto);
    } else {
      res.status(404).json({ mensaje: "Proyecto no encontrado" });
    }
  } catch (error) {
    res.status(500).json({ error: "Error al actualizar el proyecto" });
  }
}

async function eliminarProyecto(req, res) {
  const { id } = req.params;
  try {
    const proyecto = await Proyecto.findByPk(id);
    if (proyecto) {
      await proyecto.destroy();
      res.status(204).json();
    } else {
      res.status(404).json({ mensaje: "Proyecto no encontrado" });
    }
  } catch (error) {
    res.status(500).json({ error: "Error al eliminar el proyecto" });
  }
}

module.exports = {
  traerProyectos,
  traerProyecto,
  crearProyecto,
  actualizarProyecto,
  eliminarProyecto,
};
