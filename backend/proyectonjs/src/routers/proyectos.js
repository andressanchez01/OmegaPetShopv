const express = require("express");
const router = express.Router();
const proyectoController = require("../controllers/proyectosController");
const auth = require("../middleware/auth");
const { check } = require("express-validator");

//crea proyectos
// api/proyectos
router.post(
  "/api/proyectos",
  auth,
  [check("nombre", "El nombre del proyecto es obligatorio").not().isEmpty()],
  proyectoController.crearProyecto
);

// Obtener proyectos

router.get("/api/proyectos", auth, proyectoController.obtenerProyectos);

//Actualizar proyecto vía ID
router.put(
  "/api/proyectos/:id",
  auth,
  [check("nombre", "El nombre del proyecto es obligatorio").not().isEmpty()],
  proyectoController.actualizarProyecto
);

//Eliminar un proyecto
router.delete(
  "/api/proyectos/:id",
  auth,
  proyectoController.eliminarProyecto
);


module.exports = router;
