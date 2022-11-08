var
mongoose=require('mongoose');
var Schema=mongoose.Schema;

var AsesorSchema=Schema({
    idAsesor:String,
    idProducto:String,
    nombreAsesor:String,
    });

const Asesor = mongoose.model('asesore',AsesorSchema);
module.exports = Asesor;