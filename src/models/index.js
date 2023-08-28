const Proyecto = require("../models/project");
const Task = require("../models/task");
const User = require("../models/users");


// Un usuario tiene muchos proyectos, y cada proyecto pertenece a un usuario
User.hasMany(Proyecto, { foreignKey: 'userId' });
Proyecto.belongsTo(User, { foreignKey: 'userId' });

// Un proyecto tiene muchas tareas, y cada tarea pertenece a un proyecto
Proyecto.hasMany(Task, { foreignKey: 'projectId' });
Task.belongsTo(Proyecto, { foreignKey: 'projectId' });


module.exports = {
    Proyecto,
    Task,
    User
}
