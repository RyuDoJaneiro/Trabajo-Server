// Librerías
const express = require("express");
const app = express();
const path = require("path");
require("dotenv").config();

const DBConnection = require("./src/db/connection");
DBConnection();

// Compatibilidad con el formato JSON
app.use(express.json());

// Archivos estáticos
app.use(express.static(path.join(__dirname, "src/public")));

// Importo la rutas
app.use(require("./routes/task.routes"));

// Puerto
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Servidor corriendo en el puerto: ${port}`));