const express = require("express");
const router = express.Router();
const tareaController = require("../controllers/tareaController");
const auth = require("../middleware/auth");
const { check } = require("express-validator");

//crear tarea
//api/tareas

router.post(
  "/api/tareas",
  auth,
  [check("nombre", "Nombre es obligatorio").not().isEmpty()],
  tareaController.crearTarea
);

router.get("/api/tareas", auth, tareaController.obtenerTareas);

router.put("/api/tareas/:id", auth, tareaController.actualizarTarea);

router.delete('/api/tareas/:id',auth,tareaController.eliminarTarea);

module.exports = router;
