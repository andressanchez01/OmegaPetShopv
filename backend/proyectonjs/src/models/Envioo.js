const mongoose = require("mongoose");

const EnvioSchema = mongoose.Schema({
  idCliente: {
    type: String,
    required: false,
    trim: true,
  },
  idEnvio: {
    type: String,
    required: true,
    trim: true,
  },
  creador: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Usuario",
  },
  creado: { type: Date, default: Date.now() },
});

module.exports = mongoose.model("Envio", EnvioSchema);
