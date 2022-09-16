const mongoose = require("mongoose");

const DBConnection = () => {
        try {
                mongoose.connect("mongodb+srv://m001-student:m001-mongodb-basics@cluster0.mi0ekip.mongodb.net/?retryWrites=true&w=majority", {
                        useNewUrlParser: true,
                        useUnifiedTopology: true
                })
                console.log("Conexión exitosa a la base de datos");
        }
        catch (error) {
                console.log("Error al conectar a la base de datos: " + error)
        }
}

module.exports = DBConnection;