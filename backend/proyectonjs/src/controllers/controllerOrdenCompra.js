var mongoose =require('../conexDB/conn');
var Ordencompra =require('../models/ordencompra');


function prueba(req,res){
    res.status(200).send({
        message:'probando una acción'
    });
}

function saveOrdencompra(req,res){
    var myOrdencompra= new Ordencompra(req.body);
    myOrdencompra.save((err,result) => {
        res.status(200).send({message : result});
    });
}

function buscarDataOrdencompra(req,res){
    var idOrdencompra=req.params.id;
    Ordencompra.findById(idOrdencompra).exec((err,result)=>{
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

function listarAllDataOrdencompra(req,res){
var idOrdencompra=req.params.id;
    if(!idOrdencompra){
        var result=Ordencompra.find({}).sort('nombre');
    }else{
        var result=Ordencompra.find({Ordencompra:idOrdencompra}).sort('nombre');
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

function updateOrdencompra(req,res){
    var idOrdencompra = req.params.id;
    Ordencompra.findOneAndUpdate({Ordencompra:idOrdencompra}, req.body,{new: true}, 
    function(err,Ordencompra) {
        if(err) res.send(err);
        res.json(Ordencompra);
    });
}

function deleteOrdencompra(req,res){
    var idOrdencompra = req.params.id;
    Ordencompra.findByIdAndRemove(idOrdencompra, function(err, Ordencompra){
        if(err){
        return res.json(500).send({message:'No hemos encontrado el Orden de compra'});
    }
    return res.json(Ordencompra);
    });
}

module.exports={
    saveOrdencompra,
    buscarDataOrdencompra,
    listarAllDataOrdencompra,
    deleteOrdencompra,
    updateOrdencompra

}