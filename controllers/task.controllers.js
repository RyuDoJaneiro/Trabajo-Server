const Task = require("../src/models/Task")
const ctrlTask = {};

// Obtener todos los jugadores de la base de datos
ctrlTask.getTasks = (async (req, res)=>{
        const tasks = await Player.find();
        return res.json(tasks);
});

// Crear un nuevo jugador
ctrlTask.postTask = ( async (req, res)=>{
        const { taskname, taskdescription, isdone } = req.body;

        // Se crea un nuevo jugador con los datos anteriormente obtenidos
        const newTask = new Task({
                taskname, 
                taskdescription, 
                isdone
        });
        
        // Se guarda el jugador con el método .save()
        const task = await newTask.save();

        // Se devuelve un mensaje y el jugador creado
        return res.json({
                message: "Tarea creada correctamente",
                task
        })
});

// Controlador para actualizar un jugador
ctrlTask.putTask = ( async (req, res)=>{        
        res.send({
                message: "Petición PUT"
        })
});

// Controlador para eliminar un jugador
ctrlTask.deleteTask = ( async (req, res)=>{
        res.send({
                message: "Petición DELETE"
        })
});

module.exports = ctrlTask;