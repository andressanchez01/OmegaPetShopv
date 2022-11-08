const Cliente = require("../models/Clientee");
const { validationResult } = require("express-validator");

exports.crearCliente = async (req, res) => {
  //revisar si hay errores
  const errores = validationResult(req);
  if (!errores.isEmpty()) {
    return res.status(401).json({ errores: errores.array() });
  }

  try {
    //crear un nuevo cliente
    const cliente = new Cliente(req.body);

    cliente.creador = req.usuario.id;

    cliente.save();
    res.json(cliente);
  } catch (error) {
    console.log("Hubo un error");
    console.log(error);
    res.status(400).send("Hubo un error");
  }
};

exports.obtenerClientes = async (req, res) => {
  try {
    const clientes = await Cliente.find({ creador: req.usuario.id }).sort({
      creado: -1,
    });
    res.json({ clientes });
  } catch (error) {
    console.log("Hubo un error");
    console.log(error);
    res.status(400).send("Hubo un error");
  }
};

exports.actualizarCliente = async (req, res) => {
  //revisar si hay errores
  const errores = validationResult(req);
  if (!errores.isEmpty()) {
    return res.status(401).json({ errores: errores.array() });
  }

  const { idCliente } = req.body;
  const nuevoCliente = {};

  if (idCliente) {
    nuevoCliente.idCliente = idCliente;
  }

  try {
    let cliente = await Cliente.findById(req.params.id);

    if (!cliente) {
      return res.status(400).json({ msg: "Cliente no encontrado" });
    }

    if (cliente.creador.toString() !== req.usuario.id) {
      return res.status(400).json({ msg: "No autorizado" });
    }

    cliente = await Cliente.findByIdAndUpdate(
      { _id: req.params.id },
      { $set: nuevoCliente },
      { new: true }
    );

    res.json({ cliente });
  } catch (error) {
    console.log("Hubo un error");
    console.log(error);
    res.status(400).send("Hubo un error");
  }
};

exports.eliminarCliente = async (req, res) => {
  try {
    let cliente = await Cliente.findById(req.params.id);

    if (!cliente) {
      return res.status(400).json({ msg: "Cliente no encontrado" });
    }

    if (cliente.creador.toString() !== req.usuario.id) {
      return res.status(400).json({ msg: "No autorizado" });
    }

    await Cliente.remove({ _id: req.params.id });
    res.json({ msg: "Cliente eliminado" });
  } catch (error) {
    console.log("Hubo un error");
    console.log(error);
    res.status(400).send("Hubo un error");
  }
};
