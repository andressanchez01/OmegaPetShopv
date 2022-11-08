var
mongoose=require('mongoose');
var Schema=mongoose.Schema;

var PagoSchema=Schema({
    idPago:String,
    idCategoria:String,
    fecha:String
    });

const Pago = mongoose.model('pago',PagoSchema);
module.exports = Pago;