const express = require("express");
const app = express();
const { engine } = require("express-handlebars");
const myconnection = require("express-myconnection");
const session = require("express-session");
const mysql = require("mysql2");
const { db_connection } = require("./src/config/database");
require("dotenv").config();

//requiriendo middleware
const cors = require("cors");
const morgan = require("morgan");
const helmet = require("helmet");
//middleware
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));
app.use(helmet());

//requiriendo body parser
const bodyParser = require("body-parser");
//Configuracion de bodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Routes
app.use(require("./src/routes/project"));
app.use(require("./src/routes/task"));
app.use(require("./src/routes/users"));

app.get("/", (req, res) => {
  console.log("El server esta conectado en http://localhost:" + puerto + "/ ");
});

//Conexión a la base de datos
db_connection();

//Levantar el servidor
const puerto = process.env.PORT || 4000;
app.listen(puerto, () => {
  console.log("El server esta conectado en http://localhost:" + puerto + "/ ");
});
