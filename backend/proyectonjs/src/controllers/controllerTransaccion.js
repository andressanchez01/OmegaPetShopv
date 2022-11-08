var mongoose =require('../conexDB/conn');
var Transaccion =require('../models/transaccion');


function prueba(req,res){
    res.status(200).send({
        message:'probando una acción'
    });
}

function saveTransaccion(req,res){
    var myTransaccion= new Transaccion(req.body);
    myTransaccion.save((err,result) => {
        res.status(200).send({message : result});
    });
}

function buscarDataTransaccion(req,res){
    var idTransaccion=req.params.id;
    Transaccion.findById(idTransaccion).exec((err,result)=>{
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

function listarAllDataTransaccion(req,res){
var idTransaccion=req.params.id;
    if(!idTransaccion){
        var result=Transaccion.find({}).sort('nombre');
    }else{
        var result=Transaccion.find({Transaccion:idTransaccion}).sort('nombre');
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

function updateTransaccion(req,res){
    var idTransaccion = req.params.id;
    Transaccion.findOneAndUpdate({Transaccion:idTransaccion}, req.body,{new: true}, 
    function(err,Transaccion) {
        if(err) res.send(err);
        res.json(Transaccion);
    });
}

function deleteTransaccion(req,res){
    var idTransaccion = req.params.id;
    Transaccion.findByIdAndRemove(idTransaccion, function(err, Transaccion){
        if(err){
        return res.json(500).send({message:'No hemos encontrado el Transaccion'});
    }
    return res.json(Transaccion);
    });
}

module.exports={
    saveTransaccion,
    buscarDataTransaccion,
    listarAllDataTransaccion,
    deleteTransaccion,
    updateTransaccion

}