var mongoose =require('../conexDB/conn');
var Categoria =require('../models/categoria');


function prueba(req,res){
    res.status(200).send({
        message:'probando una acción'
    });
}

function saveCategoria(req,res){
    var myCategoria= new Categoria(req.body);
    myCategoria.save((err,result) => {
        res.status(200).send({message : result});
    });
}

function buscarDataCategoria(req,res){
    var idCategoria=req.params.id;
    Categoria.findById(idCategoria).exec((err,result)=>{
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

function listarAllDataCategoria(req,res){
var idCategoria=req.params.id;
    if(!idCategoria){
        var result=Categoria.find({}).sort('nombre');
    }else{
        var result=Categoria.find({Categoria:idCategoria}).sort('nombre');
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

function updateCategoria(req,res){
    var idCategoria = req.params.id;
    Categoria.findOneAndUpdate({Categoria:idCategoria}, req.body,{new: true}, 
    function(err,Categoria) {
        if(err) res.send(err);
        res.json(Categoria);
    });
}

function deleteCategoria(req,res){
    var idCategoria = req.params.id;
    Categoria.findByIdAndRemove(idCategoria, function(err, Categoria){
        if(err){
        return res.json(500).send({message:'No hemos encontrado el Categoria'});
    }
    return res.json(Categoria);
    });
}

module.exports={
    saveCategoria,
    buscarDataCategoria,
    listarAllDataCategoria,
    deleteCategoria,
    updateCategoria

}