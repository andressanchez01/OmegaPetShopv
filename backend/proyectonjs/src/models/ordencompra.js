var
mongoose=require('mongoose');
var Schema=mongoose.Schema;

var OrdencompraSchema=Schema({
    idOrden:String,
    idCliente:String,
    fecha:String
    });

const Ordencompra = mongoose.model('ordencompra',OrdencompraSchema);
module.exports = Ordencompra;