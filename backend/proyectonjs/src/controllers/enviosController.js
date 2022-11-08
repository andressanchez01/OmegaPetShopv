const Envio = require("../models/Envioo");
const { validationResult } = require("express-validator");

exports.crearEnvio = async (req, res) => {
  //revisar si hay errores
  const errores = validationResult(req);
  if (!errores.isEmpty()) {
    return res.status(401).json({ errores: errores.array() });
  }

  try {
    //crear un nuevo envio
    const envio = new Envio(req.body);

    envio.creador = req.usuario.id;

    envio.save();
    res.json(envio);
  } catch (error) {
    console.log("Hubo un error");
    console.log(error);
    res.status(400).send("Hubo un error");
  }
};

exports.obtenerEnvios = async (req, res) => {
  try {
    const envios = await Envio.find({ creador: req.usuario.id }).sort({
      creado: -1,
    });
    res.json({ envios });
  } catch (error) {
    console.log("Hubo un error");
    console.log(error);
    res.status(400).send("Hubo un error");
  }
};

exports.actualizarEnvio = async (req, res) => {
  //revisar si hay errores
  const errores = validationResult(req);
  if (!errores.isEmpty()) {
    return res.status(401).json({ errores: errores.array() });
  }

  const { idEnvio } = req.body;
  const nuevoEnvio = {};

  if (idEnvio) {
    nuevoEnvio.idEnvio = idEnvio;
  }

  try {
    let envio = await Envio.findById(req.params.id);

    if (!envio) {
      return res.status(400).json({ msg: "Envio no encontrado" });
    }

    if (envio.creador.toString() !== req.usuario.id) {
      return res.status(400).json({ msg: "No autorizado" });
    }

    envio = await Envio.findByIdAndUpdate(
      { _id: req.params.id },
      { $set: nuevoEnvio },
      { new: true }
    );

    res.json({ envio });
  } catch (error) {
    console.log("Hubo un error");
    console.log(error);
    res.status(400).send("Hubo un error");
  }
};

exports.eliminarEnvio = async (req, res) => {
  try {
    let envio = await Envio.findById(req.params.id);

    if (!envio) {
      return res.status(400).json({ msg: "Envio no encontrado" });
    }

    if (envio.creador.toString() !== req.usuario.id) {
      return res.status(400).json({ msg: "No autorizado" });
    }

    await Envio.remove({ _id: req.params.id });
    res.json({ msg: "Envio eliminado" });
  } catch (error) {
    console.log("Hubo un error");
    console.log(error);
    res.status(400).send("Hubo un error");
  }
};
