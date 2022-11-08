var mongoose =require('../conexDB/conn');
var Pago =require('../models/pago');


function prueba(req,res){
    res.status(200).send({
        message:'probando una acción'
    });
}

function savePago(req,res){
    var myPago= new Pago(req.body);
    myPago.save((err,result) => {
        res.status(200).send({message : result});
    });
}

function buscarDataPago(req,res){
    var idPago=req.params.id;
    Pago.findById(idPago).exec((err,result)=>{
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

function listarAllDataPago(req,res){
var idPago=req.params.id;
    if(!idPago){
        var result=Pago.find({}).sort('nombre');
    }else{
        var result=Pago.find({Pago:idPago}).sort('nombre');
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

function updatePago(req,res){
    var idPago = req.params.id;
    Pago.findOneAndUpdate({Pago:idPago}, req.body,{new: true}, 
    function(err,Pago) {
        if(err) res.send(err);
        res.json(Pago);
    });
}

function deletePago(req,res){
    var idPago = req.params.id;
    Pago.findByIdAndRemove(idPago, function(err, Pago){
        if(err){
        return res.json(500).send({message:'No hemos encontrado el Pago'});
    }
    return res.json(Pago);
    });
}

module.exports={
    savePago,
    buscarDataPago,
    listarAllDataPago,
    deletePago,
    updatePago

}