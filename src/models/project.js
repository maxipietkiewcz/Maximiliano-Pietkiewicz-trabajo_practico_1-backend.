const { sequelize, DataTypes } = require("../config/database");

const Proyecto = sequelize.define(
  "Proyecto",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    titulo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    descripcion: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
  },
  {
    createdAt: true,
    updatedAt: true,
  }
);

module.exports = Proyecto;
