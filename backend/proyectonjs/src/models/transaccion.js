var
mongoose=require('mongoose');
var Schema=mongoose.Schema;

var TransaccionSchema=Schema({
    idReporte:String,
    idCliente:String,
    idOrden:String,
    idPago:String,
    idProducto:String
    });

const Transaccion = mongoose.model('transaccione',TransaccionSchema);
module.exports = Transaccion;