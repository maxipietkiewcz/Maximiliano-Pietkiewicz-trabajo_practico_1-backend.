const { sequelize, DataTypes } = require("../config/database");

const Usuario = sequelize.define(
  "Usuario",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre_usuario: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    correo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    contraseña: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    createdAt: true,
    updatedAt: true,
  }
);

module.exports = Usuario;
