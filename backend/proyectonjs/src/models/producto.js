var
mongoose=require('mongoose');
var Schema=mongoose.Schema;

var ProductoSchema=Schema({
    idProducto:String,
    idCliente:String,
    nombreProducto:String,
    precioCompra:String,
    precioVenta:String,
    idCategoria:String,
    descripcionProducto:String
    });

const Producto = mongoose.model('producto',ProductoSchema);
module.exports = Producto;