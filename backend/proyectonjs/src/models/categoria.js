var
mongoose=require('mongoose');
var Schema=mongoose.Schema;

var CategoriaSchema=Schema({
    idCategoria:String,
    nombreCategoria:String,
    tipoCategoria:String
    });

const Categoria = mongoose.model('categoria',CategoriaSchema);
module.exports = Categoria;