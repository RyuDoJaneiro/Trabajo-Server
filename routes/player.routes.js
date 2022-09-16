const router = require("express").Router();
const { getPlayers, postPlayer, putPlayer, deletePlayer } = require("../controllers/player.controllers");

router.get("/player", getPlayers);
router.post("/player", postPlayer);
router.put("/player", putPlayer);
router.delete("/player", deletePlayer);

module.exports = router;