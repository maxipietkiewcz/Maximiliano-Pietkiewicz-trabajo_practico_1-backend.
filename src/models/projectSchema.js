const {checkSchema} = require("express-validator");

const createProjectSchema = checkSchema({
    titulo: {
        notEmpty: true,
        isLength: {
            options: { min: 3 }
        },
        errorMessage: "El nombre es obligatorio"
    },
    descripcion: {
        notEmpty: true,
        isLength: {
            options: { min: 3 }
        },
        errorMessage: "La descripcion es obligatoria"
    }
});

module.exports = createProjectSchema