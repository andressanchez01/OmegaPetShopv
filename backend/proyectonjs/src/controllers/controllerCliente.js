var mongoose =require('../conexDB/conn');
var Cliente =require('../models/cliente');


function prueba(req,res){
    res.status(200).send({
        message:'probando una acción'
    });
}

function saveCliente(req,res){
    var myCliente= new Cliente(req.body);
    myCliente.save((err,result) => {
        res.status(200).send({message : result});
    });
}

function buscarDataCliente(req,res){
    var idCliente=req.params.id;
    Cliente.findById(idCliente).exec((err,result)=>{
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

function listarAllDataCliente(req,res){
var idCliente=req.params.id;
    if(!idCliente){
        var result=Cliente.find({}).sort('nombre');
    }else{
        var result=Cliente.find({Cliente:idCliente}).sort('nombre');
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

function updateCliente(req,res){
    var idCliente = req.params.id;
    Cliente.findOneAndUpdate({Cliente:idCliente}, req.body,{new: true}, 
    function(err,Cliente) {
        if(err) res.send(err);
        res.json(Cliente);
    });
}

function deleteCliente(req,res){
    var idCliente = req.params.id;
    Cliente.findByIdAndRemove(idCliente, function(err, Cliente){
        if(err){
        return res.json(500).send({message:'No hemos encontrado el Cliente'});
    }
    return res.json(Cliente);
    });
}

module.exports={
    saveCliente,
    buscarDataCliente,
    listarAllDataCliente,
    deleteCliente,
    updateCliente

}