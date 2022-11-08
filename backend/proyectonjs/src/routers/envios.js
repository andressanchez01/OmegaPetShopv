const express = require("express");
const router = express.Router();
const envioController = require("../controllers/enviosController");
const auth = require("../middleware/auth");
const { check } = require("express-validator");

//crea envios
// api/envios
router.post(
  "/api/envios",
  auth,
  [check("idEnvio", "El id del envio es obligatorio").not().isEmpty()],
  envioController.crearEnvio

);

// Obtener envios

router.get("/api/envios", auth, envioController.obtenerEnvios);

//Actualizar envio vía ID
router.put(
  "/api/envios/:id",
  auth,
  [check("idEnvio", "El id del envio es obligatorio").not().isEmpty()],
  envioController.actualizarEnvio
);

//Eliminar un envio
router.delete(
  "/api/envios/:id",
  auth,
  envioController.eliminarEnvio
);


module.exports = router;
