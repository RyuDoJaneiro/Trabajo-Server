const Player = require("../src/models/Player")
const ctrlPlayer = {};

// Obtener todos los jugadores de la base de datos
ctrlPlayer.getPlayers = (async (req, res)=>{
        const players = await Player.find();
        return res.json(players);
});

// Crear un nuevo jugador
ctrlPlayer.postPlayer = ( async (req, res)=>{
        const { playername, password, email, levelscompleted } = req.body;

        // Se crea un nuevo jugador con los datos anteriormente obtenidos
        const newPlayer = new Player({
                playername, 
                password, 
                email, 
                levelscompleted
        });
        
        // Se guarda el jugador con el método .save()
        const player = await newPlayer.save();

        // Se devuelve un mensaje y el jugador creado
        return res.json({
                message: "Jugador creado correctamente",
                player
        })
});

// Controlador para actualizar un jugador
ctrlPlayer.putPlayer = ( async (req, res)=>{        
        res.send({
                message: "Petición PUT"
        })
});

// Controlador para eliminar un jugador
ctrlPlayer.deletePlayer = ( async (req, res)=>{
        res.send({
                message: "Petición DELETE"
        })
});

module.exports = ctrlPlayer;