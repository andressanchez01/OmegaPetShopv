var mongoose =require('../conexDB/conn');
var Envio =require('../models/envio');


function prueba(req,res){
    res.status(200).send({
        message:'probando una acción'
    });
}

function saveEnvio(req,res){
    var myEnvio= new Envio(req.body);
    myEnvio.save((err,result) => {
        res.status(200).send({message : result});
    });
}

function buscarDataEnvio(req,res){
    var idEnvio=req.params.id;
    Envio.findById(idEnvio).exec((err,result)=>{
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

function listarAllDataEnvio(req,res){
var idEnvio=req.params.id;
    if(!idEnvio){
        var result=Envio.find({}).sort('nombre');
    }else{
        var result=Envio.find({envio:idEnvio}).sort('nombre');
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

function updateEnvio(req,res){
    var idEnvio = req.params.id;
    Envio.findOneAndUpdate({envio:idEnvio}, req.body,{new: true}, 
    function(err,envio) {
        if(err) res.send(err);
        res.json(envio);
    });
}

function deleteEnvio(req,res){
    var idEnvio = req.params.id;
    Envio.findByIdAndRemove(idEnvio, function(err, envio){
        if(err){
        return res.json(500).send({message:'No hemos encontrado el envio'});
    }
    return res.json(envio);
    });
}

module.exports={
    saveEnvio,
    buscarDataEnvio,
    listarAllDataEnvio,
    deleteEnvio,
    updateEnvio

}