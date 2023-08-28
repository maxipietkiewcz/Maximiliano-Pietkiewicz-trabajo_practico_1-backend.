const { checkSchema } = require("express-validator");


const createUserSchema = checkSchema({
    nombre_usuario: {
        notEmpty: true,
        isLength: {
            options: { min: 3 }
        },
        errorMessage: "El nombre es obligatorio"
    },
    correo: {
        notEmpty: true,
        isEmail: true,
        errorMessage: "El correo es obligatorio"
    },
    contraseña: {
        notEmpty: true,
        isLength: {
            options: { min: 3 }
        },
        errorMessage: "La contraseña es obligatoria"
    }

});

module.exports =  createUserSchema;