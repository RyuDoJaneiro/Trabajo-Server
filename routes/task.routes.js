const router = require("express").Router();
const { getTasks, postTask, putTask, deleteTask } = require("../controllers/task.controllers");

router.get("/task", getTasks);
router.post("/task", postTask);
router.put("/task", putTask);
router.delete("/task", deleteTask);

module.exports = router;