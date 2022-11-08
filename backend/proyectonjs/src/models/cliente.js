var
mongoose=require('mongoose');
var Schema=mongoose.Schema;

var ClienteSchema=Schema({
    idCliente:String,
    nombreCliente:String,
    emailCliente:String,
    direccionCliente:String,
    telefonoCliente:String,
    passwordCliente:String
    });

const Cliente = mongoose.model('cliente',ClienteSchema);
module.exports = Cliente;