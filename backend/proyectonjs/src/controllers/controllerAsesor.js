var mongoose =require('../conexDB/conn');
var Asesor =require('../models/asesor');


function prueba(req,res){
    res.status(200).send({
        message:'probando una acción'
    });
}

function saveAsesor(req,res){
    var myAsesor= new Asesor(req.body);
    myAsesor.save((err,result) => {
        res.status(200).send({message : result});
    });
}

function buscarDataAsesor(req,res){
    var idAsesor=req.params.id;
    Asesor.findById(idAsesor).exec((err,result)=>{
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

function listarAllDataAsesor(req,res){
var idAsesor=req.params.id;
    if(!idAsesor){
        var result=Asesor.find({}).sort('nombre');
    }else{
        var result=Asesor.find({Asesor:idAsesor}).sort('nombre');
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

function updateAsesor(req,res){
    var idAsesor = req.params.id;
    Asesor.findOneAndUpdate({Asesor:idAsesor}, req.body,{new: true}, 
    function(err,Asesor) {
        if(err) res.send(err);
        res.json(Asesor);
    });
}

function deleteAsesor(req,res){
    var idAsesor = req.params.id;
    Asesor.findByIdAndRemove(idAsesor, function(err, Asesor){
        if(err){
        return res.json(500).send({message:'No hemos encontrado el Asesor'});
    }
    return res.json(Asesor);
    });
}

module.exports={
    saveAsesor,
    buscarDataAsesor,
    listarAllDataAsesor,
    deleteAsesor,
    updateAsesor

}