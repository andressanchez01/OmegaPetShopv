var mongoose =require('../conexDB/conn');
var Login =require('../models/login');


function prueba(req,res){
    res.status(200).send({
        message:'probando una acción'
    });
}

function saveLogin(req,res){
    var myLogin= new Login(req.body);
    myLogin.save((err,result) => {
        res.status(200).send({message : result});
    });
}

function buscarDataLogin(req,res){
    var idLogin=req.params.id;
    Login.findById(idLogin).exec((err,result)=>{
        if(err){
            res.status(500).send({message:'Error al momento de ejecutar la solicitud'});
        }else{
            if(!result){
                    res.status(404).send({message:'El registro a buscar no se encuentra disponible'});
            }else{
                res.status(200).send({result});
            }
        }
    });
}

function listarAllDataLogin(req,res){
var idLogin=req.params.id;
    if(!idLogin){
        var result=Login.find({}).sort('nombre');
    }else{
        var result=Login.find({Login:idLogin}).sort('nombre');
    }

    result.exec(function(err,result){
        if(err){
            res.status(500).send({message:'Error al momento de ejecutar la solicitud'});
        }else{
            if(!result){
                res.status(404).send({message:'El registro a buscar no se encuentra disponible'});
            }else{
                res.status(200).send({result});
            }
        }
    });
}

function updateLogin(req,res){
    var idLogin = req.params.id;
    Login.findOneAndUpdate({Login:idLogin}, req.body,{new: true}, 
    function(err,Login) {
        if(err) res.send(err);
        res.json(Login);
    });
}

function deleteLogin(req,res){
    var idLogin = req.params.id;
    Login.findByIdAndRemove(idLogin, function(err, Login){
        if(err){
        return res.json(500).send({message:'No hemos encontrado el Login'});
    }
    return res.json(Login);
    });
}

module.exports={
    saveLogin,
    buscarDataLogin,
    listarAllDataLogin,
    deleteLogin,
    updateLogin

}