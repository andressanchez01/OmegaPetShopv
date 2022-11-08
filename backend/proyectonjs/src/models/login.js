var
mongoose=require('mongoose');
var Schema=mongoose.Schema;

var LoginSchema=Schema({
    idLogin:String,
    nombreLogin:String,
    emailLogin:String,
    direccionLogin:String,
    telefonoLogin:String,
    passwordLogin:String
    });

const Login = mongoose.model('login',LoginSchema);
module.exports = Login;