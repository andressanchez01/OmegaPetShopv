var
mongoose=require('mongoose');
var Schema=mongoose.Schema;

var EnvioSchema=Schema({
    idEnvio:String,
    idCliente:String,
    fecha:String
    });

const Envio = mongoose.model('envio',EnvioSchema);
module.exports = Envio;