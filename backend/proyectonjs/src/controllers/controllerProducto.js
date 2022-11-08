var mongoose =require('../conexDB/conn');
var Producto =require('../models/producto');


function prueba(req,res){
    res.status(200).send({
        message:'probando una acción'
    });
}

function saveProducto(req,res){
    var myProducto= new Producto(req.body);
    myProducto.save((err,result) => {
        res.status(200).send({message : result});
    });
}

function buscarDataProducto(req,res){
    var idProducto=req.params.id;
    Producto.findById(idProducto).exec((err,result)=>{
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

function listarAllDataProducto(req,res){
var idProducto=req.params.id;
    if(!idProducto){
        var result=Producto.find({}).sort('nombre');
    }else{
        var result=Producto.find({Producto:idProducto}).sort('nombre');
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

function updateProducto(req,res){
    var idProducto = req.params.id;
    Producto.findOneAndUpdate({Producto:idProducto}, req.body,{new: true}, 
    function(err,Producto) {
        if(err) res.send(err);
        res.json(Producto);
    });
}

function deleteProducto(req,res){
    var idProducto = req.params.id;
    Producto.findByIdAndRemove(idProducto, function(err, Producto){
        if(err){
        return res.json(500).send({message:'No hemos encontrado el Producto'});
    }
    return res.json(Producto);
    });
}

module.exports={
    saveProducto,
    buscarDataProducto,
    listarAllDataProducto,
    deleteProducto,
    updateProducto

}