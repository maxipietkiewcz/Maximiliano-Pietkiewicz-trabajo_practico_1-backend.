const Usuario = require("../models/users");

async function crearUsuario(req, res) {
  try {
    const { nombre_usuario, correo, contraseña } = req.body;
    const usuario = await Usuario.create({
      nombre_usuario,
      correo,
      contraseña,
    });
    res.status(201).json(usuario);
  } catch (error) {
    res.status(500).json({ error: "Error al crear el usuario" });
  }
}

module.exports = {
  crearUsuario,
};
