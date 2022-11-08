const express = require("express");
const router = express.Router();
const clienteController = require("../controllers/clientesController");
const auth = require("../middleware/auth");
const { check } = require("express-validator");

//crea clientes
// api/clientes
router.post(
  "/api/clientes",
  auth,
  [check("idCliente", "El id del cliente es obligatorio").not().isEmpty()],
  clienteController.crearCliente

);

// Obtener clientes

router.get("/api/clientes", auth, clienteController.obtenerClientes);

//Actualizar cliente vía ID
router.put(
  "/api/clientes/:id",
  auth,
  [check("idCliente", "El id del cliente es obligatorio").not().isEmpty()],
  clienteController.actualizarCliente
);

//Eliminar un cliente
router.delete(
  "/api/clientes/:id",
  auth,
  clienteController.eliminarCliente
);


module.exports = router;
