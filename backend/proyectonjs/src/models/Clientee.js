const mongoose = require("mongoose");

const ClienteSchema = mongoose.Schema({
  idCliente: {
    type: String,
    required: true,
    trim: true,
  },
  nombreCliente: {
    type: String,
    required: false,
    trim: true,
  },
  emailCliente: {
    type: String,
    required: false,
    trim: true,
  },
  direccionCliente: {
    type: String,
    required: false,
    trim: true,
  },
  telefonoCliente: {
    type: String,
    required: false,
    trim: true,
  },
  passwordCliente: {
    type: String,
    required: false,
    trim: true,
  },
  creador: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Usuario",
  },
  creado: { type: Date, default: Date.now() },
});

module.exports = mongoose.model("Cliente", ClienteSchema);
