const {User, Proyecto} = require("../models/index");

async function crearUsuario(req, res) {
  try {  
    const usuario = await User.create(req.body);
    res.status(201).json(usuario);
  } catch (error) {
    res.status(500).json({error: error.message});
  }
  
}

const listarUsuarios = async (req, res) => {
  try {
    const usuarios = await User.findAll({ include: Proyecto });

    res.status(200).json(usuarios);
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = {
  crearUsuario,
  listarUsuarios
};
